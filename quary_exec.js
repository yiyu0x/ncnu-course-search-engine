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
}

exports.searchDB = searchDB;