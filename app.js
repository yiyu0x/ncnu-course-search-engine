const express = require('express');
const app = express();

var config = require('./config.js')[app.get('env')];
var port = config.port // production mode will return 3001
var quary_exec = require('./quary_exec');


//record logs
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(morgan('short', {stream: accessLogStream}));
//


app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.listen(port,function(){
	console.log("server start");

	if(app.get('env') == 'development'){
		console.log('This environment is for development : ');
		console.log("http://127.0.0.1:3000");
		console.log('you can use \'NODE_ENV=production\' to change');
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

	var data = [req.query.faculty,
				req.query.department,
				req.query.division,
				req.query.credit,
				req.query.location,
				req.query.teacher,
				req.query.classtime,
				req.query.course_id];

	quary_exec.searchDB(data,function(records){
		console.log('sql');
		console.log(data);
		console.log('---------------------------');
		res.render('index.ejs',{items:records});
    });

})
