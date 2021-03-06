import PropTypes, { InferProps } from 'prop-types'
import Taro from '@tarojs/taro'
import React from 'react'
import { View } from '@tarojs/components'
import '../../style/components/loading.scss'

let ActivityIndicator: any;
if (process.env.TARO_ENV === 'rn') {
  ActivityIndicator = require('react-native').ActivityIndicator;
}

interface AtLoadingProps {
  size?: string | number
  color?: string | number
}

export default class AtLoading extends React.Component<AtLoadingProps> {
  public static defaultProps: AtLoadingProps
  public static propTypes: InferProps<AtLoadingProps>

  public render(): JSX.Element {
    const { color, size } = this.props;

    if (process.env.TARO_ENV === 'rn') {
      return (
        <ActivityIndicator size={Taro.pxTransform(size)} color={color} />
      );
    }

    const loadingSize = typeof size === 'string' ? size : String(size)

    const sizeStyle: React.CSSProperties = {};
    if (size) {
      sizeStyle.width = Taro.pxTransform(parseInt(loadingSize));
      sizeStyle.height = Taro.pxTransform(parseInt(loadingSize));
    }

    const colorStyle: React.CSSProperties = {}
    if (color) {
      colorStyle.borderTopColor = color;
      colorStyle.borderRightColor = 'transparent';
      colorStyle.borderBottomColor = 'transparent';
      colorStyle.borderLeftColor = 'transparent';
      colorStyle.borderTopWidth = Taro.pxTransform(1);
      colorStyle.borderTopStyle = 'solid';
    }
    const ringStyle = Object.assign({}, colorStyle, sizeStyle)

    return (
      <View className='at-loading' style={sizeStyle}>
        <View className='at-loading__ring' style={ringStyle} />
        <View className='at-loading__ring' style={ringStyle} />
        <View className='at-loading__ring' style={ringStyle} />
      </View>
    )
  }
}

AtLoading.defaultProps = {
  size: 0,
  color: ''
}

AtLoading.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
