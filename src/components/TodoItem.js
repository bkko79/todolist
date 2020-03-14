import React, { Component } from 'react';
import Picker from './DatePick';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked || this.props.timer !== nextProps.timer;
    }

    render(){
        const { text, checked, id, timer, onToggle, onRemove, onChangeTime } = this.props;
        console.log(id);

        return (
            <div className="todo-wrap">
                <div className="todo-item">
                    <div className="remove" onClick={(e) => {
                        e.stopPropagation();
                        onRemove(id);
                    }}>
                        &times;
                    </div>
                    <div className={`todo-text ${checked && 'checked'}`}>
                        <div onClick={() => onToggle(id)}>{text}</div>
                    </div>
                    {
                        !checked && (<Picker id={id} onChangeTime={(id, date) => onChangeTime(id, date)} />)
                    }
                    {
                        checked && (<div className="check-mark">✓</div>)
                    }
                </div>
                {
                    timer && !checked && (<div className="accept-time">{(timer - new Date().valueOf())}ms left</div>)
                }
            </div>
        );
    }
}

export default TodoItem;