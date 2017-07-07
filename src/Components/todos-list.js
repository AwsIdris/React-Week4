import _ from 'lodash';
import React from 'react';
import TodosListItem from './todos-list-item';
import './todos-list.css';

export default class Todolist extends React.Component {

  //console.log(this.props.todos);
  renderItems() {
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props}/>);
  }
  render() {
    return (
      <table className='tableStyle'>

        <tbody>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
