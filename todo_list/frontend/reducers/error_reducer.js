


const errorReducer = (state = [], action) => {
  // Object.freeze(state);
  // let nextState = Object.assign({}, state);
  // switch (action.type) {
  //   case RECEIVE_ERRORS:
  //     return action.errors;
  //   case CLEAR_ERRORS:
  //     return [];
  //   default:
  //     return state;
  // }
}



const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      nextState = Object.assign(nextState, action.todos);
      // action.todos.forEach((todo) => nextState[action.todo.id] = action.todo);
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
};