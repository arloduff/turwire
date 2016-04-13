import React from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

export default React.createClass({
  getInitialState () {
    return {
      searchResults: [],
      searchError: null,
      searchResultMessage: null
    };
  },

  dataToResultObject (result) {
    return (
      <SearchResult carData={result} />
    );
  },

  handleResponse (jsonData) {
    if(jsonData.Result) {
      this.setState({
        searchResults: jsonData.Result.CarResult.map(this.dataToResultObject),
	searchError: null,
	searchResultMessage: null
      });
    } else if(jsonData.Errors) {
      this.setState({
	searchResults: [],
	searchError: jsonData.Errors.Error.ErrorMessage,
	searchResultMessage: null
      });
    } else if(jsonData.StatusDesc) {
      this.setState({
	searchError: null,
        searchResultMessage: jsonData.StatusDesc
      });
    }
  },

  render () {
    return(
      <div>
	<div className="search-pane">
	  <SearchForm onSearchComplete={this.handleResponse} />
	</div>
	<div className="results-pane">
	  { this.state.searchResults.length > 0 &&
	    this.state.searchResults
	  }
	  { this.state.searchResultMessage !== null &&
	    <div className="result-message">{this.state.searchResultMessage}</div>
	  }
 	  { !!this.state.searchError &&
	    <div className="error">
	      There was an error with your request:
	      {this.state.searchError}
	    </div>
	  }
        </div>
      </div>
    );
  }
});

