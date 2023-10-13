var express = require('express')
var dotenv = require('dotenv')
dotenv.config();
//import express from 'express';
var app: Application = express();
var port =2023
import { Application } from 'express';
// const db = require('./datasetqueries')
import { createUser, deleteUser, getUserById, getUsers, partialupdateUser, updateUser } from './datasetqueries';
app.use(express.json())


//Getting all the data
app.get('/dataset1', getUsers)

//Getting data by id
app.get('/dataset1/get/:id',getUserById)

//Inserting data
app.post('/dataset1/create',createUser)

//Updated data
app.put('/dataset1/update/:id',updateUser)

//partially updating data
app.patch('/dataset1/partupdate/:id',partialupdateUser)

//Deleting data
app.delete('/dataset1/delete/:id',deleteUser)

app.all('*',(req:any,res:any)=>{
  res.status(404).json({
    "status_code": 404,
    "error_code": "Page Not Found"
  })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  export default app
