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

  const db = client.db(dbName);


  // db.collection('numbers').insertMany(
  //   [
  //    {
  //      name:"apple",
  //      reting:"3",
  //      review:"i hate apples",
  //     },
  //     {
  //       name:"banana",
  //       reting:"8",
  //       review:"not bad",
  //      },
  //      {
  //       name:"mango",
  //       reting:"2",
  //       review:"gives pimples",
  //      },
  //   ], 
  //   function(err, r) {
  //   assert.equal(null, err);
  //   assert.equal(3, r.insertedCount);
  //   
  //   client.close();
  // });


    insertDocuments(db,function (){
      client.close();
    })

    findDocuments(db,function(){
      client.close();
    })

});

const insertDocuments = function (db,callback){

  const collection = db.collection("fruits");

  collection.insertMany(
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
    ],function (err,r){
      assert.equal(err,null);
      console.log("Inserted 3 documents into the collection.")
    }
  )
} 

const findDocuments = function (db,callback){
  const collection = db.collection('fruits');

  collection.find({}).toArray(function (err, fruits){
    assert.equal(err, null);
    console.log("Found matching recordds.");
    console.log(fruits);
    callback(fruits);
  })
}