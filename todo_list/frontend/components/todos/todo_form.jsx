import React from 'react';
import { uniqueId } from '../../util/util';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state).then(
      () => this.setState({title: "", body: ""})
    );
    // this.setState({
    //   id: uniqueId(),
    //   title: "",
    //   body: "",
    //   done: false
    // });
  }

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  handleBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Add ToDo: </h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title 
            <input type="text" onChange={this.handleTitle} value={this.state.title}/>
          </label>
        
          <label>Description 
            <input type="text" onChange={this.handleBody} value={this.state.body}/>
          </label>
        
          <input type="submit" value="Add ToDo"/>
        </form>
      </div>
    )
  }
}

export default ToDoForm;
