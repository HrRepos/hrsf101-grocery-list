const db = require('mysql');

const connection = db.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'groceries'
});

const groceries = {
  getAll () {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM grocery_items;', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    });
  },
  insertOne({ name, quantity }) {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO grocery_items (item, quantity) VALUES (?, ?);', 
        [name, quantity],
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        })
    })
  },
};

module.exports = groceries;
