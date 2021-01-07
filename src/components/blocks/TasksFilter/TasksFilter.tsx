import React, { Component } from 'react';
import { TaskFilterProps } from '../../interfaces';

import './TasksFilter.scss';

export default class TaskFilter extends Component<TaskFilterProps> {
  buttons = [
    { name: 'all', label: 'ALL' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { filter, changeFilter } = this.props;
    return (
      <ul className="filters">
        {this.buttons.map(({ name, label }) => (
          <li key={name}>
            <button onClick={() => changeFilter(name)} type="button" className={filter === name ? 'selected' : ''}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
