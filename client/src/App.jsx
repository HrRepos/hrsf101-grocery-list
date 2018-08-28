import React from 'react';
import GroceryList from './GroceryList.jsx';
import AddGrocery from './AddGrocery.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryList: [],
    }
    this.addGroceryItem = this.addGroceryItem.bind(this);
  }

  getGroceries() {
    $.ajax({
      url: 'http://localhost:3000/groceries',
      method: 'GET', //type does same thing
      success: (data) => {
        this.setState({
          groceryList: data,
        });
      },
      error: function (err) {
        console.log('err', err);
      },
    });
  }

  componentDidMount() {
    this.getGroceries();
  }

  addGroceryItem(item) {
    // item should be structured like {name: , quantity: }
    $.ajax({
      url: 'http://localhost:3000/groceries',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(item),
      success: () => {
        console.log('added item!');
        this.getGroceries();
      },
      error: () => {

      }
    });
  } 

  render() {
    return (
      <div>
        <AddGrocery addGrocery={this.addGroceryItem}/>
        <GroceryList
          groceryList={this.state.groceryList}
        />
      </div>
    );
  }
}

export default App;