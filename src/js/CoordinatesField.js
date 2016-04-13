import React from 'react';

export default React.createClass({
  getInitialState () {
    return {
      coordinates: '',
      valid: true
    };
  },

  validate (coordinates) {
    let coordinatesArray = coordinates.split(',');

    if(coordinatesArray.length !== 2) {
      return false;
    }
    return (coordinatesArray[0] !== "" && !isNaN(coordinatesArray[0])) && (coordinatesArray[1] !== "" && !isNaN(coordinatesArray[1]));
  },

  handleCoordinatesChange (e) {
    let newCoordinates = e.target.value;

    this.setState({
      coordinates: newCoordinates,
      valid: this.validate(newCoordinates)
    });
  },

  render () {
    return(
      <div>
	<legend> Enter geographical coordinates </legend>
	<input type="text" value={this.state.coordinates} onChange={this.handleCoordinatesChange} />
	{!this.state.valid &&
	  <div className="error">Coordinates should be specified in xxx,yyy format</div>
	}
     </div>
    );
  }
});

