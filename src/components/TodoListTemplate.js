import React from 'react';
import './TodoListTemplate.css';

class TodoListTemplate extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            date: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
            animationClass: 'titleAnimation'
        }
    }
    componentDidMount(){
        setInterval( () => {
            this.setState({
                date: new Date().toLocaleString('en-US')
            })
        }, 1000)
    }
    render(){
        const { form, children } = this.props;
        return (
            <main className="todo-list-template">
                <div className={this.state.animationClass}>
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