import React, { PropTypes } from 'react';


class PlainLayout extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
            { this.props.children }
        </div>
    );
  }
}

PlainLayout.propTypes = {
  children: PropTypes.element,
};