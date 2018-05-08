var quary_exec = require('./quary_exec');
const express = require('express');
const app = express();

// var sql_quary = "SELECT * FROM ncnu_info where ";

app.use(express.static('public'));

var port = process.env.PORT || config.port;
//var port = 3000; //on local testing
app.listen(port,function(){
	console.log("server start");
	//console.log("http://127.0.0.1:3000");
});

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	// res.render('index.ejs');
	// app.use(express.static('public'));

});
// app.get('/', function(req, res){
// 	res.render('index.ejs');
// });
app.get('/search',function(req,res){
	let sql_quary = "SELECT * FROM ncnu_info where ";
	// app.use(express.static('public'));
	if (req.query.faculty == "不指定"){
		req.query.faculty = "%";
	}
	if (req.query.department == "不指定"){
		req.query.department = "%";
	}
	if (req.query.credit  == "不指定"){
		req.query.credit  = "%";
	}
	if (req.query.division == "不指定"){
		req.query.division = "%";
	}
	if (req.query.location == "不指定"){
		req.query.location = "%";
	}
	user_faculty       = "'" + req.query.faculty       +"'";
	user_department    = "'" + req.query.department    +"'";
	user_course_credit = "'" + req.query.credit        +"'";
	user_division      = "'" + req.query.division      +"'";
	user_location      = "'" + req.query.location      +"'";

   	sql_quary += "faculty like "       + user_faculty          + " and " +
				 "department like "    + user_department       + " and " +
				 "division like "      + user_division         + " and " +
				 "course_credit like " + user_course_credit    + " and " +
				 "location like "      + user_location         + ";";

	console.log("sql_quary : " + sql_quary);
	quary_exec.searchDB(sql_quary,function(records){
		console.log('in searchDB');
		console.log('---------------------------');
		res.render('index.ejs',{items:records});
    });
	// app.use(express.static('views/index.ejs'));

})

// exports.port = port;




