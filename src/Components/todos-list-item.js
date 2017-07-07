import React from 'react';
import './todos-list-item.css'

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isEditing: false
    };
  }

  renderDescriptionSection() {
    const {description, done} = this.props;
    const descriptionStyle = {
      color: done
        ? 'red'
        : 'black',
      cursor: 'pointer'

    };
    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={description} ref="editInput"/>
          </form>
        </td>
      );

    }
    return (
      <td style={descriptionStyle} onClick={this.props.toggleDescription.bind(this, description)}>
        {description}

      </td>

    );
  }
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteDescription.bind(this, this.props.description)}>Delete</button>
      </td>
    );

  }

  render() {
    return (

      <tr>
        {this.renderDescriptionSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }
  onEditClick() {
    this.setState({isEditing: true})
  }
  onCancelClick() {
    this.setState({isEditing: false})

  }
  onSaveClick(event) {
    event.preventDefault();
    const prevDescription = this.props.description;
    const newDescription = this.refs.editInput.value;
    this.props.saveDescription(prevDescription, newDescription);
    this.setState({isEditing: false});

  }
}
