var orm = require('../model')
, Seq = orm.Seq();

module.exports = {
	model:{
		id:{type: Seq.BIGINT(11),primaryKey:true},
	    name:{type:Seq.STRING},
		description:{type:Seq.STRING},
		topic_count:{type:Seq.BIGINT(11)},

		
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