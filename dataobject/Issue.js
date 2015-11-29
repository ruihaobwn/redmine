var orm = require('../model')
, Seq = orm.Seq();

module.exports = {
	model:{
		id:{type: Seq.BIGINT(11),primaryKey:true},
		subject:{type:Seq.STRING},
		description:{type:Seq.TEXT},
		done_ratio:{type:Seq.BIGINT(11)},
		tracker_id:{type:Seq.BIGINT(11)},
		project_id:{type:Seq.BIGINT(11)},
		status_id:{type:Seq.BIGINT(11)},
		priority_id:{type:Seq.BIGINT(11)},
		author_id:{type:Seq.BIGINT(11)},
		assigned_to_id:{type:Seq.BIGINT(11)},
		due_date:{type:Seq.DATE},
		start_date:{type:Seq.DATE},
		estimated_hours:{type:Seq.FLOAT}
		
	},
	relations:{
		
	},
	
	options:{
		freezeTableName: true,
		tableName: 'issues',
		timestamps: true,
		createdAt:'created_on',
		updatedAt:'updated_on'
	}
}