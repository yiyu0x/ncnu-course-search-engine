const express = require('express');
const app = express();

var config = require('./config.js')[app.get('env')];
var port = config.port // production mode will return 3001

var quary_exec = require('./quary_exec');

app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.listen(port,function(){
	console.log("server start");

	if(app.get('env') == 'development'){
		console.log('This environment is for development : ');
		console.log("http://127.0.0.1:3000");
		console.log('you can use \'NODE_ENV=production \' to change');
	}else{
		console.log('This environment is for production : ');
		console.log('you can use \'NODE_ENV=developmant\' to change');
	}

});

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index.ejs');
});

app.get('/search',function(req,res){
	let sql_detected = req.query.teacher + req.query.classtime + req.query.course_id;
	if(sql_detected.match("'")||sql_detected.match('"')||sql_detected.match(';')){
		res.send('you are a hacker , we dont welcome you.');
		req.query.teacher = "%";
		req.query.classtime = "%";
		req.query.course_id = "%";
	}
	let sql_quary = "SELECT * FROM ncnu_info where ";

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
	if (!req.query.teacher){
		req.query.teacher = "%";
	}
	if (!req.query.classtime){
		req.query.classtime = "%";
	}
	if (!req.query.course_id){
		req.query.course_id = "%";
	}

	user_faculty       = "'" + req.query.faculty       +"'";
	user_department    = "'" + req.query.department    +"'";
	user_course_credit = "'" + req.query.credit        +"'";
	user_division      = "'" + req.query.division      +"'";
	user_location      = "'" + req.query.location      +"'";
	user_teacher       = "'" + req.query.teacher       +"'";
	user_classtime     = "'" + req.query.classtime     +"'";
	user_course_id     = "'" + req.query.course_id     +"'";

   	sql_quary += "faculty like "       + user_faculty          + " and " +
				 "department like "    + user_department       + " and " +
				 "division like "      + user_division         + " and " +
				 "course_credit like " + user_course_credit    + " and " +
				 "location like "      + user_location         + " and " +
				 "teacher like "       + user_teacher          + "  and " +
				 "classtime like "     + user_classtime        + " and " +
				 "course_id like "     + user_course_id        + " ; ";

	console.log("sql_quary : " + sql_quary);
	quary_exec.searchDB(sql_quary,function(records){
		console.log('in searchDB');
		console.log('---------------------------');
		res.render('index.ejs',{items:records});
    });

})
