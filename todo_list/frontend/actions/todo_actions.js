export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
import * as APIUtilToDo from '../util/todo_api_util';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const fetchAllTodos = () => dispatch => {
  return APIUtilToDo.fetchAllTodos()
    .then( todos => dispatch(receiveTodos(todos)));
};

export const createTodo = (todo) => dispatch => {
  return APIUtilToDo.createTodo(todo)
    .then( todo => dispatch(receiveTodo(todo)));
};