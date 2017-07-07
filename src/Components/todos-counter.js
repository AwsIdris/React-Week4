import React from 'react';
import _ from 'lodash';
export default class TodosCounter extends React.Component {
  constructor(props) {
    super(props);

  }
  numberOfTodos(todos) {

    const numberOfTodos = this.props.todos.length;
    return numberOfTodos;
  }

  render() {
    return (
      <h1>
        Number of Todos : {this.numberOfTodos()}
      </h1>
    );
  }
}
