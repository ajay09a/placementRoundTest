const express = require('express');
const app = express();
const port = 8080;

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server');
        return;
    }
    console.log('server is connected successfully')
})