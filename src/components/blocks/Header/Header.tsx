import React from 'react';
import NewTaskForm from '../NewTaskForm';
import './Header.scss';

const Header = () => (
  <header>
    <h1>todos</h1>
    <NewTaskForm />
  </header>
);

export default Header;
