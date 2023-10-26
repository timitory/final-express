const express =require('express');
const path = require('path')
const app = express();
//app.use(express.static('./public'));

app.use((req,res,next)=>{
    console.log('You just Hitted the server');
    //res.sendFile(path.resolve(__dirname,'./index.html'))
    const now= new Date();
    const get=now.getHours();
    const day=now.getDay();

    if(day>=1 && day<=5 && get>=7 && get<=17){
       console.log(get)
        next()
    }
    else{
        res.status(404).send('We are not available at the moment!!!!!')
    }

})

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname,'/public/index.html')
})
app.get('/about',(req,res)=>{ 
    res.sendFile(__dirname,'/public/about.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname,'/public/ourservices.html')
})



app.listen(3000,()=>{
    console.log('App running in port 3000.......')
})