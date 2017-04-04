import SimpleSchema from 'simpl-schema'

import { Projects } from '/imports/api/projects/projects.coffee'
import { Shifts } from '/imports/api/shifts/shifts.coffee'
import { Validators } from '/imports/api/util/validators.coffee'

export TagMethods =

	changeNameAnywhere: new ValidatedMethod
		name: 'Projects.methods.tags.changeNameAnywhere'
		validate: (args) ->
			new SimpleSchema
				projectId:
					type: String
					custom: ->
						Validators.project.validId
						Validators.project.isShiftAdmin
				tagId:
					type: String
					custom: -> Validators.tag.validId
				tagName: type: String
			.validator() args
		run: (args) -> if Meteor.isServer
			projectId = args.projectId
			tagId = args.tagId
			tagName = args.tagName

			Projects.methods.main.updateArray.call
				projectId: projectId,
				array: 'tags'
				arrayId: tagId
				field: 'name'
				value: tagName

			Shifts.update
				projectId: projectId
				tagId: tagId
			,
				$set: tag: tagName
			,
				multi: true