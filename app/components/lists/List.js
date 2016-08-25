import React from 'react';
import CardForm from '../cards/CardForm';
import Card from '../cards/Card';
import $ from 'jquery';

class List extends React.Component {
  constructor(props) {
  super(props);
  this.deleteList = this.deleteList.bind(this);
  this.addCard = this.addCard.bind(this);
  this.state = { card: [] }
}

componentWillMount() {
  $.ajax({
    url: '/cards',
    type: 'GET',
    dataType: 'JSON',
    data: { listId: this.props._id }
  }).done( cards => {
    this.setState({ cards });
    });
  }

addCard(card) {
  this.setState({ cards: [...this.state.cards, card] });
}

deleteList() {
  $.ajax({
    url: '/lists/${this.props._id}',
    type: 'DELETE',
    data: { id: this.props._id }
  }).done( () => {
    //NEED TO NOTIFY PARENTS
  });
}
  render() {
    let cards = this.state.cards.map( card => {
      return(<Card key={card._id} {...card} />);
    });
    return (
      <div className="col s12 m2">
        <button onClick={this.deleteList} className="btn">Delete</button>
        <h3 className="center">{this.props.name}</h3>
        <hr />
        <CardForm addCard={this.addCard} listId={this.props._id} />
        { cards }
      </div>
    );
  }
}

export default List;
