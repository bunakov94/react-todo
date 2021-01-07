import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { TaskDataListState, ITaskDataListProps } from '../../interfaces';

export default class Task extends Component<ITaskDataListProps, TaskDataListState> {
  timerID!: number;

  constructor(props: ITaskDataListProps) {
    super(props);

    const { timeOfCreation, taskText } = this.props;
    this.state = {
      distanceFromCreation: formatDistanceToNow(timeOfCreation, { addSuffix: true, includeSeconds: true }),
      editText: taskText,
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  submitEditing = (event: React.FormEvent) => {
    event.preventDefault();
    const { id, updateTask, deleteTask } = this.props;
    const { editText } = this.state;
    updateTask(id, editText);
    if (editText === '') {
      deleteTask(id);
    }
  };

  onChangeEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      editText: event.target.value,
    });
  };

  tick() {
    const { timeOfCreation } = this.props;
    this.setState({
      distanceFromCreation: formatDistanceToNow(timeOfCreation, { addSuffix: true, includeSeconds: true }),
    });
  }

  render() {
    const { id, isCompleted, makeTaskCompleted, deleteTask, editTask }: ITaskDataListProps = this.props;
    const { distanceFromCreation, editText } = this.state;

    return (
      <>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            name="input"
            defaultChecked={isCompleted}
            onClick={() => makeTaskCompleted(id)}
          />
          <label htmlFor="input">
            <span className="description">{editText}</span>
            <span className="created">{distanceFromCreation}</span>
          </label>
          <button type="button" aria-label="edit" className="icon icon-edit" onClick={() => editTask(id)} />
          <button type="button" aria-label="delete" className="icon icon-destroy" onClick={() => deleteTask(id)} />
        </div>
        <form onSubmit={this.submitEditing}>
          <input type="text" className="edit" value={editText} onChange={this.onChangeEditInput} />
        </form>
      </>
    );
  }
}
