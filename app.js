const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/peopleDB");

// like constructor => the data will be arranged in the following form only
const personSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Lets not leave them nameless"]
  },
  age:Number,
  phone_number:{
    type:Number,
  },
  gender:String
});

/*
creating a model  
mentioning the collection as singular; mongoose will create a collection with plural name
mongoose actually used lodash to achieve this
also mentioning the schema for the data
*/

const Person = mongoose.model("Person",personSchema);


const person = new Person({
  name:"John Doe",
  age:30,
  phone_number:3546754069,
  gender:"male",
})

// Person.insertMany([person1,person2,person3],function (err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully added the data to personDB.");
//   }
// })

Person.find(function (err,people){
  if (err){
    console.log(err);
  }
  else{
    people.forEach(person => {
      console.log(person.name)  
    });
  }
});


// person.save();

// const fruit = new Fruit({
//   name:"Apple",
//   rating:3,
//   review:"I hate apples."
// });


/* 
To save
=> fruit document
=> Fruit collection
=> inside fruitsDB
*/

// const insertDocuments = function (db,callback){

//   const collection = db.collection("fruits");

//   collection.insertMany(
//     [
//       {
//         name:"apple",
//         reting:"3",
//         review:"i hate apples",
//       },
//       {
//         name:"banana",
//         reting:"8",
//         review:"not bad",
//       },
//       {
//         name:"mango",
//         reting:"2",
//         review:"gives pimples",
//       },
//     ],function (err,r){
//       assert.equal(err,null);
//       console.log("Inserted 3 documents into the collection.")
//     }
//   )
// } 

// const findDocuments = function (db,callback){
//   const collection = db.collection('fruits');

//   collection.find({}).toArray(function (err, fruits){
//     assert.equal(err, null);
//     console.log("Found matching recordds.");
//     console.log(fruits);
//     callback(fruits);
//   })
// }