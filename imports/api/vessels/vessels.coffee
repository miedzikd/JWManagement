import SimpleSchema from 'simpl-schema'
import { Mongo } from 'meteor/mongo'

import { Methods } from './methods.coffee'
import { Helpers } from './helpers.coffee'

export Vessels = new Mongo.Collection 'vessels'

Vessels.deny
	insert: -> true
	update: -> true
	remove: -> true

Vessels.schema = new SimpleSchema

	_id:
		type: String
		regEx: SimpleSchema.RegEx.Id
		autoValue: -> Random.id()
	createdAt:
		type: Date
		autoValue: -> new Date
	createdBy:
		type: String
		autoValue: -> Meteor.userId()
	localName:
		type: String
	flag:
		type: String
		optional: true
	type:
		type: String
		optional: true
	callsign:
		type: String
		optional: true
	eni:
		type: String
		optional: true
	imo:
		type: String
		optional: true
	mmsi:
		type: String
		optional: true
	lastVisit:
		type: Date
		autoValue: -> new Date
	contactPoint:
		type: String
	nextVisit:
		type: Date
		optional: true
	comments:
		type: String
		optional: true

Vessels.attachSchema = Vessels.schema

Vessels.methods = Methods
Vessels.helpers = Helpers
