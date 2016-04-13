import React from 'react';

export default React.createClass({
  propTypes: {
    carData: React.PropTypes.Object
  },

  CAR_TYPES: {
    ECAR: "Economy car",
    CCAR: "Compact car",
    FCAR: "Full-size car",
    FFAR: "Full-size SUV",
    FRAR: "Full-size SUV",
    ICAR: "Mid-size car",
    IFAR: "Mid-size SUB",
    LCAR: "Luxury car",
    MVAR: "Minivan",
    PCAR: "Premium car",
    SCAR: "Standard car",
    SFAR: "Standard SUV",
    SPAR: "Standard pickup truck",
    STAR: "Convertible car",
    SXAR: "Special car",
    XXAR: "Special car"
  },

  render () {
    let result = this.props.carData;

    return(
      <div className="result">
	<h2>{this.CAR_TYPES[result.CarTypeCode]}</h2>
	<div>Mileage: {result.MileageDescription}</div>
	<div>Pickup location: {result.LocationDescription}</div>
	<div>Daily rate: ${result.DailyRate}</div>
	<div>Subtotal: ${result.SubTotal}</div>
	<div>Taxes and fees: ${result.TaxesAndFees}</div>
	<div>Total: ${result.TotalPrice} {result.CurrencyCode}</div>
	<a href={result.DeepLink} target="_blank">Reserve</a>
      </div>
    );
  }
});

