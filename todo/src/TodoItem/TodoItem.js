import React from 'react';
import './style.css'

class TodoItem extends React.Component {
    render() {

        const { todo } = this.props;

        return (
            <div className='todoItemContainer'>
                <div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>
                    {todo.text}
                </div>
                <button onClick={this.deleteTodo} type='submit'>Delete</button>
            </div>
        );
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

    deleteTodo = () => {
        //console.log('delete ', this.props.todo)
        this.props.deleteTodoFn(this.props.todo);
    }
}

export default TodoItem;