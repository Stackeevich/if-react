import React, { Component } from 'react';
import '../intro.css';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
// eslint-disable-next-line react/prefer-stateless-function
class Calendar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  // eslint-disable-next-line react/sort-comp
  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="search-form-group dates col-3 col-md-6 col-sm-6 InputFromTo">
        <DayPickerInput
          /* eslint-disable-next-line no-undef */
          value={from}
          placeholder="August 20, 2021"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            // eslint-disable-next-line no-undef
            selectedDays: [from, { from, to }],
            // eslint-disable-next-line no-undef
            disabledDays: { after: to, before: new Date() },
            // eslint-disable-next-line no-undef
            toMonth: to,
            // eslint-disable-next-line no-undef
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />
        <DayPickerInput
          /* eslint-disable-next-line no-return-assign */
          ref={(el) => (this.to = el)}
          /* eslint-disable-next-line no-undef */
          value={to}
          placeholder="September 16, 2021"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            // eslint-disable-next-line no-undef
            selectedDays: [from, { from, to }],
            // eslint-disable-next-line no-undef
            disabledDays: { before: from },
            // eslint-disable-next-line no-undef
            modifiers,
            // eslint-disable-next-line no-undef
            month: from,
            // eslint-disable-next-line no-undef
            fromMonth: from,
            numberOfMonths: 2,
          }}
          onDayChange={this.handleToChange}
        />
        <style>{`
          .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
          background-color: #f0f8ff;
          color: #0071c2;
          }
          .InputFromTo .DayPicker-Day {
          border-radius: 0;
          }
          .InputFromTo .DayPicker-Day--start {
          border-top-left-radius: 50%;
          border-bottom-left-radius: 50%;
          }
          .InputFromTo .DayPicker-Day--end {
          border-top-right-radius: 50%;
          border-bottom-right-radius: 50%;
          }
          .InputFromTo .DayPickerInput-Overlay {
          width: 550px;
          }
          .InputFromTo-to .DayPickerInput-Overlay {
          margin-left: -198px;
          }
        `}</style>
      </div>
    );
  }
}

export default Calendar;
