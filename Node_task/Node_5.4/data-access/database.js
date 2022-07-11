const Pool=require('pg').Pool;
// const models=require('./models');
const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password:"12345678",
    port:5432,
});
module.exports=pool;