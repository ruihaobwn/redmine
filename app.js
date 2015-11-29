var restify = require('restify');
var url =require('url');
var app = restify.createServer();

app.use(restify.acceptParser(app.acceptable));
app.use(restify.dateParser());
app.use(restify.queryParser());
app.use(restify.bodyParser());

require('./model').setup("./dataobject","redmine","luxiao","reader",{
	host:'210.42.151.48',
	dialect: 'mysql',
	pool:{
		max:5,
		min:0,
		idle:10000
	}
});
var users = require('./route/users');
var lately = require('./route/lately');
var projects = require('./route/projects');

app.post('/redmine/login',users.login);

app.get('/redmine/projects',projects.list);

app.get('/redmine/lately/news',lately.news);

app.get('/redmine/project/issues',projects.issuesOfOne);

app.get('/redmine/project/news',projects.newsOfOne);

app.get('/redmine/project/activities',projects.activityOfOne);
//var issues = require('./route/issues');
//app.post('/redmine/login',users.login)
//app.get('/redmine/projects',index.project);
//app.get('/redmine/members',index.member),
//app.get('/redmine/projects/t',projects.test);

//app.get('/redmine/projects/:id/issues', issues.getProById);

app.listen(8000, function() {
  console.log('%s listening at %s', app.name, app.url);
});



