import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import StocktickerSettings from './stockticker/Settings';


const widgetTypes = [
  <MenuItem key={'stock'} value={1} primaryText="Stock ticker" />
];

const widgetOptions = {
  1:[]
};

export default class Add extends Component {

  state = {
    selectedWidget: undefined
  };

  widgetChange = (event, index, selectedWidget) => this.setState({selectedWidget});

  render() {
    return (
      <div>
        <SelectField
          fullWidth={true}
          value={this.state.selectedWidget}
          floatingLabelText="Widget"
          onChange={this.widgetChange}
          >
          {widgetTypes}
        </SelectField>
        <StocktickerSettings></StocktickerSettings>
        { widgetOptions[this.state.selectedWidget] }
      </div>
    );
	}
}
