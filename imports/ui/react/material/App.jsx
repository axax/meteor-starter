import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './pages/LoginPage.jsx';
import ThemeDefault from './theme-default';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
  * Decides route when user is authenticated or not
  */
  getChildRoute() {
    let childRoute = this.props.children;
    const user = this.props.currentUser;
    let defaultChild = <LoginPage />;
    let dashboardRoute = <LoginPage />;

    if (childRoute) {
        defaultChild = (childRoute.type.name == 'SignIn') ? <LoginPage /> : defaultChild;
        defaultChild = (childRoute.type.name == 'SignUp') ? <LoginPage /> : defaultChild;
    }

    childRoute = user ? (!childRoute ? dashboardRoute :
        (childRoute.type.name == 'SignUp' || childRoute.type.name == 'SignIn') ? dashboardRoute : childRoute
    ) : defaultChild;

    return childRoute;
  }

  render() {
   
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
          { this.getChildRoute() }
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  currentUser: PropTypes.object,
};
 
export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, App);