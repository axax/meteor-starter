import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import TextField from 'material-ui/TextField';

export default class Settings extends Component {

  state = {
    symbol: undefined
  };

  symbolChange = (event, index, symbol) => this.setState({symbol});

  render() {
    return (
      <div>
        <TextField
          id="symbol"
          value={this.state.symbol}
          onChange={this.symbolChange}
        />
      </div>
    );
	}
}
