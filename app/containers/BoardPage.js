import React from 'react';
import List from '../components/lists/Lists';


class BoardPage extends React.Component {
  render() {
    return(
      <div>
        <List boardId={this.props.id} />
      </div>
    )
  }
}

export default BoardPage;
