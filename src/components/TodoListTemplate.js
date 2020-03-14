import React from 'react';
import './TodoListTemplate.css';

class TodoListTemplate extends React.Component {
    state = {
        date: new Date().toLocaleString()
    }
    componentDidMount(){
        setInterval( () => {
            this.setState({
                date: new Date().toLocaleString()
            })
        }, 1000)
    }
    render(){
        const { form, children } = this.props;
        return (
            <main className="todo-list-template">
                <div className="title">
                    TO DO
                    <p className="currentTime">{this.state.date}</p>
                </div>
                <section className="form-wrapper">
                    {form}
                </section>
                <section className="todos-wrapper">
                    {children}
                </section>
            </main>
        );
    }
}

export default TodoListTemplate;