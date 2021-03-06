import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data.js';

class BaseLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }


  componentWillReceiveProps(nextProps) {
   // if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
   // }

  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
        left: 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };


    return (
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={Data.menus}
                        user={this.props.currentUser}/>

            <div style={styles.container}>
              { this.props.children }
            </div>
        </div>
    );
  }
}

BaseLayout.propTypes = {
  children: PropTypes.element,
  currentUser: PropTypes.object,
};


export default createContainer(() => {
    return {
        currentUser: Meteor.user()
    };
}, withWidth()(BaseLayout));

