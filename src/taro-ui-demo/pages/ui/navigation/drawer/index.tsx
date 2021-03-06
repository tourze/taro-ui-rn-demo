import classNames from 'classnames'
import React from 'react'
import { AtBadge, AtButton, AtDrawer, AtIcon } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface DrawerPageState {
  leftDrawerShow: boolean
  rightDrawerShow: boolean
  childrenDrawerShow: boolean
  childrenItem: string[]
  icons: string[]
}

export default class DrawerPage extends React.Component<{}, DrawerPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      leftDrawerShow: false,
      rightDrawerShow: false,
      childrenDrawerShow: false,
      childrenItem: ['首页', '可自定义结构', '或自定义样式', '消息', '个人'],
      icons: ['home', '', '', 'message', 'user']
    }
  }

  private leftDrawerClick(): void {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow
    })
  }

  private rightDrawerClick(): void {
    this.setState({
      rightDrawerShow: !this.state.rightDrawerShow
    })
  }

  private childrenDrawerClick(): void {
    this.setState({
      childrenDrawerShow: !this.state.childrenDrawerShow
    })
  }

  private onItemClick(index: number): void {
    const ENV = Taro.getEnv()
    let content: string
    if (typeof index !== 'number') {
      content = ''
    } else {
      content = `你点击了第 ${+index + 1} 个项目`
    }
    if (ENV !== 'WEB') content && Taro.showModal({ content, showCancel: false })
    else content && alert(content)
  }

  private onClose(): void {
    this.setState({
      leftDrawerShow: false,
      rightDrawerShow: false,
      childrenDrawerShow: false
    })
  }

  public render(): JSX.Element {
    const { icons } = this.state
    return (
      <View className='page'>
        <DocsHeader title='Drawer 抽屉' />

        <View className='doc-body'>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>左边滑出</Text></View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.leftDrawerClick.bind(this)}>
                  显示 Drawer
                </AtButton>
                <AtDrawer
                  show={this.state.leftDrawerShow}
                  mask
                  onItemClick={this.onItemClick.bind(this)}
                  onClose={this.onClose.bind(this)}
                  items={['菜单1', '菜单2']}
                />
              </View>
            </View>
          </View>

          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>右边滑出</Text></View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.rightDrawerClick.bind(this)}>
                  显示 Drawer
                </AtButton>
                <AtDrawer
                  show={this.state.rightDrawerShow}
                  right
                  mask
                  onItemClick={this.onItemClick.bind(this)}
                  onClose={this.onClose.bind(this)}
                  items={['菜单1', '菜单2']}
                />
              </View>
            </View>
          </View>

          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义内容</Text></View>
            <View className='panel__content no-padding'>
              <View className='example'>
                <AtButton onClick={this.childrenDrawerClick.bind(this)}>
                  显示 Drawer
                </AtButton>
                <AtDrawer
                  show={this.state.childrenDrawerShow}
                  mask
                  onItemClick={this.onItemClick.bind(this)}
                  onClose={this.onClose.bind(this)}
                >
                  {this.state.childrenItem.map((item, index) => (
                    <View
                      className={classNames('drawer-item', {
                        'drawer-item--sub': index === 1 || index === 2
                      })}
                      onClick={this.onItemClick.bind(this, index)}
                      key={`drawer-item-${index}`}
                    >
                      <Text className='drawer-item--title'>
                        {item}
                      </Text>
                      {index !== 3 && !!icons[index] && (
                        <AtIcon value={icons[index]} size={40} />
                      )}
                      {index === 3 && !!icons[index] && (
                        <AtBadge value='3'>
                          <AtIcon value={icons[index]} size={40} />
                        </AtBadge>
                      )}
                      <View className='drawer-item--rest' />
                    </View>
                  ))}
                </AtDrawer>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
