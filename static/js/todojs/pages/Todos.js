import React from "react";

import TodoStore from "../stores/TodoStore";
import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", () =>{
      this.setState({
        todos:TodoStore.getAll(),
      });
    });
  }

  createTodo(){
    TodoActions.createTodo(Date.now());
  }

  reloadTodos(){
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
