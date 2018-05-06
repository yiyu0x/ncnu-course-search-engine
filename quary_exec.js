var sqlite3 = require('sqlite3').verbose();
var file = "src/ncnu.db";

// outcome_list = 'hi';
// searchDB('SELECT * FROM ncnu_info;',function(records){
// 	return records;
// });


function searchDB(sql,callback){
	var records = [];
	var db = new sqlite3.Database(file,sqlite3.OPEN_READONLY);
	db.all(sql,function(err, rows){
        rows.forEach(function(row){
            records.push(row.course_cname + 
            			 row.classtime    + 
            			 row.location     +
            			 row.teacher      +
            			 row.division     +
            			 row.course_credit);
        })
        callback(records);
	});	
	db.close();
}

exports.searchDB = searchDB;