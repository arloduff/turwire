import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default React.createClass({
  MAXIMUM_DAYS_DIFFERENCE: 60,
  MAXIMUM_DAYS_AHEAD: 330,

   getTimeOptions () {
    return [{
      value: '09:00',
      label: '9:00 AM'
    }, {
      value: '09:30',
      label: '9:30 AM'
     }, {
      value: '10:00',
      label: '10:00 AM'
     }, {
      value: '10:30',
      label: '10:30 AM'
     }, {
      value: '11:00',
      label: '11:00 AM'
     }, {
      value: '12:00',
      label: '12:00 PM'
     }, {
      value: '12:30',
      label: '12:30 PM'
     }, {
      value: '13:00',
      label: '01:00 PM'
     }, {
      value: '13:30',
      label: '1:30 PM'
     }, {
      value: '14:00',
      label: '2:00 PM'
    }, {
      value: '14:30',
      label: '2:30 PM'
    }, {
      value: '15:00',
      label: '3:00 PM'
    }, {
      value: '15:30',
      label: '3:30 PM'
    }, {
      value: '16:00',
      label: '4:00 PM'
    }, {
      value: '16:30',
      label: '4:30 PM'
    }, {
      value: '17:00',
      label: '5:00 PM'
    }, {
      value: '17:30',
      label: '5:30 PM'
    }, {
      value: '18:00',
      label: '6:00 PM'
    }, {
      value: '18:30',
      label: '6:30 PM'
    }, {
      value: '19:00',
      label: '7:00 PM'
    }, {
      value: '19:30',
      label: '7:30 PM'
    }, {
      value: '20:00',
      label: '8:00 PM'
    }, {
      value: '20:30',
      label: '8:30 PM'
    }, {
      value: '21:00',
      label: '9:00 PM'
    }, {
      value: '21:30',
      label: '9:30 PM'
    }];
  },
 
  getInitialState () {
    let timeOptions = this.getTimeOptions();

    return {
      startDate: moment(),
      endDate: moment().add(1, 'days'),
      pickupTime: timeOptions[0],
      dropoffTime: timeOptions[timeOptions.length - 1]
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

  handlePickupTimeChange (newPickupTime) {
    this.setState({
      pickupTime: newPickupTime
    });
  },

  handleDropoffTimeChange (newDropoffTime) {
    this.setState({
      dropoffTime: newDropoffTime
    });
  },

  getStartDate () {
    return this.state.startDate.format('L');
  },

  getEndDate () {
    return this.state.endDate.format('L');
  },

  getPickupTime () {
    return this.state.pickupTime.value;
  },

  getDropoffTime () {
    return this.state.dropoffTime.value;
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
	<label> Pickup time </label>
	<Select
	  className="time-selector"
	  value={this.state.pickupTime}
	  options={this.getTimeOptions()}
	  onChange={this.handlePickupTimeChange}
	/>
	<label> Dropoff time </label>
	<Select
	  className="time-selector"
	  value={this.state.dropoffTime}
	  options={this.getTimeOptions()}
	  onChange={this.handleDropoffTimeChange}
	/>
      </fieldset>
    );
  }
});

