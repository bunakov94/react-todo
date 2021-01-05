import React from 'react';
import TaskFilter from '../TasksFilter';

import './Footer.scss';

type FooterProps = {
  leftTodoes: number;
  deleteAllCompletedTodoes: Function;
  filter: string;
  changeFilter: Function;
};

const Footer: React.FC<FooterProps> = ({ leftTodoes, deleteAllCompletedTodoes, filter, changeFilter }: FooterProps) => (
  <footer className="footer">
    <span className="todo-count">{leftTodoes} items left</span>
    <TaskFilter filter={filter} changeFilter={changeFilter} />
    <button type="button" className="clear-completed" onClick={() => deleteAllCompletedTodoes()}>
      Clear completed
    </button>
  </footer>
);

export default Footer;
