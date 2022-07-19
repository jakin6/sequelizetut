const express =require('express')


const {sequelize,User} = require('./models')

const app=express()
app.use(express.json)
app.post('/users',async(req,res)=>{
    const {name,email,role} = req.body

    try{
        const user = await User.create({name,email,role})
        return res.json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Error creating user'}) 
    }
})

app.get('/users',async(req,res)=>{
    try{
        const users=await User.find()
        res.json(users)
    }catch(err)
    {
        return res.status(500).json({error: 'Something wromg'})
    }
})


app.listen({port:5000},async ()=>{
    console.log('Server running at http://localhost:5000');
    await sequelize.authenticate()
    console.log('Database connected');
})
//commonly used for creating users to database
// async function main(){
//     await sequelize.sync({ force:true}) 
// } 
// main()  