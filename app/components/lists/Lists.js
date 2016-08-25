import React from 'react';
import List from './List';
import ListForm from './ListForm';
import $ from 'jquery';

class Lists extends React.Component {
  constructor(props) {
    this.addList = this.addList.bind(this);
    this.state = { lists: [] };
  }

  componentWillMount() {
    $.ajax({
      url: '/lists',
      type: 'GET',
      dataType: 'JSON',
      data: { boardId: this.props.boardId }
    }).done( lists => {
      this.setState({ lists });
    });
  }

  addList(list) {
    this.setState({ lists: [...this.state.lists, list]
    });
  }

  render() {
    let lists = this.state.lists.map( list => {
      return(<List key={list._id} {...list} />);
    });

    return(
      <div>
        <ListForm addList={this.addList} boardId={this.props.boardId} />
      <div className="row">
        { lists }
      </div>
    </div>
    )
  }
}

export default Lists;
