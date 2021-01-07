import React from 'react';
import classNames from 'classnames';
import Task from '../Task';
import { TaskListProps } from '../../interfaces';

import './TaskList.scss';

const TaskList: React.FC<TaskListProps> = ({
  filteredTasks,
  toggleComplete,
  deleteTask,
  editTask,
  updateTask,
}: TaskListProps) => (
  <ul className="todo-list">
    {filteredTasks.length ? (
      filteredTasks.map((item) => (
        <li key={item.id} className={classNames({ completed: item.isCompleted, editing: item.isEditing })}>
          <Task
            {...item}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
            updateTask={updateTask}
          />
        </li>
      ))
    ) : (
      <li>
        <h2 className="nothing">There is nothing here yet</h2>
      </li>
    )}
  </ul>
);

export default TaskList;
