import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


import { Tasks } from '../../../../api/tasks.js';
import Task from '../components/todo/Task.jsx';
import MobileTearSheet from '../components/MobileTearSheet.jsx';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';




export class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      taskName: ''
    };
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted
    });
  }


  handleTaskInputChange(event) {
    this.setState({
        taskName: event.target.value
    })
  }


  cleanInput() {
      this.setState({
          taskName: ''
      });
  }


  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = this.state.taskName.trim(); //ReactDOM.findDOMNode(this.refs.textInput.input).value.trim();

    /*Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });*/

    // replacement for Tasks.insert
    Meteor.call('tasks.insert', text);

    this.cleanInput();

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

        <header>
              <h1>Todo List</h1>
        </header>

        <MobileTearSheet>

          { this.props.currentUser ?
            <form className="new-task" style={ {padding:10} } onSubmit={this.handleSubmit.bind(this)} >
              <TextField
                value={this.state.taskName}
                onChange={this.handleTaskInputChange.bind(this)}
                hintText="Type to add new tasks"
                ref="textInput"
                fullWidth={true}
              />
            </form> : ''
          }
          <List>
            <Subheader>{this.props.incompleteCount} incomplete task(s)</Subheader>
            <ListItem primaryText="Hide Completed Tasks" rightToggle={<Toggle defaultToggled={this.state.hideCompleted} onClick={this.toggleHideCompleted.bind(this)} />} />

          </List>

          <Divider />
          <List>
            <Subheader>My Tasks</Subheader>
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
