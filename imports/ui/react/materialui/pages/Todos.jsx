import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


import { Tasks } from '../../../../api/tasks.js';
import Task from '../components/todo/Task.jsx';
import MobileTearSheet from '../components/MobileTearSheet.jsx';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';




export default class Todos extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
    };
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }


  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    /*Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });*/

    // replacement for Tasks.insert
    Meteor.call('tasks.insert', text);

 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }


    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;
 
      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });


  }
 
  render() {
    return (
      <div>
        /* Polymer component in react render */
        <star-toggle></star-toggle>


        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>


          <Toggle label="Hide Completed Tasks" defaultToggled={this.state.hideCompleted} onClick={this.toggleHideCompleted.bind(this)} />

  

          { this.props.currentUser ?


            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <TextField
                hintText="Type to add new tasks"
                ref="textInput"
                fullWidth={true}
              />

            </form> : ''
          }
        </header>

        <MobileTearSheet>


          <List>
            <Subheader></Subheader>
            {this.renderTasks()}
          </List>
        </MobileTearSheet>

      </div>
    );
  }
} 



Todos.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object
};
 
export default createContainer(() => {

  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user()

  };
}, Todos);