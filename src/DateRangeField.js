import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default React.createClass({
  MAXIMUM_DAYS_DIFFERENCE: 60,
  MAXIMUM_DAYS_AHEAD: 330,

  getInitialState () {
    return {
      startDate: moment(),
      endDate: moment().add(1, 'days')
    };
  },

  validateStartDate (date) {
    let difference = date.diff(moment(), 'days');
    return difference >= 0 && difference < this.MAXIMUM_DAYS_AHEAD;
  },

  validateEndDate (date) {
    let difference = date.diff(this.state.startDate, 'days');
    return difference >= 0 && difference < this.MAXIMUM_DAYS_DIFFERENCE && date.diff(moment(), 'days') < this.MAXIMUM_DAYS_AHEAD;
  },

  handleStartDateChange (newDate) {
    if(this.validateStartDate(newDate)) {
      this.setState({
        startDate: newDate
      });
    }
  },

  handleEndDateChange (newDate) {
    if(this.validateEndDate(newDate)) {
      this.setState({
        endDate: newDate
      });
    }
  },

  render () {
    return(
      <fieldset>
	<legend> Select a date for your trip </legend>
	<DatePicker
	  selected={this.state.startDate}
	  onChange={this.handleStartDateChange}
	/>
	<DatePicker
	  selected={this.state.endDate}
	  onChange={this.handleEndDateChange}
	/>
      </fieldset>
    );
  }
});

