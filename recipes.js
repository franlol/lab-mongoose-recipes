const mongoose = require('mongoose');
// const Schema   = mongoose.Schema;
const data = require('./data.js');
const Recipe = require("./Recipe");

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

//Iteration 1
// Recipe.create({
//   title: 'Asian Glazed Chicken Thighs',
//   level: 'Amateur Chef',
//   ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey', '1/3 cup soy sauce (such as Silver Swan®)', '1/4 cup Asian (toasted) sesame oil', '3 tablespoons Asian chili garlic sauce', '3 tablespoons minced garlic', 'salt to taste', '8 skinless, boneless chicken thighs'],
//   cuisine: 'Asian',
//   dishType: ['Dish'],
//   image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
//   duration: 40,
//   creator: 'Chef LePapu'
// }, (err) => console.log(err));

// mongoose.connection.close();

// Iteration 2
// const query2 = async () => {
//   try {
//     const recipe = await Recipe.findById('5c7912e188ed105dc779c969');
//     console.log(recipe.title);
//   } catch (err) {
//     console.log(err)
//   } finally {
//     mongoose.connection.close();
//   }
// }
// query2();

//Iteration 3
// const query3 = async () => {
//   try {
//     const insert = await Recipe.insertMany(data);
//     console.log(insert);
//   } catch (err) {
//     console.log(err)
//   } finally {
//     mongoose.connection.close();
//   }
// }
// // query3();

// const query33 = async () => {
//   try {
//     const recipes = await Recipe.find();
//     for (let recipe of recipes) {
//       console.log(recipe.title)
//     }
//   } catch (err) {
//     console.log(err)
//   } finally {
//     mongoose.connection.close();
//   }
// }

// query33();

// Iteration 4
// const query4 = async () => {
//   try {
//     const recipe = await Recipe.findOne({"title" : "Rigatoni alla Genovese"});
//     const updated = await Recipe.updateOne(recipe, {duration: 100})
//     console.log("Succesfull updated!: ");
//     console.log(updated)
//   } catch (err) {
//     console.log(err);
//   } finally {
//     mongoose.connection.close();
//   }
// }
// query4();

// Iteration 5
// const query5 = async () => {
//   try {
//     const recipe = await Recipe.findOne({"title": "Carrot Cake"});
//     const deleted = await Recipe.remove(recipe);
//     console.log("Carrot cake removed!");
//     console.log(deleted)
//   } catch (err) {
//     console.log(err);
//   } finally {
//     mongoose.connection.close();
//   }
// }
// query5();