var orm = require('../model');

exports.news = function(req,res){
	var New = orm.model("New");
	New.findAll({order:'created_on ASC',limit:2}).then(function(News){
		res.charSet("utf-8");
		res.send(News);
	})
}