import React from 'react';
import SearchForm from './SearchForm';

export default React.createClass({
  getInitialState () {
    return {
      displaySearchPane: true
    };
  },

  displaySearchResults (jsonData) {
    console.log(jsonData);
  },

  render () {
    return(
      <div>
	{ this.state.displaySearchPane &&
	  <SearchForm onSearchComplete={this.displaySearchResults} />
	}
      </div>
    );
  }
});

