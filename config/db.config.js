const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);
sequelize.authenticate()
.then(() => {
    console.log('Success');
})
.catch((err) => {
    console.log('Unable to connect to the database', err);
})

//Имя модели всегда с большой буквы