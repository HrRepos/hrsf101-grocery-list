import React from 'react';
import GroceryList from './GroceryList.jsx';

const list = [
  {name: 'pie', quantity: 10},
  {name: 'cookie', quantity: 12},
  {name: 'cake', quantity: 100}
];

const App = () => (
  <div>
    <GroceryList
      groceryList={list}
    />
  </div>
);

export default App;