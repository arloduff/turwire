import React from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

export default React.createClass({
  getInitialState () {
    return {
      displaySearchPane: true,
      searchResults: []
    };
  },

  dataToResultObject (result) {
    return (
      <SearchResult carData={result} />
    );
  },

  displaySearchResults (jsonData) {
    if(jsonData.Result) {
      this.setState({
        searchResults: jsonData.Result.CarResult.map(this.dataToResultObject)
      });
    }
  },

  render () {
    return(
      <div>
	{ this.state.displaySearchPane &&
	  <SearchForm onSearchComplete={this.displaySearchResults} />
	}
	{ this.state.searchResults.length > 0 &&
	  this.state.searchResults
	}
      </div>
    );
  }
});

