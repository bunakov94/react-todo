import React, { Component } from 'react';
import './NewTaskForm.scss';

type NewTaskFormProps = {
  addTodo: Function;
};
export default class NewTaskForm extends Component<NewTaskFormProps> {
  state = {
    description: '',
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      description: event.target.value,
    });
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { addTodo } = this.props;
    const { description } = this.state;
    addTodo(description);
    this.setState({
      description: '',
    });
  };

  render() {
    const { description } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          value={description}
          placeholder="What needs to be done?"
          onChange={this.onChangeInput}
        />
      </form>
    );
  }
}
