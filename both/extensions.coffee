@Delay = (param) ->
	Meteor.setTimeout ->
		param()
	, 0

@wrs = (param) ->
	Meteor.setTimeout ->
		FlowRouter.withReplaceState ->
			param()
	, 0

@GetGroupsForUser = (userId, roles) ->
	array = []

	for role in roles
		newGroups = Roles.getGroupsForUser userId, role
		array = array.concat newGroups

	array

@swalYesNo = (attrs) ->
	title = i18next.t('swal.' + attrs.swal + '.title')
	text = i18next.t('swal.' + attrs.swal + '.text')
	confirm = i18next.t('swal.' + attrs.swal + '.confirm')
	cancel = i18next.t('swal.' + attrs.swal + '.cancel')

	type = attrs.type || 'warning'
	doConfirm = attrs.doConfirm || ->
	doCancel = attrs.doCancel || ->
	close = attrs.close
	close = true unless close?

	color = '#3f51b5'
	color = '#f44336' if type in ['error', 'warning']

	if attrs.textAttr2?
		text = i18next.t('swal.' + attrs.swal + '.text', attr1: attrs.textAttr1, attr2: attrs.textAttr2)
	else if attrs.textAttr1?
		text = i18next.t('swal.' + attrs.swal + '.text', attr1: attrs.textAttr1)

	swal
		title: title
		text: text
		type: type
		confirmButtonColor: color
		confirmButtonText: confirm
		cancelButtonText: cancel
		showCancelButton: true
		closeOnConfirm: close
	, (isConfirm) ->
		if isConfirm
			doConfirm()
		else
			doCancel()

@swalInput = (attrs) ->
	title = i18next.t('swal.' + attrs.swal + '.title')
	text = i18next.t('swal.' + attrs.swal + '.text')
	confirm = i18next.t('swal.' + attrs.swal + '.confirm')
	cancel = i18next.t('swal.' + attrs.swal + '.cancel')
	placeholder = ''
	inputError = ''
	closeOnSuccess = true
	defaultValue = attrs.defaultValue || ''
	checkInput = attrs.checkInput || ''
	doConfirm = attrs.doConfirm || ->

	if attrs.closeOnSuccess?
		closeOnSuccess = attrs.closeOnSuccess

	if checkInput
		placeholder = i18next.t('swal.' + attrs.swal + '.placeholder', { param: checkInput })
		inputError = i18next.t('swal.' + attrs.swal + '.inputError', { param: checkInput })
	else
		placeholder = i18next.t('swal.' + attrs.swal + '.placeholder')
		inputError = i18next.t('swal.' + attrs.swal + '.inputError')

	swal
		title: title
		text: text
		type: 'input'
		html: true
		inputValue: defaultValue
		inputPlaceholder: placeholder
		confirmButtonColor: '#3f51b5'
		confirmButtonText: confirm
		cancelButtonText: cancel
		showCancelButton: true
		closeOnConfirm: false
	, (inputValue) ->
		if inputValue == false
			false
		else if inputValue == ''
			swal.showInputError(inputError)
			false
		else if checkInput != '' && inputValue != checkInput
			swal.showInputError(inputError)
			false
		else
			swalClose() if closeOnSuccess
			doConfirm(inputValue)

@swalClose = -> swal title: '', timer: 0

@getMailTexts = (mail, language) ->
	values = {}
	values.headline = i18next.t('mail.' + mail + '.headline', '', language)
	values.hello = i18next.t('mail.' + mail + '.hello', '', language)
	values.text1 = i18next.t('mail.' + mail + '.text1', '', language)
	values.text2 = i18next.t('mail.' + mail + '.text2', '', language)
	values.changed = i18next.t('mail.' + mail + '._changed', '', language)
	values.button = i18next.t('mail.' + mail + '.button', '', language)
	values
