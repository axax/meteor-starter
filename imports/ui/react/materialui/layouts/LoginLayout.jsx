import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';


class LoginLayout extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {

    const styles = {
      container: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto',
        padding: "2rem"
      }
    };

    return (
        <Paper style={styles.container} zDepth={2} >
            { this.props.children }
        </Paper>
    );
  }
}

LoginLayout.propTypes = {
  children: PropTypes.element,
};

export default LoginLayout;