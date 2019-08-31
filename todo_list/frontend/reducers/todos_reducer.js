import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "walk Bolt",
    body: "with leash",
    done: false
  },
  2: {
    id: 2,
    title: "wash Bolt",
    body: "with shampoo",
    done: true
  },
  3: {
    id: 3,
    title: "feed Bolt",
    body: "with food",
    done: false
  }
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
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

export default todosReducer;
