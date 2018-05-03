const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000,function(){
	console.log("server start");
	console.log("http://127.0.0.1:3000");
});

app.get('/search',function(req,res){
   console.log("GET request");
   console.log(req.query.department);
})
