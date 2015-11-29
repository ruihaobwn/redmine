//路由：实现不同的URL函数
var jwt = require('jwt-simple');
var crypto = require('crypto');
var shaTwo = crypto.createHash('sha1');

var orm = require('../model');

exports.login = function(req,res){
	
	var User = orm.model("User");
	var username = req.body.loginName;
	var pass = req.body.passWord;
	
    console.log(username);
	console.log(pass);
	
	//shaOne.update(password);
	var d = crypto.createHash('sha1').update(pass).digest('hex');

	console.log()<<"hello";
	User.findOne({
		where:{login:username}
	}).then(function(user){
		res.charSet("utf-8");
		
		var da = crypto.createHash('sha1').update(user.salt+d).digest('hex');
		
        if(da == user.hashed_password)
		{
			console.log("ok");
			var Token = orm.model("Token");
			Token.findOne(
				{where:{user_id:user.id},
				attributes:['value']
				}).then(function(token){
					console.log(token);
					res.send(token);
					
				})
		}			
	});

	/*shaTwo.update('b2015d51fb73988c073486c007dd6769'+d);
	var da = shaTwo.digest('hex');*/
    
	
	
	
	/*User.findOne(
	{where:{login: req.body.login}
	}).then(function(user){
	    res.charSet("utf-8");
		if(user)
		{
			var token = jwt.encode({
				iss:user.id
			},'helloword'
			);
			res.json({
				token:token,
				data:user
			});
		}
	    else{
			res.json({
				type:false,
				data:"Incorrect loginname/password"
			});
		}
		
	})*/
}
exports.test = function(req,res){
	res.send(d);
}

exports.message = function(req,res){
	var User = orm.model("User");
	User.findOne()
}

/*exports.project = function(request,response){
	
	var Project = orm.model("Project");
	Project.findAll().then(function(project){
		response.charSet('utf-8');
		response.send(project);
	});
}

exports.member = function(request,response){
	
	var Members = orm.model("Members");
	Members.findAll().then(function(member){
		response.charSet('utf-8');
		response.send(member);
	});
}*/
