import React from 'react'
import { AtNoticebar } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class NoticebarPage extends React.Component {
  private onGotoMore(): void {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      alert('您点击了更多!')
      return
    }

    Taro.showModal({
      content: '点击了更多!',
      cancelText: '取消'
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='NoticeBar 通告栏' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 文字 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>文字</Text></View>
            <View className='panel__content'>
              <View className='notice-bar-demo-item'>
                <AtNoticebar single>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
            </View>
          </View>

          {/* 跑马灯 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>跑马灯</Text></View>
            <View className='panel__content'>
              <View className='notice-bar-demo-item'>
                <AtNoticebar marquee>
                  [纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar marquee icon='rocket'>
                  [带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar marquee>
                  [超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
                </AtNoticebar>
              </View>
            </View>
          </View>

          {/* 图标 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>图标</Text></View>
            <View className='panel__content'>
              <View className='notice-bar-demo-item'>
                <AtNoticebar icon='comment' single>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar icon='smile'>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
            </View>
          </View>

          {/* 查看更多 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>查看更多</Text></View>
            <View className='panel__content'>
              <View className='notice-bar-demo-item'>
                <AtNoticebar
                  showMore
                  single
                  onGotoMore={this.onGotoMore.bind(this)}
                >
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar
                  showMore
                  icon='crown'
                  single
                  onGotoMore={this.onGotoMore.bind(this)}
                >
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar
                  showMore
                  moreText='更多内容'
                  onGotoMore={this.onGotoMore.bind(this)}
                >
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar
                  showMore
                  moreText='更多内容'
                  icon='plus'
                  onGotoMore={this.onGotoMore.bind(this)}
                >
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
            </View>
          </View>

          {/* 关闭按钮 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>关闭按钮</Text></View>
            <View className='panel__content'>
              <View className='notice-bar-demo-item'>
                <AtNoticebar close single>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar close icon='volume-plus' single>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar
                  close
                  onGotoMore={this.onGotoMore.bind(this)}
                  single
                  showMore
                >
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar
                  close
                  icon='volume-plus'
                  showMore
                  onGotoMore={this.onGotoMore.bind(this)}
                  single
                >
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar close>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar close>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
              <View className='notice-bar-demo-item'>
                <AtNoticebar close icon='volume-plus'>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </AtNoticebar>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
