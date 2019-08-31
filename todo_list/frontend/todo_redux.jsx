import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, fetchAllTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
// import { fetchAllTodos } from './util/todo_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchAllTodos = fetchAllTodos;

  ReactDOM.render(<Root store={store} />, root);
});