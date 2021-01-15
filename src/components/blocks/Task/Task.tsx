import React, { Component } from 'react';
import { formatDistanceToNow, formatDuration } from 'date-fns';
import { TaskListState, ITaskListProps } from '../../types/interfaces';

export default class Task extends Component<ITaskListProps, TaskListState> {
  timerID?: number;

  counterID?: number;

  constructor(props: ITaskListProps) {
    super(props);

    const {
      timeOfCreation,
      text,
      timer: { minutes, seconds },
    } = this.props;
    this.state = {
      distanceFromCreation: formatDistanceToNow(timeOfCreation, { addSuffix: true, includeSeconds: true }),
      editText: text,
      timer: {
        minutes,
        seconds,
      },
      isPlay: false,
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.counterID);
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

  onToggleComplete = () => {
    const { id, isCompleted, toggleComplete } = this.props;
    toggleComplete(id, isCompleted);
  };

  tick() {
    const { timeOfCreation } = this.props;
    this.setState({
      distanceFromCreation: formatDistanceToNow(timeOfCreation, { addSuffix: true, includeSeconds: true }),
    });
  }

  count() {
    this.setState(({ timer }) => {
      let min = timer.minutes;
      let sec = timer.seconds;
      if (sec + 1 !== 60) {
        sec += 1;
      } else {
        min += 1;
        sec = 0;
      }

      return {
        timer: {
          minutes: min,
          seconds: sec,
        },
      };
    });
  }

  pause() {
    this.setState({ isPlay: false });
    clearInterval(this.counterID);
  }

  play() {
    const { isPlay } = this.state;
    if (!isPlay) {
      this.counterID = window.setInterval(() => this.count(), 1000);
      this.setState({ isPlay: true });
    }
  }

  render() {
    const { id, isCompleted, deleteTask, editTask }: ITaskListProps = this.props;
    const { distanceFromCreation, editText, timer } = this.state;

    return (
      <>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            name="input"
            defaultChecked={isCompleted}
            onClick={this.onToggleComplete}
          />
          <label htmlFor="input">
            <span className="description">{editText}</span>
            <span className="description timer">
              <button aria-label="Play" className="icon icon-play" type="button" onClick={() => this.play()} />
              <button aria-label="Pause" className="icon icon-pause" type="button" onClick={() => this.pause()} />
              <p className="timer-count">{formatDuration(timer, { format: ['minutes', 'seconds'] })}</p>
            </span>
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
