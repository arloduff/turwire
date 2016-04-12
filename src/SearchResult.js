import React from 'react';

export default React.createClass({
  propTypes: {
    carData: React.PropTypes.Object
  },

  render () {
    let result = this.props.carData;

    return(
      <div classname="result">
	<div>Car type: {result.CarTypeCode}</div>
	<div>Daily rate: {result.DailyRate}</div>
	<div>Mileage: {result.MileageDescription}</div>
	<div>Pickup location: {result.LocationDescription}</div>
	<div>Subtotal: {result.SubTotal}</div>
	<div>Taxes and fees: {result.TaxesAndFees}</div>
	<div>Total: {result.TotalPrice} {result.CurrencyCode}</div>
	<a href={result.DeepLink}>Reserve</a>
      </div>
    );
  }
});

