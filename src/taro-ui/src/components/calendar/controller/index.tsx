import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import { Picker, Text, View } from '@tarojs/components'
import {
  AtCalendarControllerProps,
  AtCalendarControllerState
} from '../../../../types/calendar'
import IconFont from '../../icon-font';
import '../../../style/components/calendar.scss';

export default class AtCalendarController extends React.Component<
  AtCalendarControllerProps,
  AtCalendarControllerState
> {
  public render(): JSX.Element {
    const {
      generateDate,
      minDate,
      maxDate,
      monthFormat,
      hideArrow
    } = this.props

    const dayjsDate: Dayjs = dayjs(generateDate)
    const dayjsMinDate: Dayjs | boolean = !!minDate && dayjs(minDate)
    const dayjsMaxDate: Dayjs | boolean = !!maxDate && dayjs(maxDate)

    const isMinMonth: boolean =
      dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate)

    const isMaxMonth: boolean =
      dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate)

    const minDateValue: string = dayjsMinDate
      ? dayjsMinDate.format('YYYY-MM')
      : ''
    const maxDateValue: string = dayjsMaxDate
      ? dayjsMaxDate.format('YYYY-MM')
      : ''

    return (
      <View className='at-calendar__controller controller'>
        {hideArrow ? null : (
          <View
            className={classnames('at-calendar__controller__arrow at-calendar__controller__arrow--left', {
              'at-calendar__controller__arrow--disabled': isMinMonth
            })}
            onClick={this.props.onPreMonth.bind(this, isMinMonth)}
          >
            <IconFont size={32} name='left' color='#999' />
          </View>
        )}
        <Picker
          mode='date'
          fields='month'
          end={maxDateValue}
          start={minDateValue}
          onChange={this.props.onSelectDate}
          value={dayjsDate.format('YYYY-MM')}
        >
          <Text className='at-calendar__controller__info'>
            {dayjsDate.format(monthFormat)}
          </Text>
        </Picker>
        {hideArrow ? null : (
          <View
            className={classnames(
              'at-calendar__controller__arrow at-calendar__controller__arrow--right',
              {
                'at-calendar__controller__arrow--disabled': isMaxMonth
              }
            )}
            onClick={this.props.onNextMonth.bind(this, isMaxMonth)}
          >
            <IconFont size={32} name='right' color='#999' />
          </View>
        )}
      </View>
    )
  }
}
