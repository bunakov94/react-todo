import React, { Component } from 'react';
import { TaskFilterProps } from '../../interfaces';

import './TasksFilter.scss';

export default class TaskFilter extends Component<TaskFilterProps> {
  buttons = [
    { filterName: 'all', label: 'ALL' },
    { filterName: 'active', label: 'Active' },
    { filterName: 'completed', label: 'Completed' },
  ];

  render() {
    const { filter, changeFilter } = this.props;
    return (
      <ul className="filters">
        {this.buttons.map(({ filterName, label }) => (
          <li key={filterName}>
            <button
              onClick={() => changeFilter(filterName)}
              type="button"
              className={filter === filterName ? 'selected' : ''}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
