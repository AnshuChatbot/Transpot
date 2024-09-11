const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

const user= 'root'

const password= "Chatbot@123"
const database= 'aarogi';
const sequelize = new Sequelize(database,user,password,{
    host: 'localhost',
    dialect:'mysql',
    
});

sequelize.authenticate((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = sequelize;
