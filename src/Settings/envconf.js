require('dotenv').config()

const BDUSER=process.env.BDUSER;
const BDHOST=process.env.BDHOST;
const DataBase=process.env.DataBase;
const Password=process.env.Password;

const PORT=process.env.PORT;
const URL=process.env.URLAPI

module.exports={
    BDUSER,
    BDHOST,DataBase,
    Password,
    PORT,
    URL
}
