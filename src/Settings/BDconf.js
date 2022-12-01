const mysql =require('mysql2')
const { BDUSER,BDHOST,DataBase,Password }=require('./envconf')

const pool=mysql.createPool({
    host:BDHOST,
    user:BDUSER,
    database:DataBase,
    password:Password,
    ssl:{
        rejectUnauthorized:true
    }
});

module.exports=pool;