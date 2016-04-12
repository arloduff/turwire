import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

console.log("Render");
console.log("ReactDOM", ReactDOM);
$(document).ready(function () {
  ReactDOM.render(<Main />, document.getElementById('main'));
});

