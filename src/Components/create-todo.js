import _ from 'lodash';
import React from 'react';

export default class CreatTodo extends React.Component {

  //console.log(this.props.todos);
  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  };
  renderError() {
    if (!this.state.error) {
      return null;
    }
    return <div style={{
      color: 'red'
    }}>{this.state.error}</div>

  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Input the Description..." ref="createInput"/>
        <button>
          Create
        </button>
        {this.renderError()}
      </form>

    );
  }
  handleCreate(event) {
    event.preventDefault();
    const createInput = this.refs.createInput;
    const description = createInput.value;
    const validationInput = this.validationInput(description);
    if (validationInput) {
      this.setState({error: validationInput});
      return;
    }

    this.setState({error: null});
    this.props.createDescription(description);
    this.refs.createInput.value = '';

  }
  validationInput(description) {
    if (!description) {
      return 'Pleas input as description..';
    } else if (_.find(this.props.todos, todo => todo.description === description)) {
      return 'The description already exissts';
    } else {
      return null;
    }
  }
}

//export default App;
