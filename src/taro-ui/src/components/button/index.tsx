import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Button, Form, View, Text } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import { BaseEventOrig, CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtButtonProps, AtButtonState } from '../../../types/button'
import AtLoading from '../loading/index'
import '../../style/components/button.scss';

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
}

export default class AtButton extends React.Component<
  AtButtonProps,
  AtButtonState
> {
  public static defaultProps: AtButtonProps
  public static propTypes: InferProps<AtButtonProps>

  public constructor(props: AtButtonProps) {
    super(props)
    this.state = {
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
    }
  }

  private onClick(event: CommonEvent): void {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(event)
    }
  }

  private onGetUserInfo(event: CommonEvent): void {
    this.props.onGetUserInfo && this.props.onGetUserInfo(event)
  }

  private onContact(
    event: BaseEventOrig<ButtonProps.onContactEventDetail>
  ): void {
    this.props.onContact && this.props.onContact(event)
  }

  private onGetPhoneNumber(event: CommonEvent): void {
    this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event)
  }

  private onError(event: CommonEvent): void {
    this.props.onError && this.props.onError(event)
  }

  private onOpenSetting(event: CommonEvent): void {
    this.props.onOpenSetting && this.props.onOpenSetting(event)
  }

  private onSubmit(event: CommonEvent): void {
    if (this.state.isWEAPP || this.state.isWEB) {
      // TODO: 3.0 this.$scope
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.$scope.triggerEvent('submit', event.detail, {
        bubbles: true,
        composed: true
      })
    }
  }

  private onReset(event: CommonEvent): void {
    if (this.state.isWEAPP || this.state.isWEB) {
      // TODO: 3.0 this.$scope
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.$scope.triggerEvent('reset', event.detail, {
        bubbles: true,
        composed: true
      })
    }
  }

  public render(): JSX.Element {
    const {
      size = 'normal',
      type = '',
      circle,
      full,
      loading,
      disabled,
      customStyle,
      formType,
      openType,
      lang,
      sessionFrom,
      sendMessageTitle,
      sendMessagePath,
      sendMessageImg,
      showMessageCard,
      appParameter
    } = this.props
    const { isWEAPP, isALIPAY, isWEB } = this.state

    const rootClassNames = {
      'at-button': true,
      [`at-button--${SIZE_CLASS[size]}`]: true,
      'at-button--disabled': disabled,
      [`at-button--${type}`]: !!type,
      'at-button--circle': circle,
      'at-button--full': full
    }
    const textClassNames = {
      'at-button__text': true,
      [`at-button--${SIZE_CLASS[size]}--text`]: true,
      'at-button--disabled--text': disabled,
      [`at-button--${type}--text`]: !!type,
      'at-button--circle--text': circle,
      'at-button--full--text': full
    }

    const loadingColor = type === 'primary' ? '#fff' : '#6a91e1'
    const loadingSize = size === 'small' ? 30 : 36

    let loadingComponent: JSX.Element | null = null
    if (loading) {
      loadingComponent = (
        <View className='at-button__icon'>
          <AtLoading color={loadingColor} size={loadingSize} />
        </View>
      )
      rootClassNames['at-button--icon'] = true;
    }

    const webButton = (
      <Button
        className='at-button__wxbutton'
        lang={lang}
        formType={formType}
      />
    )

    const button = (
      <Button
        className='at-button__wxbutton'
        formType={formType}
        openType={openType}
        lang={lang}
        sessionFrom={sessionFrom}
        sendMessageTitle={sendMessageTitle}
        sendMessagePath={sendMessagePath}
        sendMessageImg={sendMessageImg}
        showMessageCard={showMessageCard}
        appParameter={appParameter}
        onGetUserInfo={this.onGetUserInfo.bind(this)}
        onGetPhoneNumber={this.onGetPhoneNumber.bind(this)}
        onOpenSetting={this.onOpenSetting.bind(this)}
        onError={this.onError.bind(this)}
        onContact={this.onContact.bind(this)}
      />
    )

    if (this.props.className) {
      rootClassNames[this.props.className] = true;
    }

    // console.log(rootClassNames);
    return (
      <View
        className={classNames(rootClassNames)}
        style={customStyle}
        onClick={this.onClick.bind(this)}
      >
        {isWEB && !disabled && webButton}
        {isWEAPP && !disabled && (
          <Form
            onSubmit={this.onSubmit.bind(this)}
            onReset={this.onReset.bind(this)}
          >
            {button}
          </Form>
        )}
        {isALIPAY && !disabled && button}
        {loadingComponent}
        {React.isValidElement(this.props.children)
          ? this.props.children
          : <Text className={classNames(textClassNames)}>{this.props.children}</Text>}
      </View>
    )
  }
}

AtButton.defaultProps = {
  size: 'normal',
  circle: false,
  full: false,
  loading: false,
  disabled: false,
  customStyle: {},
  // Button props
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: ''
}

AtButton.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary', '']),
  circle: PropTypes.bool,
  full: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  formType: PropTypes.oneOf(['submit', 'reset', '']),
  openType: PropTypes.oneOf([
    'contact',
    'share',
    'getUserInfo',
    'getPhoneNumber',
    'launchApp',
    'openSetting',
    'feedback',
    'getRealnameAuthInfo',
    'getAuthorize',
    'contactShare',
    ''
  ]),
  lang: PropTypes.string,
  sessionFrom: PropTypes.string,
  sendMessageTitle: PropTypes.string,
  sendMessagePath: PropTypes.string,
  sendMessageImg: PropTypes.string,
  showMessageCard: PropTypes.bool,
  appParameter: PropTypes.string,
  onGetUserInfo: PropTypes.func,
  onContact: PropTypes.func,
  onGetPhoneNumber: PropTypes.func,
  onError: PropTypes.func,
  onOpenSetting: PropTypes.func
}
