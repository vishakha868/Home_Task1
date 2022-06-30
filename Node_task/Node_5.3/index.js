const express=require('express');
const app=express();
const validator=require('./validator').validator;
const router=require('./routerController').router;
// console.log(router);
app.use('/user',validator,router);
app.listen(8000,(req,res)=>{
    
    console.log("server running");
})