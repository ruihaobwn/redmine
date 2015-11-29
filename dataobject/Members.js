var orm = require('../model')
, Seq = orm.Seq();

module.exports = {
	model:{
		id:{type: Seq.BIGINT(11),primaryKey:true},
		user_id:{type:Seq.BIGINT}
		
	},
	relations:{
		
	},
	
	options:{
		freezeTableName: true,
		tableName: 'members',
		timestamps: true,
		createdAt:'created_on',
		updatedAt:false
	}
}