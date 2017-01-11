import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';
import SearchBox from './SearchBox';
import {Link} from 'react-router';
import Add from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AddWidget from './widgets/Add';

import ThemeDefault from '../theme-default';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      addDialogOpen: false
    };
  }


  signout(){
    Meteor.logout();
  }


  addDialogOpen(){
    this.setState({addDialogOpen: true});
  };

  addDialogClose(){
    this.setState({addDialogOpen: false});
  };

  render() {
    const {styles, handleChangeRequestNavDrawer} = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: ThemeDefault.appBar.height
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    const addDialogActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.addDialogClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.addDialogClose.bind(this)}
      />,
    ];

    return (
        <div>
            <AppBar
              style={{...styles, ...style.appBar}}
              title={
                <SearchBox />
              }
              iconElementLeft={
                  <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
                    <Menu color={white} />
                  </IconButton>
              }
              iconElementRight={
                <div style={style.iconsRightContainer}>
                  {/*<IconMenu color={white}
                            iconButtonElement={
                              <IconButton><ViewModule color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem key={1} primaryText="Application 1"/>
                    <MenuItem key={2} primaryText="Application 2"/>
                    <MenuItem key={3} primaryText="Application 3"/>
                  </IconMenu>*/}
                  <IconButton onTouchTap={this.addDialogOpen.bind(this)}>
                    <Add color={white} />
                  </IconButton>
                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton><MoreVertIcon color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem containerElement={<Link to="/profile"/>} primaryText="Profile"/>
                    <MenuItem onClick={ this.signout } primaryText="Sign out"/>
                  </IconMenu>
                </div>
              }
            />
            <Dialog
            title="Add a widget to your dashboard"
            actions={addDialogActions}
            modal={false}
            open={this.state.addDialogOpen}
            onRequestClose={this.addDialogClose}
            >
              <AddWidget ></AddWidget>
            </Dialog>
          </div>
      );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
