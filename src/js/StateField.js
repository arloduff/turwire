import React from 'react';
import Select from 'react-select';

export default React.createClass({
  US_STATE_NAMES: {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
  },

  getInitialState () {
    return {
      location: '',
      errorMessage: ''
    };
  },

  validate () {
    if(typeof this.state.location.value === 'undefined') {
      this.setState({
	errorMessage: 'Please select a state.'
      });
      return false;
    } else {
      this.setState({
	errorMessage: ''
      });
      return true;
    }
  },

  /*
   * Converts a state name to the option format expected by react-select
   */
  convertUsStateNameToStateOption (stateName) {
    return {
      value: this.US_STATE_NAMES[stateName],
      label: stateName
    };
  },

  handleLocationChange (newLocation) {
    this.setState({
      location: newLocation
    });
  },

  render () {
    let options = Object.keys(this.US_STATE_NAMES).map(this.convertUsStateNameToStateOption.bind(this));

    return(
      <div>
	<legend> Select a state </legend>
	<Select
	  name="location-field"
	  className="location-field"
	  value={this.state.location}
	  options={options} 
	  onChange={this.handleLocationChange}
	/>
	{ this.state.errorMessage !== '' &&
	  <div className="error">{this.state.errorMessage}</div>
	}
      </div>
    );
  }
});

