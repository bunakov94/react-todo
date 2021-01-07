export interface ITaskData {
  isCompleted: boolean;
  isEditing: boolean;
  taskText: string;
  timeOfCreation: Date;
  id: string;
}

export type TaskListProps = {
  filteredTasks: ITaskData[];
  makeTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
};

export type AppState = {
  tasks: ITaskData[];
  filter: string;
};

export type AppProps = {};

export interface ITaskDataListProps {
  isCompleted: boolean;
  isEditing: boolean;
  taskText: string;
  timeOfCreation: Date;
  id: string;
  makeTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
}
export type TaskDataListState = {
  distanceFromCreation: string;
  editText: string;
};

export type FooterProps = {
  tasksLeft: number;
  deleteCompletedTasks: () => void;
  filter: string;
  changeFilter: (filter: string) => void;
};

export type HeaderProps = {
  addTask: (text: string) => void;
};

export type NewTaskFormProps = {
  addTask: (text: string) => void;
};

export type TaskFilterProps = {
  filter: string;
  changeFilter: (filter: string) => void;
};
