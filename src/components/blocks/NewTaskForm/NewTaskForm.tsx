import React, { Component } from 'react';
import { NewTaskFormProps } from '../../interfaces';
import './NewTaskForm.scss';

export default class NewTaskForm extends Component<NewTaskFormProps> {
  state = {
    taskText: '',
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      taskText: event.target.value,
    });
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { addTask } = this.props;
    const { taskText } = this.state;
    addTask(taskText);
    this.setState({
      taskText: '',
    });
  };

  render() {
    const { taskText } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          value={taskText}
          placeholder="What needs to be done?"
          onChange={this.onChangeInput}
        />
      </form>
    );
  }
}
