var sqlite3 = require('sqlite3').verbose();
var file = "src/ncnu.db";
var db = new sqlite3.Database(file);
db.all("SELECT * FROM ncnu_info", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.faculty);
            console.log(row);
        })
	});	
db.close();