import React, { Component } from 'react';
import { NewTaskFormProps } from '../../types/interfaces';
import './NewTaskForm.scss';

export default class NewTaskForm extends Component<NewTaskFormProps> {
  state = {
    text: '',
    min: 0,
    sec: 0,
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { addTask } = this.props;
    const { text, min, sec } = this.state;
    addTask(text, min, sec);
    this.setState({
      text: '',
      min: 0,
      sec: 0,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          name="text"
          value={text}
          placeholder="What needs to be done?"
          onChange={this.onChangeInput}
        />
        <input className="new-todo-form__timer" name="min" value="" placeholder="Min" onChange={this.onChangeInput} />
        <input className="new-todo-form__timer" name="sec" value="" placeholder="Sec" onChange={this.onChangeInput} />
        <button aria-label="submit" type="submit" />
      </form>
    );
  }
}
