var orm = require('../model');

/*exports.login = function(req,res){
	
	var User = orm.model("User");
    var data = req.body.login;
	var sess = req.session;
	console.log("hello");
	console.log(sess);
	User.findOne(
	{where:{login: data},
	attributes:['id','login','firstname','lastname']}).then(function(user){
	    res.charSet("utf-8");
		if(user)
		{
			res.send(user);
		}
	    else{
			res.send("Cannot read property 'constructor' of null");
		}
		
	})
}*/

exports.list = function(req,res)
{
	
	var Project = orm.model("Project");
	Project.findAll().then(function(project){
		res.charSet("utf-8");
		res.send(project);
	})
	
}

exports.issuesOfOne = function(req,res)
{
	var id = req.query.projectid;
	
	var Issue = orm.model("Issue");
	Issue.findAll({where:{project_id:id}}).then(function(issue){
		res.charSet("utf-8");
		res.send(issue);
	})
		
}
exports.newsOfOne = function(req,res){
	var id = req.query.projectid;

	var New = orm.model("New");
	New.findAll({where:{project_id:id}}).then(function(New){
		res.charSet("utf-8");
		res.send(New);
	})
}

exports.activityOfOne = function(req,res){
	var id = req.query.projectid;
	
}