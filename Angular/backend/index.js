const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql2')
const app=express();
app.use(cors());
app.use(bodyparser.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testdb',
    port:3306
});
db.connect(err=>{
    if(err){
        console.log(err,"dberr");
    }
    console.log("connected");
})
app.get('/products',(req,res)=>{

    let qr=`SELECT * FROM tutorials`;

    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,"errors");
        }
        if(result)
        {
            res.send({
                messyear:"all product data",
                data:result
            });
        }
    })
})
app.get('/products/:id',(req,res)=>{
    let prodId=req.params.id;

    let qr=`SELECT * FROM tutorials WHERE id=${prodId}`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,"error");
        }if(result)
        {
            res.send({
                message:'get single data',
                data:result
            });
        }
        else{
            res.send({
                message:'data not found'
            });
        }
    })
})
app.post('/products',(req,res)=>{
    console.log(req.body,'postdata');
    let name=req.body.name;
    let price=req.body.price;
    let year=req.body.year;
    let qr =`INSERT INTO tutorials(name,price,year) values('${name}','${price}','${year}')`;
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err); 
        }
        if(result)
        {
            res.send({
                message:'positive data'

            });
        }else{
            res.send({
                message:"error sending data"
            })
        }
    });
});
app.put('/products/:id',(req,res)=>{
    console.log(req.body,'postdata');
    let id=req.params.id;
    let name=req.body.name;
    let price=req.body.price;
    let year=req.body.year;

    let qr =`UPDATE tutorials SET name="${name}", price="${price}", year="${year}" WHERE id='${id}'`;
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err);
            
        }
        if(result)
        {
            res.send({
                message:'data updated'

            });
        }else{
            res.send({
                message:"error updating"
            })
        }
    });
});

app.delete('/products/:id',(req,res)=>{
    let id=req.params.id;
    let qr=`DELETE FROM tutorials WHERE id='${id}'`;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(
            {
                messyear:'data deleted'
            }
        )
    })
})


app.get('/student',(req,res)=>{
    let qr=`SELECT * FROM students`;

    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,"errors");
        }
        if(result)
        {
            res.send({
                messyear:"all product data ",
                data:result
            });
        }
    })
})
app.listen(3000,()=>{
    console.log("server runing");
})