import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: 0
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeText(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeQuantity(event) {
    this.setState({
      quantity: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addGrocery({
      name: this.state.name,
      quantity: this.state.quantity,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
       <input type="text" onChange={this.handleChangeText}/>
       <input type="number" onChange={this.handleChangeQuantity}/>
       <input type="submit" />
      </form>
    );
  }
}

export default AddGrocery;