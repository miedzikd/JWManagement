import './UpdateForm.tpl.jade';
import './UpdateForm.scss';

import './TextInput.js';
import './DateInput.js';

Template.UpdateForm.helpers({
    'getBackLink': () => {
        return FlowRouter.path(FlowRouter.getRouteName().replace('update', 'details'), {
            language: FlowRouter.getParam('language'),
            projectId: FlowRouter.getParam('projectId'),
            itemId: FlowRouter.getParam('itemId')
        });
    },
    'getKeyTranslation': () => {
        return TAPi18n.__(FlowRouter.getRouteName().replace('update', 'entity.') + FlowRouter.getParam('key'));
    },
    'isText': () => {
        return Template.instance().inputType.get() == 'text';
    },
    'isDate': () => {
        return Template.instance().inputType.get() == 'date';
    },
    'isDropdown': () => {
        return Template.instance().inputType.get() == 'dropdown';
    },
    'textInputData': () => {
        const template = Template.instance();

        return {
            value: template.value.get(),
            updateEntity: (value) => {
                Meteor.call(
                    FlowRouter.getRouteName(),
                    FlowRouter.getParam('itemId'),
                    FlowRouter.getParam('key'),
                    value);
            }
        }
    },
    'dateInputData': () => {
        const template = Template.instance();

        return {
            value: template.value.get(),
            updateEntity: (value) => {
                Meteor.call(
                    FlowRouter.getRouteName(),
                    FlowRouter.getParam('itemId'),
                    FlowRouter.getParam('key'),
                    value);
            }
        }
    }
});

Template.UpdateForm.onCreated(() => {
    const template = Template.instance();
    const data = Template.currentData().data;

    template.db = data.db;
    template.isLoading = new ReactiveVar(true); // TODO: add helper for this
    template.noResult = new ReactiveVar(true); // TODO: add helper for this
    template.handle = null;
    template.itemId = '';
    template.value = new ReactiveVar('');
    template.inputType = new ReactiveVar('');
});

Template.UpdateForm.onRendered(() => {
    $('body').addClass('md-skin');
    $('body').addClass('top-navigation');
    $('body').attr('type', 'UpdateForm');

    const template = Template.instance();
    const projectId = FlowRouter.getParam('projectId');
    const key = FlowRouter.getParam('key');
    template.itemId = FlowRouter.getParam('itemId');
    template.isLoading.set(true);
    template.noResult.set(false);

    template.handle = Meteor.subscribe(FlowRouter.getRouteName().split('.')[0], template.itemId, projectId);

    template.changeObserver = template.db.find({
        _id: template.itemId
    }).observe({
        added: (newValue) => {
            template.noResult.set(false);
            template.value.set(newValue[key]);
        },
        changed: (oldValue, newValue) => {
            template.value.set(newValue[key]);
        }
    });

    Tracker.autorun((tracker) => {
        if (template.handle.ready()) {
            template.isLoading.set(false);
            tracker.stop();
        }
    });

    var attr = template.db.schemaObj[FlowRouter.getParam('key')];

    if ('allowedValues' in attr) {
        template.inputType.set('dropdown');
    } else if (attr.type == Date) {
        template.inputType.set('date');
    } else {
        template.inputType.set('text');
    }
});

Template.UpdateForm.onDestroyed(() => {
    $('body').removeClass('md-skin');
    $('body').removeClass('top-navigation');
    $('body').attr('type', '');

    var template = Template.instance();

    if (template.handle !== null) {
        template.handle.stop();
    }

    if (template.changeObserver !== null) {
        template.changeObserver.stop();
    }
});
