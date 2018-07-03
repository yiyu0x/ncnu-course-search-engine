var sqlite3 = require('sqlite3').verbose();
var file = "build_file/src/ncnu.db";

function searchDB(sql,callback){
	var records = [];
	var db = new sqlite3.Database(file,sqlite3.OPEN_READONLY);
	db.all(sql,function(err, rows){
        rows.forEach(function(row){
        	var rows = [];
            rows.push(   row.department,
            			 row.course_cname ,
            			 row.teacher      ,
            			 row.division     ,
            			 row.location     ,
            			 row.classtime    , 
            			 row.course_credit,
            			 row.course_id);
			records.push(rows);
        })
        callback(records);
	});	
	db.close();
	console.log('db closed!');
}

exports.searchDB = searchDB;