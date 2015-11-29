var orm = require('../model')
, Seq = orm.Seq();

module.exports = {
	model:{
		id:{type: Seq.BIGINT(11),primaryKey:true},
		user_id:{type:Seq.BIGINT(11)},
	    action: {type:Seq.STRING(30)},
		value:{type:Seq.STRING(40)},
	},
	
	relations:{
		
	},
	
	options:{
		freezeTableName: true,
		tableName: 'tokens',
		timestamps: true,
		createdAt:'created_on',
	}
}