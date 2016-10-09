import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './theme-default';

class App extends React.Component {

  constructor(props) {
    super(props);

    

  }


  componentWillMount(){
    var currentLocation = this.props.location.pathname;

    if( this.props.location.pathname !="/login"){

      const user = this.props.currentUser;

      if( !user ){
        // redirect to login page
        browserHistory.push('/login')
      }
    }
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
          { this.props.children }
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  currentUser: PropTypes.object,
  location: PropTypes.object
};
 
export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, App);