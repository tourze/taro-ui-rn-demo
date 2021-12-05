import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { ScrollView, Text, View } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { CommonEvent } from '@tarojs/components/types/common'
import {
  AtFloatLayoutProps,
  AtFloatLayoutState
} from '../../../types/float-layout'
import { handleTouchScroll } from '../../common/utils'
import '../../style/components/float-layout.scss';
import IconFont from "../icon-font";

export default class AtFloatLayout extends React.Component<
  AtFloatLayoutProps,
  AtFloatLayoutState
> {
  public static defaultProps: AtFloatLayoutProps
  public static propTypes: InferProps<AtFloatLayoutProps>

  public constructor(props: AtFloatLayoutProps) {
    super(props)

    const { isOpened } = props
    this.state = {
      _isOpened: isOpened
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtFloatLayoutProps): void {
    const { isOpened } = nextProps

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened)
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }

  private handleClose = (): void => {
    if (typeof this.props.onClose === 'function') {
      // TODO: Fix typings
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.props.onClose()
    }
  }

  private close = (): void => {
    this.setState(
      {
        _isOpened: false
      },
      this.handleClose
    )
  }

  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  public render(): JSX.Element {
    const { _isOpened } = this.state
    const {
      title,

      scrollY,
      scrollX,
      scrollTop,
      scrollLeft,
      upperThreshold,
      lowerThreshold,
      scrollWithAnimation
    } = this.props

    const rootClass = classNames(
      'at-float-layout',
      {
        'at-float-layout--active': _isOpened
      },
      this.props.className
    )

    return (
      <View className={rootClass} onTouchMove={this.handleTouchMove}>
        <View
          onClick={this.close}
          className={classNames({
            'at-float-layout__overlay': true,
            'at-float-layout__overlay--active': _isOpened,
          })}
        />
        <View className='at-float-layout__container'>
          {!!title && (
            <View className='at-float-layout-header'>
              <Text className='at-float-layout-header__title' numberOfLines={1}>{title}</Text>
              <View
                className={classNames(['at-float-layout-header__btn-close', `at-float-layout-header__btn-close-${Taro.getEnv()}`])}
                onClick={this.close}
              >
                <IconFont name='close' size={36} />
              </View>
            </View>
          )}

          <View className='at-float-layout-body'>
            <ScrollView
              scrollY={scrollY}
              scrollX={scrollX}
              scrollTop={scrollTop}
              scrollLeft={scrollLeft}
              upperThreshold={upperThreshold}
              lowerThreshold={lowerThreshold}
              scrollWithAnimation={scrollWithAnimation}
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore // TODO: Fix typings
              onScroll={this.props.onScroll}
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore // TODO: Fix typings
              onScrollToLower={this.props.onScrollToLower}
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore // TODO: Fix typings
              onScrollToUpper={this.props.onScrollToUpper}
              className='at-float-layout-body__content'
            >
              {this.props.children}
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,

  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false
}

AtFloatLayout.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  scrollY: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollTop: PropTypes.number,
  scrollLeft: PropTypes.number,
  upperThreshold: PropTypes.number,
  lowerThreshold: PropTypes.number,
  scrollWithAnimation: PropTypes.bool,
  onClose: PropTypes.func,
  onScroll: PropTypes.func,
  onScrollToLower: PropTypes.func,
  onScrollToUpper: PropTypes.func
}
