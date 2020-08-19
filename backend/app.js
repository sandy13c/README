const express = require('express');
const app = express();
const fs = require('fs');
const bodyparser = require('body-parser');
//let recipes = require('./allrecipes').foodrecipes;
//const recipes =  './nodejs_restapi/allrecipes.json';

let recipes = [
  {recipe_id:1,food_recipe:"Maggie Noodle",cook_time:15,ingridients:"water, noodle, turmeric powder,garam masala,hotsuace,garlic",cooking_instructions:"https://hebbarskitchen.com/maggi-noodles-recipe-maggi-recipes/"}
  ,{recipe_id:10,food_recipe:"chicken burger",cook_time:13,ingridients:"jddskjsdf",cooking_instructions:12},
  {recipe_id:3,food_recipe:"fe",cook_time:15,ingridients:"scscd",cooking_instructions:3423}
];
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
fs.readFile('indian.txt',(err,data) =>{
    res.writeHead(200, {'Content-type': 'text/txt'});
    res.write(data);
    return res.end();
});
});
app.get('/one',(req,res)=>{
  fs.readFile('burger.txt',(err,data) =>{
    res.writeHead(200, {'Content-type': 'text/txt'});
    res.write(data);
    return res.end();
  });
});
app.get('/two',(req,res)=>{
  fs.readFile('pizza.txt',(err,data) =>{
    res.writeHead(200, {'Content-type': 'text/txt'});
    res.write(data);
    return res.end();
  });
});
app.get('/three',(req,res)=>{
  fs.readFile('applepie.txt',(err,data) =>{
    res.writeHead(200, {'Content-type': 'text/txt'});
    res.write(data);
    return res.end();
  });
});
app.get('/four',(req,res)=>{
  fs.readFile('chickenpotpie.txt',(err,data) =>{
    res.writeHead(200, {'Content-type': 'text/txt'});
    res.write(data);
    return res.end();
  });
});

app.get('/five',(req,res)=>{
  fs.readFile('pizzatwo.txt',(err,data) =>{
    res.writeHead(200, {'Content-type': 'text/txt'});
    res.write(data);
    return res.end();
  });
});
app.get('/rec',(req,res) => {

       res.status(200).json(recipes);

});

app.post('/recone',(req,res)  => {
     let addrecipe = {
       recipe_id:req.body.recipe_id,
       food_recipe: req.body.food_recipe,
       cook_time: req.body.cook_time,
       ingridients: req.body.ingridients,
       cooking_instructions: req.body.cooking_instructions
     };

     recipes.push(addrecipe);


     res.status(200).send('New Recipe Added');
;


  });

  app.get('/rec/:id',(req,res) =>{

    let recipe =  recipes.find((item) => {
        return item.recipe_id === parseInt(req.params.id, 10);
    });

    res.status(200).json(recipe);

  });

  app.delete('/reci/:id', (req,res) => {
      let removeRecipe =  recipes.find((item) => {
        return item.recipe_id === parseInt(req.params.id, 10);
    });
    if (removeRecipe) {
      let target = recipes.indexOf(removeRecipe);

      recipes.splice(target, 1);
    }
    res.status(200).send('Recipe is deleted');
  });


// localhost:3000
app.listen(3000,() => {
  console.log('We got it running');
});
module.exports = app;
