import React from 'react';
import LocationField from './LocationField';
import DateRangeField from './DateRangeField';

export default React.createClass({
  handleSearchClick (e) {
    e.preventDefault();

    let options = {
      location: this.refs.locationField.getLocation(),
      startDate: this.refs.dateField.getStartDate(),
      endDate: this.refs.dateField.getEndDate()
    }

    console.log("options", options);
  },

  render () {
    return(
      <form id="search-form">
        <LocationField ref="locationField" />
	<DateRangeField ref="dateField" />
	<input type="submit" value="Go" onClick={this.handleSearchClick} />
      </form>
    );
  }
});

