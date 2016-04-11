import React from 'react';
import StateField from './StateField';
import CoordinatesField from './CoordinatesField';

export default React.createClass({
  SEARCH_BY_OPTIONS: {
    LOCATION_NAME: 1,
    COORDINATES: 2
  },

  getInitialState () {
    return {
      searchBy: this.SEARCH_BY_OPTIONS.LOCATION_NAME
    };
  },

  handleChangeSearchBy (newSearchBySelection) {
    this.setState({
      searchBy: parseInt(newSearchBySelection.target.value)
    });
  },

  render () {
    return(
      <div>
        <fieldset>
          <legend> Search by... </legend>
          <label> Placename  </label>
          <input type="radio" name="searchBy" value={this.SEARCH_BY_OPTIONS.LOCATION_NAME} onClick={this.handleChangeSearchBy} />
          <label> Geographic coordinates  </label>
          <input type="radio" name="searchBy" value={this.SEARCH_BY_OPTIONS.COORDINATES} onClick={this.handleChangeSearchBy} />
        </fieldset>
        <fieldset>
          {this.state.searchBy === this.SEARCH_BY_OPTIONS.LOCATION_NAME &&
            <StateField />
          }
	  {this.state.searchBy === this.SEARCH_BY_OPTIONS.COORDINATES &&
	    <CoordinatesField />
	  }
        </fieldset>
      </div>
    );
  }
});

