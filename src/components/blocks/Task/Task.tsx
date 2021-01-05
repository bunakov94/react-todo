import React, { Component } from 'react';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

interface ITodoDataListProps {
  isCompleted: boolean;
  isEditing: boolean;
  todoText: string;
  timeOfCreation: Date;
  makeTodoCompleted: Function;
  deleteTodo: Function;
}
type AppState = {
  distanceFromCreation: string;
};

export default class Task extends Component<ITodoDataListProps, AppState> {
  timerID!: number;

  constructor(props: ITodoDataListProps) {
    super(props);

    const { timeOfCreation } = this.props;
    this.state = {
      distanceFromCreation: formatDistanceToNow(timeOfCreation, { addSuffix: true, includeSeconds: true }),
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { timeOfCreation } = this.props;
    this.setState({
      distanceFromCreation: formatDistanceToNow(timeOfCreation, { addSuffix: true, includeSeconds: true }),
    });
  }

  render() {
    const { isCompleted, isEditing, todoText, makeTodoCompleted, deleteTodo }: ITodoDataListProps = this.props;
    const { distanceFromCreation } = this.state;

    return (
      <li className={classNames({ completed: isCompleted, editing: isEditing })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            name="input"
            defaultChecked={isCompleted}
            onClick={() => makeTodoCompleted()}
          />
          <label htmlFor="input">
            <span className="description">{todoText}</span>
            <span className="created">{distanceFromCreation}</span>
          </label>
          <button type="button" aria-label="edit" className="icon icon-edit" />
          <button type="button" aria-label="delete" className="icon icon-destroy" onClick={() => deleteTodo()} />
        </div>
        <input type="text" className="edit" value="Editing task" readOnly />
      </li>
    );
  }
}
