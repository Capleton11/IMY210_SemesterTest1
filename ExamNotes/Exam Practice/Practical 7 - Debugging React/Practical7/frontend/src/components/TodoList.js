import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.items.map((todo, index) => {
                    return <TodoItem item={todo} delete={this.props.removeTodo(index)} />
                })}
            </div>
        )
    }

}

export default TodoList;