import React from 'react'
import { AtTextarea } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  [key: string]: string
}

export default class Index extends React.Component<{}, IndexState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }

  private handleChange(stateName: string, value: string): void {
    this.setState({
      [stateName]: value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Textarea 多行文本框' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTextarea
                value={this.state.value1}
                onChange={this.handleChange.bind(this, 'value1')}
                maxLength={200}
                placeholder='你的问题是...'
              />
            </View>
          </View>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>不显示字数</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTextarea
                count={false}
                value={this.state.value2}
                onChange={this.handleChange.bind(this, 'value2')}
                maxLength={200}
                placeholder='你的问题是...'
              />
            </View>
          </View>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>文字超出仍可输入</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTextarea
                textOverflowForbidden={false}
                value={this.state.value3}
                onChange={this.handleChange.bind(this, 'value3')}
                maxLength={200}
                placeholder='你的问题是...'
              />
            </View>
          </View>
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义高度</Text></View>
            <View className='panel__content panel__content__padding'>
              <AtTextarea
                height='300'
                value={this.state.value4}
                onChange={this.handleChange.bind(this, 'value4')}
                maxLength={200}
                placeholder='你的问题是...'
              />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
