import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Footer from './components/blocks/Footer';
import Header from './components/blocks/Header';
import TaskList from './components/blocks/TaskList';
import { ITodoData } from './components/interfaces';

import './App.scss';

function App() {
  const todoData: ITodoData[] = [
    {
      status: 'completed',
      description: 'Completed task',
      created: formatDistanceToNow(new Date()),
      id: 123,
    },
    {
      status: 'editing',
      description: 'Editing task',
      created: formatDistanceToNow(new Date()),
      id: 456,
    },
    {
      status: 'active',
      description: 'Active task',
      created: formatDistanceToNow(new Date()),
      id: 789,
    },
  ];

  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TaskList todos={todoData} />
        <Footer />
      </section>
    </section>
  );
}

export default App;
