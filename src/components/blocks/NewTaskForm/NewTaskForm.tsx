import React, { Component } from 'react';
import './NewTaskForm.scss';

type NewTaskFormProps = {
  addTodo: Function;
};
export default class NewTaskForm extends Component<NewTaskFormProps> {
  state = {
    todoText: '',
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      todoText: event.target.value,
    });
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { addTodo } = this.props;
    const { todoText } = this.state;
    addTodo(todoText);
    this.setState({
      todoText: '',
    });
  };

  render() {
    const { todoText } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          value={todoText}
          placeholder="What needs to be done?"
          onChange={this.onChangeInput}
        />
      </form>
    );
  }
}
