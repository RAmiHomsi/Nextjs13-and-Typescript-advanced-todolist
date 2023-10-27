export interface InputFieldPros {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export interface TodoProps {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface TodoListProps {
  todos: TodoProps[];
  setToDos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export interface SingleTodoProps {
  todo: TodoProps;
  todos: TodoProps[];
  setToDos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}
