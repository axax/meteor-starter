import React, { Component, PropTypes }  from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Snackbar from 'material-ui/Snackbar';



export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snackbarMessage: '...',
      snackbarOpen: false,
    };
    this.timer = undefined;
  }

  handleSubmit(event) {
    event.preventDefault();
	 
	 	console.log(this.refs.firstname.input);
	  Meteor.users.update(Meteor.userId(), {$set: {profile: {
	  																									street:this.refs.street.input.value,
  																										firstname:this.refs.firstname.input.value,
	  																									lastname:this.refs.lastname.input.value}}});

	  this.setState({
      snackbarOpen: true,
      snackbarMessage: "Profile saved"
    })

  }

  handleRequestCloseSnackbar(){
    this.setState({
      snackbarOpen: false
    })
  }

  render() {


	  const style = {
	    paperStyle: {
	      padding: 20
	    }
	  }

    return (
    	<div>

    		<header>
              <h1>Profile</h1>
        </header>
		    <Paper style={style.paperStyle} zDepth={1}>

		    { this.props.currentUser ?
		    	<form onSubmit={this.handleSubmit.bind(this)} >
		    		<TextField ref="username" fullWidth={true} value={this.props.currentUser.username} disabled={true} hintText="Username"/> 

		    		<TextField ref="firstname" defaultValue={this.props.currentUser.profile.firstname} fullWidth={true} 
      				floatingLabelText="Firstname"
      				floatingLabelFixed={true} hintText="Please enter your firstname"/> 

    				<TextField ref="lastname" defaultValue={this.props.currentUser.profile.lastname} fullWidth={true} 
    				floatingLabelText="Lastname"
    				floatingLabelFixed={true} hintText="Please enter your lastname"/> 

    				<TextField ref="street" defaultValue={this.props.currentUser.profile.street} fullWidth={true} 
    				floatingLabelText="Street"
    				floatingLabelFixed={true} hintText="Please enter your street name"/> 

    				<div style={ {display:"flex",justifyContent: "flex-end"} }>
	    				<RaisedButton label='Save' secondary={true} type='submit'/>
            </div>

            <Snackbar
		          open={this.state.snackbarOpen}
		          message={this.state.snackbarMessage}
		          autoHideDuration={3000}
		          onRequestClose={this.handleRequestCloseSnackbar.bind(this)}
		        />

 
	    		</form>

		    : "" }

		    </Paper>
		  </div>
	  );
  }
};



Profile.propTypes = {
  currentUser: PropTypes.object
};

export default createContainer(() => {
  return { currentUser: Meteor.user() };
}, Profile);