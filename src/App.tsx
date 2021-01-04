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
        id: 0,
      },
      {
        isCompleted: false,
        isEditing: true,
        description: 'Editing task',
        created: formatDistanceToNow(new Date()),
        id: 1,
      },
      {
        isCompleted: false,
        isEditing: false,
        description: 'Active task',
        created: formatDistanceToNow(new Date()),
        id: 2,
      },
    ],
  };

  makeCompleted = (id: number) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newItem = { ...todoData[index], isCompleted: !todoData[index].isCompleted };
      const newState = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];
      return { todoData: newState };
    });
  };

  deleteTodoItem = (id: number) => {
    this.setState(({ todoData }) => {
      const newState = todoData.filter((el) => el.id !== id);
      return { todoData: newState };
    });
  };

  deleteAllCompletedTodoes = () => {
    this.setState(({ todoData }) => {
      const newState = todoData.filter((el) => !el.isCompleted);
      return { todoData: newState };
    });
  };

  getId = ({ todoData } = this.state) => todoData.length;

  addTodo = (text: string) => {
    const newTodo = {
      description: text,
      isCompleted: false,
      isEditing: false,
      created: formatDistanceToNow(new Date()),
      id: this.getId(),
    };

    this.setState(({ todoData }) => {
      const newState = [...todoData, newTodo];

      return { todoData: newState };
    });
  };

  render() {
    const { todoData } = this.state;
    const totalTodoCount = todoData.length;
    const completedTodoCount = todoData.filter((el) => el.isCompleted).length;
    const leftTodoCount = totalTodoCount - completedTodoCount;
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <section className="main">
          <TaskList todos={todoData} makeCompleted={this.makeCompleted} deleteTodoItem={this.deleteTodoItem} />
          <Footer leftTodoes={leftTodoCount} deleteAllCompletedTodoes={this.deleteAllCompletedTodoes} />
        </section>
      </section>
    );
  }
}
// TODO: TODO: TODO: Переделать ID - криво работает при добавлении и удалении
// TODO: Реализовать добавление задачTODO:
// TODO: Реализовать логику фильтрации
// *Если выбран таб All, то отображаются все задачи.
// *Если выбран таб Active, то отображаются лишь незавершенные задачи
// *Если выбран таб Completed, то отображаются лишь завершенные задачи
// TODO: TODO: Добавьте возможность удаления всех Completed задач нажатием на кнопку "Clear completed", которая расположена в нижней части списка задач с правой стороны.
// TODO: TODO:Добавьте логику для счетчика незавершенных задач, расположенного в нижней части списка задач с левой стороны. Счетчик всегда должен показывать общее количество незавершенных задач независимо от того, что отображается на экране пользователя и какой таб выбран.
// TODO: Результат должен быть ссылкой на репозиторий гитхаб
