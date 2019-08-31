import React from 'react';
import ToDoListItem from './todo_list_item';
import ToDoForm from './todo_form';
// import { receiveTodo } from '../../actions/todo_actions';

class ToDoList extends React.Component {
  
  componentDidMount() {
    this.props.fetchAllTodos();
  }

  render() {
    return (
      <div> 
        <h1>Mavin Loch's ToDoList</h1>
        <ul>
          {this.props.todos.map((todo) => <li key={todo.id} ><ToDoListItem key={todo.id} todo={todo}/></li>)}
        </ul>
        <ToDoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo}/>
      </div>
    );
  }
}

export default ToDoList;