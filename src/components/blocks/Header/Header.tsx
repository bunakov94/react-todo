import React from 'react';
import NewTaskForm from '../NewTaskForm';
import './Header.scss';

type HeaderProps = {
  addTodo: Function;
};

const Header: React.FC<HeaderProps> = ({ addTodo }: HeaderProps) => (
  <header>
    <h1>todos</h1>
    <NewTaskForm addTodo={addTodo} />
  </header>
);

export default Header;
