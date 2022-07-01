const express = require('express');
const router = express.Router();
const user = require('./db').user;
const validator = require('./validator').validator;

const { v4: uuidv4 } = require('uuid');
router.use(express.json())
router.use(express.urlencoded({ extended: true })) 

//
const getAutoUser=(req,res)=>{
    const { loginSubstring = '', limit = 10 } = req.query;
    const list = user
      .filter(user => user.login.includes(loginSubstring) && !user.isDeleted)
      .sort((a, b) => a.login.localeCompare(b.login))
      .slice(0, limit);
  
    res.send(list);
}
const getUser = (req, res) => {
    const id = req.query.id;
     var check=0;
    user.map((user) => {
        if (user.id == id)
            res.json(user);
            check=1;
    });
    if(check==0)
    res.send("user not found with this id");
}
const createUser = (req,res,next) => {
    const new_user = {
        "id": uuidv4(),
        "login":req.body.login,
        "password":req.body.password,
        "age": req.body.age,
        "isDeleted": false
    }
    user.push(new_user); 
   res.setHeader('Location', `/user/${user.id}`);
  res.status(201).send(user);
    res.send("Successfully added new User !!!!");
}
const updateUser = (req, res) => {
 const id=req.query.id;
 const userToUpdate=user.find(user=>(user.id===id)); 
 console.log(userToUpdate.login)
     if(userToUpdate){
         userToUpdate.login=req.body.login;
         userToUpdate.age=req.body.age;
         userToUpdate.password=req.body.password;
         res.send(`successfully updated id : ${id} !!`);
         console.log(user)
     }
     else{
         res.status(404).send("user not found");
     }

 
}
const deleteUser = (req, res) => {
console.log(req.query.id);
const userToDelete=user.find(user=>(user.id===req.query.id))
if (!userToDelete || userToDelete.isDeleted) {
    res.status(404).send('User is not found');
  } else {
    userToDelete.isDeleted = true;
    res.status(204).send("Successfully Deleted !!");
  }
}
router.use('/getAutoUser',getAutoUser);
router.use('/GetUser', getUser);
router.use('/CreateUser', validator, createUser);
router.use('/UpdateUser', validator, updateUser);
router.use('/DeleteUser', validator, deleteUser);
module.exports = {
    router: router,
}
