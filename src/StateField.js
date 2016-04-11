import React from 'react';
import Select from 'react-select';

export default React.createClass({
  US_STATE_NAMES: [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ],

  getInitialState () {
    return {
      location: ''
    };
  },

  /*
   * Converts a state name to the option format expected by react-select
   */
  convertUsStateNameToStateOption (stateName) {
    return {
      value: stateName,
      label: stateName
    };
  },

  handleLocationChange (newLocation) {
    this.setState({
      location: newLocation
    });
  },

  render () {
    let options = this.US_STATE_NAMES.map(this.convertUsStateNameToStateOption);

    return(
      <Select
	name="location-field"
	className="location-field"
	value={this.state.location}
	options={options} 
	onChange={this.handleLocationChange} />
    );
  }
});

