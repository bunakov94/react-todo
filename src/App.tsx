import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Footer from './components/blocks/Footer';
import Header from './components/blocks/Header';
import TaskList from './components/blocks/TaskList';

import './App.scss';

interface ITodoData {
  isCompleted: boolean;
  isEditing: boolean;
  todoText: string;
  timeOfCreation: Date;
  id: string;
}

type AppState = {
  todoData: ITodoData[];
  filter: string;
};

type AppProps = {};
export default class App extends Component<AppProps, AppState> {
  state: AppState = {
    todoData: [
      {
        isCompleted: true,
        isEditing: false,
        todoText: 'Completed task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
      {
        isCompleted: false,
        isEditing: true,
        todoText: 'Editing task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
      {
        isCompleted: false,
        isEditing: false,
        todoText: 'Active task',
        timeOfCreation: new Date(),
        id: nanoid(),
      },
    ],
    filter: 'all',
  };

  makeTodoCompleted = (id: string) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((todo) => todo.id === id);
      const newTodo = { ...todoData[index], isCompleted: !todoData[index].isCompleted };
      const newState = [...todoData.slice(0, index), newTodo, ...todoData.slice(index + 1)];
      return { todoData: newState };
    });
  };

  deleteTodo = (id: string) => {
    this.setState(({ todoData }) => {
      const newState = todoData.filter((todo) => todo.id !== id);
      return { todoData: newState };
    });
  };

  deleteAllCompletedTodoes = () => {
    this.setState(({ todoData }) => {
      const newState = todoData.filter((todo) => !todo.isCompleted);
      return { todoData: newState };
    });
  };

  addTodo = (text: string) => {
    const newTodo = {
      todoText: text,
      isCompleted: false,
      isEditing: false,
      timeOfCreation: new Date(),
      id: nanoid(),
    };

    this.setState(({ todoData }) => {
      const newState = [...todoData, newTodo];

      return { todoData: newState };
    });
  };

  changeFilter = (filter: string) => {
    this.setState({ filter });
  };

  filterItems(todoArr: ITodoData[], filter: string) {
    let filteredArr = todoArr;
    if (filter === 'active') {
      filteredArr = todoArr.filter((item) => !item.isCompleted);
    }
    if (filter === 'completed') {
      filteredArr = todoArr.filter((item) => item.isCompleted);
    }
    return filteredArr;
  }

  render() {
    const { todoData, filter } = this.state;
    const totalTodoCount = todoData.length;
    const completedTodoCount = todoData.filter((todo) => todo.isCompleted).length;
    const leftTodoCount = totalTodoCount - completedTodoCount;
    const todoArr = this.filterItems(todoData, filter);

    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <section className="main">
          <TaskList todoArr={todoArr} makeTodoCompleted={this.makeTodoCompleted} deleteTodo={this.deleteTodo} />
          <Footer
            leftTodoes={leftTodoCount}
            deleteAllCompletedTodoes={this.deleteAllCompletedTodoes}
            filter={filter}
            changeFilter={this.changeFilter}
          />
        </section>
      </section>
    );
  }
}
// TODO: TODO: TODO: Переделать ID - криво работает при добавлении и удалении
// TODO: TODO: Фиксировать время создания задачи в момент ее добавления, а в списке выводить "created N seconds / minutes ago"
// Добавить defaultProps вашим компонентам
// TODO: TODO:Добавить propTypes вашим компонентам
// TODO: TODO:Проверьте, что ваше приложение функционирует правильно
// TODO: TODO:Проверьте, что во время использования приложения нет никаких ошибок / предупреждений в консоли браузера
// Изучите статью о философии React и убедитесь, что ваше приложение соотвествует принятым в React правилам
// Для первого пункта вам потребуется установить библиотеку date-fns и воспользоваться функцией formatDistanceToNow

// Результат должен быть ссылкой на репозиторий гитхаб
