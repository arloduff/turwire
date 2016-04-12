import React from 'react';
import $ from 'jquery';
import X2Js from 'x2js';
import LocationField from './LocationField';
import DateRangeField from './DateRangeField';

export default React.createClass({
  API_URL: '/v1/search/car',

  propTypes: {
    onSearchComplete: React.PropTypes.Function
  },

  handleSearchClick (e) {
    e.preventDefault();

    let self = this;
    let options = {
      apikey: 'v7d862fcmbqnadw6ngxywrwx',
      dest: this.refs.locationField.getLocation(),
      startdate: this.refs.dateField.getStartDate(),
      enddate: this.refs.dateField.getEndDate(),
      pickuptime: this.refs.dateField.getPickupTime(),
      dropofftime: this.refs.dateField.getDropoffTime()
    }
    
    $.get(this.API_URL, options)
      .then(function(xmlData) {
	let parser = new X2Js();
	let jsonData = parser.xml2js(xmlData.documentElement.innerHTML);
	self.props.onSearchComplete(jsonData);
      })
      .fail(function(err) {
	console.error("Error retrieving data: " + err.responseText);
      });
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

