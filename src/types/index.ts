export interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (todo: TodoProps) => void;
}

export interface TodoProps {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface TodoListProps {
  todos: TodoProps[];
  dispatch: React.Dispatch<TodoAction>;
}

export interface SingleTodoProps {
  todo: TodoProps;
  dispatch: React.Dispatch<TodoAction>;
}

type TodoAction =
  | { type: "ADD"; payload: TodoProps }
  | { type: "DELETE"; payload: number }
  | { type: "DONE"; payload: number }
  | { type: "EDIT"; payload: { id: number; text: string } };

export const todoReducer = (state: TodoProps[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "DONE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.text }
          : todo
      );
    default:
      return state;
  }
};
