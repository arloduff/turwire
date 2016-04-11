import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';

console.log("Render");
console.log("ReactDOM", ReactDOM);
$(document).ready(function () {
  ReactDOM.render(<SearchForm />, document.getElementById('search-form'));
});

