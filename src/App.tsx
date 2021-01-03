import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Footer from './components/blocks/Footer';
import Header from './components/blocks/Header';
import TaskList from './components/blocks/TaskList';

import './App.scss';

interface ITodoData {
  isCompleted: boolean;
  isEditing: boolean;
  description: string;
  created: string;
  id: number;
}

type AppState = {
  todoData: ITodoData[];
};

type AppProps = {};
export default class App extends Component<AppProps, AppState> {
  state: AppState = {
    todoData: [
      {
        isCompleted: true,
        isEditing: false,
        description: 'Completed task',
        created: formatDistanceToNow(new Date()),
        id: 123,
      },
      {
        isCompleted: false,
        isEditing: false,
        description: 'Editing task',
        created: formatDistanceToNow(new Date()),
        id: 456,
      },
      {
        isCompleted: false,
        isEditing: false,
        description: 'Active task',
        created: formatDistanceToNow(new Date()),
        id: 789,
      },
    ],
  };

  makeCompleted = (id: number) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[index];
      const newItem = { ...oldItem, isCompleted: !oldItem.isCompleted };
      const newState = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
      return { todoData: newState };
    });
  };

  deleteTodo = (id: number) => {
    this.setState(({ todoData }) => {
      const newState = todoData.filter((el) => el.id !== id);
      return { todoData: newState };
    });
  };

  render() {
    const { todoData } = this.state;

    return (
      <section className="todoapp">
        <Header />
        <section className="main">
          <TaskList todos={todoData} onDone={this.makeCompleted} onDelete={this.deleteTodo} />
          <Footer />
        </section>
      </section>
    );
  }
}
