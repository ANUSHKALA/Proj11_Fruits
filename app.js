const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(fruitsDB);

  db.collection('numbers').insertMany(
    [
     {
       name:"apple",
       reting:"3",
       review:"i hate apples",
      },
      {
        name:"banana",
        reting:"8",
        review:"not bad",
       },
       {
        name:"mango",
        reting:"2",
        review:"gives pimples",
       },
    ], 
    function(err, r) {
    assert.equal(null, err);
    assert.equal(3, r.insertedCount);
    console.log("Inserted 3 documents into the collection.")
    client.close();
  });

  client.close();
});