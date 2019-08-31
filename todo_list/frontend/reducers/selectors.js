

export const allTodos = (state) => {
  return Object.keys(state.todos).map( (todo) => state.todos[todo]);
};
