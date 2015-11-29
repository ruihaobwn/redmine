var orm = require('../model')
, Seq = orm.Seq();

module.exports = {
	model:{
		id:{type: Seq.BIGINT(11),primaryKey:true},
		is_public:{type:Seq.BOOLEAN},
		
	    name: {type:Seq.STRING},
		description:{type:Seq.TEXT},
		parent_id:{type:Seq.BIGINT(11)}
	},
	
	relations:{
		
	},
	
	options:{
		freezeTableName: true,
		tableName: 'projects',
		timestamps: true,
		createdAt:'created_on',
		updatedAt:'updated_on'
	}
}