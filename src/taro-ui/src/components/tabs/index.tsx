import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { ScrollView, View, Text } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtTabsProps, AtTabsState } from '../../../types/tabs'
import { isTest, mergeStyle, uuid } from '../../common/utils'
import '../../style/components/tabs.scss'

const ENV = Taro.getEnv()
const MIN_DISTANCE = 100
const MAX_INTERVAL = 10

export default class AtTabs extends React.Component<AtTabsProps, AtTabsState> {
  public static defaultProps: AtTabsProps
  public static propTypes: InferProps<AtTabsProps>

  private _tabId: string
  private _touchDot: number
  private _timer: NodeJS.Timeout | null
  private _interval: number
  private _isMoving: boolean
  private tabHeaderRef: any

  public constructor(props: AtTabsProps) {
    super(props)
    this.state = {
      _scrollLeft: 0,
      _scrollTop: 0,
      _scrollIntoView: ''
    }
    this._tabId = isTest() ? 'tabs-AOTU2018' : uuid()
    // 触摸时的原点
    this._touchDot = 0
    // 定时器
    this._timer = null
    // 滑动时间间隔
    this._interval = 0
    // 是否已经在滑动
    this._isMoving = false
  }

  private updateState = (idx: number): void => {
    if (this.props.scroll) {
      // 标签栏滚动
      switch (ENV) {
        case Taro.ENV_TYPE.WEAPP:
        case Taro.ENV_TYPE.ALIPAY:
        case Taro.ENV_TYPE.SWAN: {
          const index = Math.max(idx - 1, 0)
          this.setState({
            _scrollIntoView: `tab${this._tabId}${index}`
          })
          break
        }
        case Taro.ENV_TYPE.WEB: {
          const index = Math.max(idx - 1, 0)
          const prevTabItem = this.tabHeaderRef.childNodes[index]
          prevTabItem &&
            this.setState({
              _scrollTop: prevTabItem.offsetTop,
              _scrollLeft: prevTabItem.offsetLeft
            })
          break
        }
        default: {
          // console.warn('AtTab 组件在该环境还未适配')
          break
        }
      }
    }
  }

  private handleClick(index: number, event: CommonEvent): void {
    this.props.onClick(index, event)
  }

  private handleTouchStart(e: ITouchEvent): void {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return
    if (!e.touches) {
      return;
    }
    // 获取触摸时的原点
    this._touchDot = e.touches[0].pageX
    // 使用js计时器记录时间
    this._timer = setInterval(() => {
      this._interval++
    }, 100)
  }

  private handleTouchMove(e: ITouchEvent): void {
    const { swipeable, tabDirection, current, tabList } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - this._touchDot
    const maxIndex = tabList.length

    if (
      !this._isMoving &&
      this._interval < MAX_INTERVAL &&
      this._touchDot > 20
    ) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current + 1, e)

        // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current - 1, e)
      }
    }
  }

  private handleTouchEnd(): void {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    clearInterval(this._timer as NodeJS.Timeout)
    this._interval = 0
    this._isMoving = false
  }

  private getTabHeaderRef(): void {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.tabHeaderRef = document.getElementById(this._tabId)
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtTabsProps): void {
    if (nextProps.scroll !== this.props.scroll) {
      this.getTabHeaderRef()
    }
    if (nextProps.current !== this.props.current) {
      this.updateState(nextProps.current)
    }
  }

  public componentDidMount(): void {
    this.getTabHeaderRef()
    this.updateState(this.props.current)
  }

  public componentWillUnmount(): void {
    this.tabHeaderRef = null
  }

  public render(): JSX.Element {
    const {
      customStyle = {},
      className,
      height,
      tabDirection,
      animated,
      tabList,
      scroll,
      current
    } = this.props
    const { _scrollLeft, _scrollTop, _scrollIntoView } = this.state

    const heightStyle: React.CSSProperties = {}
    if (height) {
      heightStyle.height = Taro.pxTransform(height);
    }

    const underlineStyle: React.CSSProperties = {
      height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : Taro.pxTransform(1),
      width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : Taro.pxTransform(1),
    }
    const bodyStyle: React.CSSProperties = {}

    if (process.env.TARO_ENV !== 'rn') {
      let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`
      if (tabDirection === 'horizontal') {
        transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
      }
      Object.assign(bodyStyle, {
        transform: transformStyle,
        '-webkit-transform': transformStyle
      })
    }

    if (!animated) {
      bodyStyle.transition = 'unset'
    }

    const tabItems = tabList.map((item, idx) => {
      return (
        <View
          className={classNames({
            'at-tabs__header__item': true,
            'at-tabs__header__item--active': current === idx
          })}
          id={`tab${this._tabId}${idx}`}
          key={`at-tabs-item-${idx}`}
          onClick={this.handleClick.bind(this, idx)}
        >
          <View
            className={classNames({
              'at-tabs__header__item__title': true,
              'at-tabs__header__item__title--active': current === idx
            })}
          >
            <Text
              className={classNames({
                'at-tabs__header__item__title__text': true,
                'at-tabs__header__item__title__text--active': current === idx
              })}
            >
              {item.title}
            </Text>
          </View>
          <View
            className={classNames({
              'at-tabs__header__item-underline': true,
              'at-tabs__header__item-underline--active': current === idx
            })}
          />
        </View>
      )
    })

    const scrollX = tabDirection === 'horizontal'
    const scrollY = tabDirection === 'vertical'

    return (
      <View
        className={classNames(
          {
            'at-tabs': true,
            'at-tabs--scroll': scroll,
            [`at-tabs--${tabDirection}`]: true,
            [`at-tabs--${ENV}`]: true
          },
          className
        )}
        style={{
          ...heightStyle,
          ...customStyle,
        }}
      >
        {scroll ? (
          <ScrollView
            id={this._tabId}
            className={classNames({
              'at-tabs__header': true,
              [`at-tabs__header--${tabDirection}`]: true,
            })}
            style={heightStyle}
            scrollX={scrollX}
            scrollY={scrollY}
            scrollWithAnimation
            scrollLeft={_scrollLeft}
            scrollTop={_scrollTop}
            scrollIntoView={_scrollIntoView}
          >
            {tabItems}
          </ScrollView>
        ) : (
          <View id={this._tabId} className='at-tabs__header'>
            {tabItems}
          </View>
        )}
        <View
          className='at-tabs__body'
          onTouchStart={this.handleTouchStart.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
          onTouchMove={this.handleTouchMove.bind(this)}
          style={mergeStyle(bodyStyle, heightStyle)}
        >
          <View className='at-tabs__underline' style={underlineStyle} />
          {this.props.children}
        </View>
      </View>
    )
  }
}

AtTabs.defaultProps = {
  customStyle: {},
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {}
}

AtTabs.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  height: PropTypes.string,
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  current: PropTypes.number,
  swipeable: PropTypes.bool,
  scroll: PropTypes.bool,
  animated: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
