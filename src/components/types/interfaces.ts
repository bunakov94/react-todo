export interface ITask {
  isCompleted: boolean;
  isEditing: boolean;
  text: string;
  timeOfCreation: Date;
  id: string;
  timer: {
    minutes: number;
    seconds: number;
  };
}

export type TaskListProps = {
  filteredTasks: ITask[];
  toggleComplete: (id: string, isCompleted: boolean) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
};

export type AppState = {
  tasks: ITask[];
  filter: number;
};

export type AppProps = {};

export interface ITaskListProps {
  isCompleted: boolean;
  isEditing: boolean;
  text: string;
  timeOfCreation: Date;
  id: string;
  timer: {
    minutes: number;
    seconds: number;
  };
  toggleComplete: (id: string, isCompleted: boolean) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string) => void;
  updateTask: (id: string, text: string) => void;
}
export type TaskListState = {
  distanceFromCreation: string;
  editText: string;
  timer: {
    minutes: number;
    seconds: number;
  };
  isPlay: boolean;
};

export type FooterProps = {
  tasksLeft: number;
  deleteCompletedTasks: () => void;
  filter: number;
  changeFilter: (filter: number) => void;
};

export type HeaderProps = {
  addTask: (text: string, min: number, sec: number) => void;
};

export type NewTaskFormProps = {
  addTask: (text: string, min: number, sec: number) => void;
};

export type TaskFilterProps = {
  filter: number;
  changeFilter: (filter: number) => void;
};

export type Keys = keyof ITask;
