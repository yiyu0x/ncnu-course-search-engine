var sqlite3 = require('sqlite3');  
var db = new sqlite3.Database('src/ncnu.db',function(){
    db.all("select * from ncnu_info",function(err,res){  
        if(!err){
            // console.log(JSON.stringify(res)); 
            var output = console.log(res);
            console.log("hi");
        }
        else  
            console.log(err);
    })});
 
export.output = output;