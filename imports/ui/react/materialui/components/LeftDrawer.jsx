import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';

import md5 from 'md5'

import ThemeDefault from '../theme-default';




const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: ThemeDefault.appBar.color,
      paddingLeft: 40,
      height: ThemeDefault.appBar.height,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage:  'url("public/images/material_bg.png")',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  let gravatar = '//www.gravatar.com/avatar/';
  if( props.user ){
    gravatar+=md5(props.user.username)+"?size=128&rating=g&d=retro";

  }

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          Material Admin
        </div>
        <div style={styles.avatar.div}>
          <Avatar src={ gravatar }
                  size={50}
                  style={styles.avatar.icon}/>
          <span style={styles.avatar.span}>{props.user?props.user.username:"..."}</span>
        </div>
        <div>
          {props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link}/>}
            />
          )}
        </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  user: PropTypes.object,
};

export default LeftDrawer;