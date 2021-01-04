import React, { Component } from 'react';

import './TasksFilter.scss';

type TaskFilterProps = {
  filter: string;
  onChangeFilter: Function;
};
export default class TaskFilter extends Component<TaskFilterProps> {
  buttons = [
    { name: 'all', label: 'ALL' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { filter, onChangeFilter } = this.props;
    return (
      <ul className="filters">
        {this.buttons.map(({ name, label }) => (
          <li key={name}>
            <button onClick={() => onChangeFilter(name)} type="button" className={filter === name ? 'selected' : ''}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
