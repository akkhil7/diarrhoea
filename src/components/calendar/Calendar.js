import React from 'react';

import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import Select from 'rc-select';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import 'rc-select/assets/index.css';
import 'rc-calendar/assets/index.css';

import FullCalendar from 'rc-calendar/lib/FullCalendar';
const format = 'YYYY-MM-DD';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

function onSelect(value) {
  console.log('select', value.format(format));
}

class Calendar extends React.Component {
  constructor() {
    super()
    this.state = {
      type: 'month',
    }
  }
  onTypeChange(type) {
    this.setState({
      type:type
    });
  }

  render() {
    return(
      <div>
      <FullCalendar
          style={{ margin: 10 }}
          Select={Select}
          fullscreen
          defaultValue={now}
          onSelect={onSelect}
          type={this.state.type}
          onTypeChange={this.onTypeChange.bind(this)}
          locale={cn ? zhCN : enUS}
        />
      </div>

    )
  }
}

module.exports = Calendar;
