import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtTagProps } from '../../../types/tag'
import '../../style/components/tag.scss';

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
}

const TYPE_CLASS = {
  primary: 'primary'
}

export default class AtTag extends React.Component<AtTagProps> {
  public static defaultProps: AtTagProps
  public static propTypes: InferProps<AtTagProps>

  private onClick(event: CommonEvent): void {
    const { name = '', active = false, disabled, onClick } = this.props
    if (!disabled) {
      typeof onClick === 'function' &&
        onClick(
          {
            name,
            active
          },
          event
        )
    }
  }

  public render(): JSX.Element {
    const {
      size = 'normal',
      type = '',
      circle = false,
      disabled = false,
      active = false,
      customStyle
    } = this.props
    const rootClassName = ['at-tag']

    const classObject = {
      [`at-tag--${type}`]: TYPE_CLASS[type],
      [`at-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'at-tag--disabled': disabled,
      'at-tag--active': active,
      'at-tag--circle': circle,
      [`at-tag--${type}--disabled`]: disabled,
      [`at-tag--${type}--active`]: active,
      [`at-tag--${type}--circle`]: circle,
    }

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
        onClick={this.onClick.bind(this)}
      >
        {React.isValidElement(this.props.children) ? this.props.children : (
          <Text
            className={classNames({
              'at-tag__text': true,
              [`at-tag--${SIZE_CLASS[size]}__text`]: SIZE_CLASS[size],
              [`at-tag--${type}__text`]: TYPE_CLASS[type],
              'at-tag--disabled__text': disabled,
              'at-tag--active__text': active,
              'at-tag--circle__text': circle
            })}
          >
            {this.props.children}
          </Text>
        )}
      </View>
    )
  }
}

AtTag.defaultProps = {
  type: '',
  size: 'normal',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {}
}

AtTag.propTypes = {
  type: PropTypes.oneOf(['', 'primary']),
  size: PropTypes.oneOf(['normal', 'small']),
  name: PropTypes.string,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func
}
