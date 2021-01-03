import React from 'react';
import TaskFilter from '../TasksFilter';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <span className="todo-count">1 items left</span>
    <TaskFilter />
    <button type="button" className="clear-completed">
      Clear completed
    </button>
  </footer>
);

export default Footer;
