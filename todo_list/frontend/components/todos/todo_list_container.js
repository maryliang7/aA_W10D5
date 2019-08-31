import { connect } from 'react-redux';
import ToDoList from './todo_list';
import { receiveTodo, createTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: Object.values(state.todos)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchAllTodos: () => dispatch(fetchAllTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);