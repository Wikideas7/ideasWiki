const express = require("express");

const app = express();

app.get( "/", ( req : any , res : any ) =>{
   res.status(200).json({
      ok : "server corriendo"
   })
})

app.listen(3001, console.log("server run on port: ", 3001));