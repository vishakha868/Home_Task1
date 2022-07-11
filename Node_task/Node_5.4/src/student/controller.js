const pool=require('../../data-access/database');
const queries=require('./queries');
const getStudents=(req,res)=>{
    pool.query(queries.getStudents,(error,results)=>{
    if(error)throw error;
    res.status(200).json(results.rows);
    })
};
const getStudentById=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getStudentById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}
const deleteStudentById=(req,res)=>{
  const id=parseInt(req.params.id);
  pool.query(queries.getStudentById,[id],(error,results)=>{
    const nostudent=!results.rows.length;
    if(nostudent)
    res.send("student does not exists in the database");
    pool.query(queries.deleteStudent,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).send("Successfully deleted student !!");
    })
  
  })
}
const updateStudent=(req,res)=>{
    const id=parseInt(req.params.id);
    const{name,email,age,dob}=req.body;
    pool.query(queries.getStudentById,[id],(error,results)=>{
        const nostudent=!results.rows.length;

        if(nostudent)
    res.send("student does not exists in the database");
    pool.query(queries.updateStudent,[name,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("Student updated successfully");
    })
    })

}
const addStudent=(req,res)=>{
    const{name,email,age,dob}=req.body;
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length){
            res.send("Email already exists");
        }
        pool.query(queries.addStudent,[name,email,age,dob],(error,results)=>{
          if(error)throw error;
          res.status(200).send("student created successfully");
        });
    })

}
module.exports={
    getStudents,
    getStudentById,
    addStudent,
    deleteStudentById,
    updateStudent
}