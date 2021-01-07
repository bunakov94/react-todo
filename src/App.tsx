import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ITaskData, AppState, AppProps } from './components/interfaces';

import Footer from './components/blocks/Footer';
import Header from './components/blocks/Header';
import TaskList from './components/blocks/TaskList';

import './App.scss';

export default class App extends Component<AppProps, AppState> {
  state: AppState = {
    tasks: [
      {
        isCompleted: true,
        isEditing: false,
        taskText: 'Completed task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
      {
        isCompleted: false,
        isEditing: false,
        taskText: 'Editing task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
      {
        isCompleted: false,
        isEditing: false,
        taskText: 'Active task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
    ],
    filter: 'all',
  };

  deleteTask = (id: string) => {
    this.setState(({ tasks }) => ({ tasks: tasks.filter((task) => task.id !== id) }));
  };

  deleteCompletedTasks = () => {
    this.setState(({ tasks }) => ({ tasks: tasks.filter((task) => !task.isCompleted) }));
  };

  editTask = (id: string) => {
    this.setState(({ tasks: oldTasks }) => {
      const tasks = [...oldTasks];
      const taskIndex = tasks.findIndex((task) => task.id === id);
      tasks[taskIndex].isEditing = true;
      return { tasks };
    });
  };

  makeTaskCompleted = (id: string) => {
    this.setState(({ tasks }) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      const newTask = { ...tasks[taskIndex], isCompleted: !tasks[taskIndex].isCompleted };
      const newState = [...tasks.slice(0, taskIndex), newTask, ...tasks.slice(taskIndex + 1)];
      return { tasks: newState };
    });
  };

  updateTask = (id: string, text: string) => {
    this.setState(({ tasks: oldTasks }) => {
      const tasks = [...oldTasks];
      const taskIndex = tasks.findIndex((task) => task.id === id);
      tasks[taskIndex].taskText = text;
      tasks[taskIndex].isEditing = false;
      return { tasks };
    });
  };

  addTask = (text: string) => {
    if (text !== '') {
      const newTask = {
        taskText: text,
        isCompleted: false,
        isEditing: false,
        timeOfCreation: new Date(),
        id: nanoid(),
      };

      this.setState(({ tasks: oldTasks }) => {
        const tasks = [...oldTasks, newTask];
        return { tasks };
      });
    }
  };

  changeFilter = (filter: string) => {
    this.setState({ filter });
  };

  filterTasks(tasks: ITaskData[], filter: string) {
    let filteredArr = tasks;
    if (filter === 'active') {
      filteredArr = tasks.filter((item) => !item.isCompleted);
    }
    if (filter === 'completed') {
      filteredArr = tasks.filter((item) => item.isCompleted);
    }
    return filteredArr;
  }

  render() {
    const { tasks, filter } = this.state;
    const tasksLeft = tasks.reduce((acc, el) => (el.isCompleted ? acc : acc + 1), 0);
    const filteredTasks = this.filterTasks(tasks, filter);

    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <section className="main">
          <TaskList
            filteredTasks={filteredTasks}
            makeTaskCompleted={this.makeTaskCompleted}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            updateTask={this.updateTask}
          />
          <Footer
            tasksLeft={tasksLeft}
            deleteCompletedTasks={this.deleteCompletedTasks}
            filter={filter}
            changeFilter={this.changeFilter}
          />
        </section>
      </section>
    );
  }
}
