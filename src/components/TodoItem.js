import React, { Component } from 'react';
import Picker from './DatePick';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
        }
        this.timeCalculator = this.timeCalculator.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked || this.props.timer !== nextProps.timer || this.state.message !== nextState.message;
    }

    componentDidMount(){
            setInterval( () => {
                this.timeCalculator(this.props.timer);
            }, 1000)
    }

    timeCalculator(timer){
        if (timer !== false){
            let ms = timer - new Date().valueOf();
            let hs,mins;
            let msg = '';
            if (ms >= 0){
                hs = Math.floor(ms / 1000 / 60 / 60);
                mins = Math.floor((ms / 1000 / 60) % 60);
                if ( hs > 1 ){
                    msg += hs + " hours and ";
                } else if ( hs === 1 ){
                    msg += hs + " hour and ";
                } 
                msg += mins + " minute left.";
            } else {
                msg = "Time exceeded."
            }
            this.setState({
                message: msg,
            })
        }
    }

    render(){
        const { text, checked, id, timer, onToggle, onRemove, onChangeTime, onDeleteTime } = this.props;

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
                    timer && !checked && (
                        <div className="accept-time">
                            <div className="remove-time" onClick={(e) => {
                                e.stopPropagation();
                                onDeleteTime(id);
                            }}>
                                &times;
                            </div>
                            <div className="time-text">{this.state.message}</div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default TodoItem;