const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/fruitsDB");

// like constructor => the data will be arranged in the following form only
const fruitSchema = new mongoose.Schema({
  name:String,
  rating:Number,
  review:String
});

/*
creating a model  
mentioning the collection as singular; mongoose will create a collection with plural name
mongoose actually used lodash to achieve this
also mentioning the schema for the data
*/

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name:"Apple",
  rating:3,
  review:"I hate apples."
});

/* 
To save
=> fruit document
=> Fruit collection
=> inside fruitsDB
*/
fruit.save();

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