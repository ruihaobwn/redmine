var orm = require('../model')
, Seq = orm.Seq();

module.exports = {
	model:{
		id:{type: Seq.BIGINT(11),primaryKey:true},
		project_id:{type:Seq.BIGINT},
	    title:{type:Seq.STRING(60)},
		summary:{type:Seq.STRING(255)},
		description:{type:Seq.TEXT},
		author_id:{type:Seq.BIGINT(11)},
		comments_count:{type:Seq.BIGINT(11)},
	},
	relations:{
		
	},
	options:{
		
		freezeTableName: true,
		tableName: 'news',
		timestamps: true,
		createdAt:'created_on',
		updatedAt:false
	}
}
