import React, { Component } from 'react';
export default class StateComponent extends Component {
  render() {
    return (
      <div className="state">
          <div className="confirm box">Confirmed cases<p>{this.props.totalConfirmed}</p></div>
          <div className="active box">Active cases<p>{this.props.totalActive}</p></div> 
          <div className="recover box">Recovered cases<p>{this.props.totalRecovered}</p></div>
          <div className="infected box">Deceased cases<p>{this.props.totalDeceased}</p></div>  
      </div>
    )
  }
}