import React from 'react';
import LocationField from './LocationField';
import DateRangeField from './DateRangeField';

export default React.createClass({
  render () {
    return(
      <form id="search-form">
        <LocationField />
	<DateRangeField />
      </form>
    );
  }
});

