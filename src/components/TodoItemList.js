import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TodoItem from './TodoItem';
import './TodoItemList.css';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove, onChangeTime } = this.props;
        const todoList = todos.map(
            ({id,text,checked,timer}) => (
                <CSSTransition
                  key={id}
                  timeout={300}
                  classNames="item"
                >
                    <TodoItem
                      id={id}
                      text={text}
                      checked={checked}
                      timer={timer}
                      onToggle={onToggle}
                      onRemove={onRemove}
                      onChangeTime={(id, date) => onChangeTime(id, date)}
                      key={id}
                    />
                </CSSTransition>
            )
        );
        return (
            <div>
                <TransitionGroup
                    className="todo-list"
                >
                    {todoList}
                </TransitionGroup>
            </div>
        );
    }
}

export default TodoItemList;