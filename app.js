// var quary = require('./quary_exec');
var quary_exec = require('./quary_exec');
const express = require('express');
const app = express();

sql_quary = "SELECT * FROM ncnu_info where ";

app.use(express.static('public'));

app.listen(process.env.PORT || 3000,function(){
	console.log("server start");
	console.log("http://127.0.0.1:3000");
});

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	// res.render('index.ejs');
	app.use(express.static('public'));

});
// app.get('/', function(req, res){
// 	res.render('index.ejs');
// });
var first_time = true;
app.get('/search',function(req,res){
	app.use(express.static('public'));
	// console.log("GET request");
	// console.log(req.query.faculty);
	// console.log(req.query.department);
	// console.log(req.query.division);
	// console.log(req.query.course_credit);
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

	// console.log("sql_quary : " + sql_quary);
	quary_exec.searchDB(sql_quary,function(records){
			// console.log(records);
			res.render('index.ejs',{items:records});
			// console.log('x');
    });
    // res.redirect('/search');
	// app.use(express.static('views/index.ejs'));

})






