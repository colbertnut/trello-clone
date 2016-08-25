import React from 'react';
import $ from 'jquery';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.addList = this.addList.bind(this);
  }

  addList(e) {
    e.preventDefault();
    let name = this.refs.name;
    $.ajax({
      url: '/lists',
      type: 'POST',
      dataType: 'JSON',
      data: { name: name.value, boardId: this.props.boardId }
    }).done( list => {
      this.props.addList(list);
      name.value = null;
    })
  }

  render() {
    return (
      <div className="center">
        <form onSubmit={this.addList}>
          <input placeholder="name" ref="name" />
        </form>
      </div>
    );
  }
}

export default ListForm;
