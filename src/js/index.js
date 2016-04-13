import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

$(document).ready(function () {
  ReactDOM.render(<Main />, document.getElementById('main'));
});

