import React from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

export default React.createClass({
  getInitialState () {
    return {
      displaySearchPane: true,
      searchResults: [],
      searchError: null
    };
  },

  dataToResultObject (result) {
    return (
      <SearchResult carData={result} />
    );
  },

  displaySearchPane () {
    this.setState({
      displaySearchPane: true
    });
  },

  displaySearchResults (jsonData) {
    if(jsonData.Result) {
      this.setState({
	displaySearchPane: false,
        searchResults: jsonData.Result.CarResult.map(this.dataToResultObject),
	searchError: null
      });
    } else if(jsonData.Errors) {
      console.log("jsonData", jsonData);
      this.setState({
	searchResults: [],
	searchError: jsonData.Errors.Error.ErrorMessage
      });
    }
  },

  render () {
    return(
      <div>
	{ this.state.displaySearchPane &&
	  <SearchForm onSearchComplete={this.displaySearchResults} />
	}
	{ !this.state.displaySearchPane &&
	  <a onClick={this.displaySearchPane}>Refine search results</a>
	}
	{ this.state.searchResults.length > 0 &&
	  this.state.searchResults
	}
 	{ !!this.state.searchError &&
	  <div className="error">
	    There was an error with your request:
	    {this.state.searchError}
	  </div>
	}
      </div>
    );
  }
});

