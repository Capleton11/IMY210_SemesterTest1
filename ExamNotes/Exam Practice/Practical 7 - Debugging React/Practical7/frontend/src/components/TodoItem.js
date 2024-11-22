import React from 'react'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{this.props.item.title}</h5>
                    <p class="card-text">{this.props.item.content}</p>
                </div>
                <button onClick={this.props.delete} class="btn btn-danger">Delete</button>
            </div>
        )
    }

}

export default TodoItem;