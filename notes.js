//npm i express pg sequelize express-session

//npm i -D webpack webpack-cli mocha chai react react-dom react-router-dom redux react-redux axios moment redux-thunk babel-loader @babel/core @babel/preset-react supertest

//////////////////////////////////////////////////////////////////////
//ALL THE IMPORTS THAT I USE

// import { render } from 'react-dom';
// import React, { Component } from 'react';
// import { HashRouter, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider, connect } from 'react-redux';
// import thunk from "redux-thunk";
// import axios from "axios"

//////////////////////////////////////////////////////////////////////


// START BY CREATING YOUR DATA SHEETS AND SETUP
  // create index.html, server.js, db.js
  // npm init -y
  // git init
  // npm i sequelize pg express
  // open up Postgres (blue elephant)
  // run nodemon db.js
  // in terminal type echo node_modules >> .gitignore


// CHECK AND SEND TO GITHUB
  // git status 'to check'
  // git add .
  // git commit -m '(message)'
  // git push 'to github'

// CREATING A DATABASE IN POSTGRES (write in termial) -- don't forget to add the ;
  // psql
  // create database (database name); --creates a data base in postres
  // \q -- quits out of postres
  // \c (database name) -- connects to the database
  // \d -- allows to see in the database (needs to be in a database by connecting ^)
  // \d (table name) -- lets us see the spacific table name
  //select * from (table name); -- you see your entire table with your data
  //select NAME from products; -- gives you a list of all the names from the products table
  //select name, id, categoryId from products; -- this will show us only the name, id, and "categoryId" information for our tables
  //DON'T FORGET TO DO syncAndSeed(); TO CHECK THE DATA

// NOW YOU SHOULD BE READY TO START YOUR PROJECT


//  HEROKU
//    npm install heroku -g
//    heroku create (name of app)
//    git remote -v ---will tell you that you have the app in git and heroku
//git push heroku master --this will push up to heroku and show you how it is doing it
//heroku open will take you to a page with an error
//heroku logs --tail will tell you the error
//go to your heroku account under Resourses
// under add-ons type postgres and press enter then click provisions
//if you then go to settings under Config Vars the name will be DATABASE_URL which will link to our db.js page under (new Sequelize) and show us our app in heroku
//haroku open  will open the app.js(need to add "postinstall": "npm run webpack") at the end of the script object
//git add .
//git commit -m 'massage'
//git push heroku master to push to git and heroku


//if \d is not working do this:
//make sure you are calling syncAndSeed(); in the db.js page
//exit out of postgres, and go to a new terminal
//in the new terminal run nodemon db.js and if no errors go back to the postgres terminal
//then type psql
//\c (database name)
//\d should work,



//TESTING

//in the db.js
// npm i mocha (testing framework) chai (asuretion liberary) --save-dev (this tells us that these liberaries will only be show during development)


//in the spec.js
// in the package.json change the test to "test:dev": "DATABASE_URL=postgres://localhost/db_name_test mocha spec.js --watch"
//npm i supertest --save-dev
//needs to make a new database
//then type    npm run test:dev

//app.use(require('cors')());
//npm i cors
//DYNAMIC API's

// npm i inflection -- to make this pluralized for all of the api's (Object.entries().forEach(([])=>{}))

// WEBPACK
//npm i webpack webpack-cli --save-dev
//in the package.json folder under start:
//TYPE "webpack": "webpack --watch --mode=development"
//then npm run webpack
// need to create a src folder and an index.js
//TYPE mkdir src/
//TYPE touch src/index.js
//CREATE webpack.config.js
//TYPE
  // module.exports = {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js/,
  //         loader: 'babel-loader',
  //         exclude: /node_modules/
  //       }
  //     ]
  //   }
  // };
//IN THE webpack.config.js
//TYPE npm i babel-loader --save-dev
//TYPE npm i @babel/core --save-dev
//got to the package.json folder after the first set of brakets type "babel": {"presets": ["@babel/react"]}
//TYPE npm i @babel/preset-react --save-dev
//now do npm run webpack
//the folder dist/main.js will be created
// go to the server.js and type
//app.use('/dist', express.static(path.join(__dirname, 'dist')))
//type this in the index.html <script src="/dist/main.js" defer><script> and delete type='babel/text'
//go to the package.json and type under "webpack"
//TYPE "start:dev" : "npm run webpack & nodemon server.js --ignore dist/ --ignore src/"
//to run it type npm run start:dev
// echo dest/ >> .gitignore
//TYPE "postinstall" : "webpack" in the package.json folder so we can push to heroku


//REMOVE CDN's

//TYPE npm i react react-dom react-router-dom redux react-redux axios moment redux-thunk --save-dev
//now delete the route on the top of the html page


//////////////////////////////////////////////////////////////////////
