import React from 'react';
import LocationField from './LocationField';

export default React.createClass({
  render () {
    return(
      <form id="search-form">
        <fieldset>
          <LocationField />
        </fieldset>
      </form>
    );
  }
});

