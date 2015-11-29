var orm = require('../model')
, Seq = orm.Seq();

module.exports = {
	model:{
		id:{type: Seq.BIGINT(11),primaryKey:true},
	    login: {type:Seq.STRING},
		hashed_password:{type:Seq.STRING(40)},
		last_login_on:{type:Seq.DATE},
		firstname:{type:Seq.STRING(30)},
		lastname:{type:Seq.STRING(30)},
		mail:{type:Seq.STRING(60)},
		salt:{type:Seq.STRING(64)}
	},
	relations:{
		
	},
	options:{
		getterMethods: {
			fullName :function(){return this.lastname+this.firstname}
			
		},
	
		freezeTableName: true,
		tableName: 'users',
		timestamps: true,
		createdAt:'created_on',
		updatedAt:'updated_on'
	}
}



