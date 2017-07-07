import _ from 'lodash';
import React from 'react';
import CreatTodo from './Components/create-todo';
import TodoList from './Components/todos-list';
import TodosCounter from './Components/todos-counter'
import TodosListHeader from './Components/todos-list-header';
import './app.css';
const todos = [
  {
    description: 'First  Todo In The List',
    done: false
  }, {
    description: 'Second   Todo In The List',
    done: true
  }, {
    description: 'Thierd  Todo In The List',
    done: false
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="App">
        <TodosListHeader/>
        <TodosCounter todos={this.state.todos} />

        <CreatTodo todos={this.state.todos} createDescription={this.createDescription.bind(this)}/>
        <TodoList todos={this.state.todos} toggleDescription={this.toggleDescription.bind(this)} saveDescription={this.saveDescription.bind(this)} deleteDescription={this.deleteDescription.bind(this)}/>
      </div>
    );
  }
  toggleDescription(description) {

    const foundTodo = _.find(this.state.todos, todo => todo.description === description);
    foundTodo.done = !foundTodo.done;
    this.setState({todos: this.state.todos});
  }

  createDescription(description) {
    this.state.todos.push({description, done: false});
    this.setState({todos: this.state.todos})
  }

  saveDescription(prevDescription, newDescription) {
    const foundTodo = _.find(this.state.todos, todo => todo.description === prevDescription);
    foundTodo.description = newDescription;
    this.setState({todos: this.state.todos});

  }
  deleteDescription(descriptionToDelete) {
    _.remove(this.state.todos, todo => todo.description === descriptionToDelete);
    this.setState({todo: this.state.todos});
  }


}
