import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    render() {
        const { todos } = this.props;

        return (
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return (
                            <TodoItem
                                updateTodoFn={this.updateTodo}
                                deleteTodoFn={this.deleteTodo}
                                key={_index} todo={_todo}>
                            </TodoItem>
                        )
                    })
                }
            </div>
        );
    }

    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }

    deleteTodo = (todo) => {
        this.props.deleteTodoFn(todo);
    }
}

export default TodoList;