import  express  from "express";
import bodyParser from 'body-parser';

export const app= express();


app.get("/api/natal",(req,res)=>{
    let date=new Date();
    console.log(req)
    res.send({
         "natal":`12/25`===`${date.getMonth()}/${date.getDay()}`
    })
})

 