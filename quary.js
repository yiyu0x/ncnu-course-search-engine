var db_data;
var sqlite3 = require('sqlite3');  
function getDB_data(out) {
	console.log(out);
}
var db = new sqlite3.Database('src/ncnu.db',function(){
    db.all("select * from ncnu_info",function(err,res){  
        if(!err){
            // console.log(JSON.stringify(res)); 
            getDB_data(JSON.stringify(res));

            // console.log(db_data);
        }else{  
            console.log(err);
        }
    })});

// console.log(db_data);
exports.db_data = db_data;