import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './theme-default';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  checkAuth(props) {
    if( props.location.pathname !="/login"){

      if ( props.currentUser===null) {
        browserHistory.replace('/login');
      }
    }else{
      if ( props.currentUser!==null) {
        browserHistory.replace('/dashboard');
      }
    }
  }

  componentWillMount() {
    if( this.props.location.pathname==="/"){
      browserHistory.replace('/dashboard');
    }
  }

  componentDidMount() {
    this.checkAuth(this.props);

  }

  componentWillReceiveProps(nextProps) {
    this.checkAuth(nextProps);
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
  currentUser: PropTypes.object,
  location: PropTypes.object
};

export default createContainer(() => {
  
  return {
    currentUser: Meteor.user()
  }
}, App);

