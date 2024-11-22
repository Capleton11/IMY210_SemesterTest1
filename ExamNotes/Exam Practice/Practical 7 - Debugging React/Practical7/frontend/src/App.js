import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { title: "First todo", content: "This is the first todo" },
        { title: "Second todo", content: "This is the second todo" },
        { title: "Third todo", content: "This is the third todo" },
      ],
      todoCount: 3,
    };
  
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }


  addTodo(item){

    this.setState({
      todoItems: [...this.state.todoItems, item],
      todoCount: this.state.todoCount + 1
    });

  }

  removeTodo(index){
    this.setState({
      todoItems: this.state.todoItems.filter((_, i) => i !== index),
      todoCount: this.state.todoCount - 1
    });
  }


  render() {
    return (
      <div className="container">
        <TodoInput addTodo = {this.addTodo}/>
        <TodoList items = {this.state.todoItems}  removeTodo = {this.removeTodo}/>
      </div>
    );
  }
}

export default App;
