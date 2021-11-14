import React from 'react'
import { AtInputNumber } from '@/taro-ui'
import { View, Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  [key: string]: number
}

export default class Index extends React.Component<{}, IndexState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      number1: 1,
      number2: 1,
      number3: 1,
      number4: 1,
      number5: 1,
      number6: 1
    }
  }

  private handleNumberChange(
    stateName: string,
    value: number,
    e: CommonEvent
  ): void {
    this.setState({
      [stateName]: value
    })
    /* eslint-disable-next-line no-console */
    console.log('Event:', e)
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Input Number 数字输入框' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>基础用法</Text></View>
            <View className='panel__content panel__content__padding'>
              <View className='example-item'>
                <Text className='example-item__desc'>
                  min=0, max=10, step=1
                </Text>
                <AtInputNumber
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number1}
                  onChange={this.handleNumberChange.bind(this, 'number1')}
                />
              </View>
            </View>
          </View>

          {/* 小数 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>小数</Text></View>
            <View className='panel__content panel__content__padding'>
              <View className='example-item'>
                <Text className='example-item__desc'>
                  min=0, max=10, step=0.1
                </Text>
                <AtInputNumber
                  type='digit'
                  min={0}
                  max={10}
                  step={0.1}
                  value={this.state.number2}
                  onChange={this.handleNumberChange.bind(this, 'number2')}
                />
              </View>
            </View>
          </View>

          {/* 禁用状态 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>禁用状态</Text></View>
            <View className='panel__content panel__content__padding'>
              <View className='example-item'>
                <AtInputNumber
                  disabled
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number3}
                  onChange={this.handleNumberChange.bind(this, 'number3')}
                />
              </View>
            </View>
          </View>
          {/* 禁用输入状态 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>禁用输入状态</Text></View>
            <View className='panel__content panel__content__padding'>
              <View className='example-item'>
                <AtInputNumber
                  disabledInput
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number6}
                  onChange={this.handleNumberChange.bind(this, 'number6')}
                />
              </View>
            </View>
          </View>

          {/* 自定义宽度 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>自定义宽度</Text></View>
            <View className='panel__content panel__content__padding'>
              <View className='example-item'>
                <AtInputNumber
                  width={200}
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number4}
                  onChange={this.handleNumberChange.bind(this, 'number4')}
                />
              </View>
            </View>
          </View>

          {/* 大尺寸 */}
          <View className='doc-body__panel'>
            <View className='doc-body__panel__title'><Text className='doc-body__panel__title__text'>大尺寸</Text></View>
            <View className='panel__content panel__content__padding'>
              <View className='example-item'>
                <AtInputNumber
                  size='large'
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.number5}
                  onChange={this.handleNumberChange.bind(this, 'number5')}
                />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
