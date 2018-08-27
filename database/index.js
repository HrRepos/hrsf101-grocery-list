// connect to db
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'grocery_list'
});

// function that gets all groceries from table
const getAllGroceries = function (whenGroceries) {
  connection.query('SELECT * from groceries', function(error, results, fields) {
    if(error) {
      // throw error;
      whenGroceries(error);
    } else {
      whenGroceries(null, results);
    }
  });
};
// item should be { name: '', quanity: # }
const addOneGrocery = function(item, whenAdded) {
  connection.query(`INSERT INTO groceries (name, quantity) VALUES (?, ?);`, [item.name, item.quantity], function(error, results, fields) {
    if(error){
      whenAdded(error);
    } else {
      whenAdded(null);
    }
  });
}


addOneGrocery({name: 'egg rolls', quantity: 500 }, function(error){
  if(error) {
    console.log('something went wrong', error)
  } else {
    console.log('item added!');
  }
});

// function that inserts one grocery into table


module.exports.getAllGroceries = getAllGroceries;
module.exports.addOneGrocery = addOneGrocery;