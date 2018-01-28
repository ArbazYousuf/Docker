const express = require('express');
const app = express();
 

app.get("/user",(req,res)=>{
   res.send('<h1>User</h1>')
})
app.get("",(req,res)=>{
    res.send("<h1> Hello From abcd </h1> ")
})
app.listen(3000,(error)=>{
    if(error){console.log(error);
        return
    }
}
)
console.log('server in running')