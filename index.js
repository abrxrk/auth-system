import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import UserRoutes from './routes/UserAuthRoute.js';
import cors from 'cors' ;
import { mongodb } from './utils/db.js';

const PORT = process.env.PORT
const app = express()




app.get('/' , (req, res)=>{
    res.send("API is wokring properly, Good to go 👍")
})
app.use(express.json());
app.use(cors( {
    origin: 'http://localhost:3000' ,
    credentials: true , 
    methods: ["GET" , "PUT" , "POST" , "DELETE" , "OPTIONS"] , 
    allowedHeaders: ["Content-Type", "Authorization"]
}
));
app.use('/api/v1' , UserRoutes)
// db call in my express backend server 
mongodb()
app.get('/' ,(req,res)=>{
    res.send("Hello World")
})





app.listen(PORT , ()=>{
    console.log("server is listening on port " + PORT);
    
})