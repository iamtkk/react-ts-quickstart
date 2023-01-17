import { useState } from 'react';

type TodoListItemType = {
  id: number;
  todo: string;
};

const getTodoListCount = (todoList: Array<TodoListItemType>) => {
  console.log('## TodoList 카운트 : ', todoList.length);
  return todoList.length;
};

const App = () => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([]);
  const [todo, setTodo] = useState<string>('');
};
