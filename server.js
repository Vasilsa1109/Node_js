// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res)=> {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Some text');
// });

//Для хранинения routов

//авторизация 
// import express from 'express';
// import { homeRouter } from 'controller.js'
// import { authMiddleware } from 'middleware.js'
// import dotenv  from 'dotenv';

// dotenv.cofig();
// const app = express();
// async function main(){
//   app.use(authMiddleware);
//   app.use('/api', homeRouter)
//   app.all('*', (req, res) => {
//     res.status(404).json({message: 'Not found'})
//   });

//   app.listen(process.env.PORT || 4200, () => {
//     console.log(`Сервер запущен на ${process.env.PORT} порту`)
//   }) 
// }
// main();

//подключение sequelize



//подключение handlebars 
const express = require('express');
const exphbs = require('express-handlebars').engine;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const sequelize = require('./config/db.config');
const viewRoutes = require('./routes/index');
const apiRoutes = require('./api/users');

const app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json()); 

app.engine('hbs', exphbs({
     extname: 'hbs', 
     defaultLayout: 'main', 
     layoutsDir: path.join(__dirname, 'views/layouts') 
    }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

sequelize.sync() 
  .then(() => { 
    console.log('Database & tables created!'); 
  }) 
  .catch((err) => { 
    console.error('Error creating database:', err); 
  });

app.use('/', viewRoutes); 
app.use('/api', apiRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { title: '404 - Page Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// app.get('/', (req, res) => {
//   res.render('home', {
//     title: 'Home Page',
//   });
// })


// app.get('/login', (req, res) => {
//   res.render('login', {
//     title: 'Login Page',
//   });
// })


//  app.get('/error', (req, res) => {
//      res.render('404', {
//        title: 'Error(404) Page',
//     });
//   })


//   app.get('/registration', (req, res) => {
//     res.render('registration', {
//       title: 'Registration Page',
//     });
//   })

//   app.post('/registration', (req, res) => { 
//     const { username, password, email, birthdate, photo } = req.body; 
//     if (username && password && email) { 
//         console.log(`User registered successfully! Username: ${username}`);
//         return res.redirect('/');
//     }
//     else { 
//         return res.status(400).send('Registration failed. Missing required fields.'); 
//     }
// });




