import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  constructor(props){
    super(props);
    this.handleTime = this.handleTime.bind(this);
    this.id = 3;
    this.state = {
      input: '',
      todos: [
        {id: 0, text: 'hello', checked: false, timer: false},
        {id: 1, text: 'react', checked: true, timer: false},
        {id: 2, text: 'Nintendo', checked: false, timer: false}
      ]
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    if (input !== ''){
      this.setState({
        input: '',
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false,
          timer: '',
        })
      })
    };
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleTime = (id, date) => {
    console.log(id, date);
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      timer: date
    };
    
    this.setState({
      todos: nextTodos
    });
    console.log(todos);
  }

  render(){
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove, handleTime } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate} />
      )}>
        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
          onChangeTime={(id, date) => handleTime(id, date)} />
      </TodoListTemplate>
    );
  }
}

export default App;