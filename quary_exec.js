var sqlite3 = require('sqlite3').verbose();
var file = "build_file/src/ncnu.db";

function searchDB(data,callback){
	var records = [];
	var db = new sqlite3.Database(file,sqlite3.OPEN_READONLY);
	db.serialize(function() {
		var stmt = db.prepare(`SELECT * FROM ncnu_info where faculty like ? and
									department like ? and
									division like ? and
									course_credit like ? and
									location like ? and
									teacher like ? and
									classtime like ? and
									course_id like ?;`);
		stmt.each(data,function(err, row) {
			var rows = [];
			console.log(row.course_cname,row.course_id);
            rows.push(  row.department,
            			row.course_cname ,
            			row.teacher      ,
            			row.division     ,
            			row.location     ,
            			row.classtime    , 
            			row.course_credit,
            			row.course_id);
			records.push(rows);
		},function(){
			callback(records);
		})


	},function(err, count) {
		console.log('2');
		stmt.finalize();
	});
};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// db.all(sql,function(err, rows){
    //     rows.forEach(function(row){
    //     	var rows = [];
    //         rows.push(  row.department,
    //         			row.course_cname ,
    //         			row.teacher      ,
    //         			row.division     ,
    //         			row.location     ,
    //         			row.classtime    , 
    //         			row.course_credit,
    //         			row.course_id);
	// 		records.push(rows);
    //     })
    //     callback(records);
	// });	
	// db.close();
	// console.log('db closed!');

exports.searchDB = searchDB;