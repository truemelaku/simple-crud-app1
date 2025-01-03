const express =require('express')
const mongoose =require('mongoose')
const cors=require('cors')

const app =express()
app.use(cors())
const UserModel=require('./models/Users')// importing it from users.js
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")
// an api to display data on home page
app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})  
app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
    
}
)
// Update route (Corrected code)
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;

    // Corrected: Added new: true to return the updated document
    UserModel.findByIdAndUpdate(
        { _id: id },
        {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        },
        { new: true } // This ensures the updated document is returned
    )
    .then(user => res.json(user)) // No error handling for validation here
    .catch(err => res.json(err)); // Only catch errors
});
app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
}
)
//create api call
app.post("/CreateUser",(req,res)=>{
    UserModel.create(req.body)
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    
})


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});