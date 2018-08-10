import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import moment from 'moment';

import Helpers from '/imports/api/routes/Helpers';
import RouteManager from '/imports/api/managers/RouteManager';

RouteManager.registerTranslatedPage('dashboard', {
  details: ''
});
RouteManager.registerTranslatedPage('project', {
  search: 'projects'
});
RouteManager.registerTranslatedPage('user', {
  search: 'users',
  details: 'user/:userId'
});
RouteManager.registerTranslatedPage('language', {
  details: 'language',
  update: 'language/:key'
});
RouteManager.registerEntity('project', {
  details: ''
});
RouteManager.registerEntity('publisher.password', {
  insert: 'publishers/:userId/password',
  forwarding: {
    route: 'publishers/:userId/password/forwarding',
    name: 'publisher.password.details',
    link: 'publisher.details'
  }
});
RouteManager.registerEntity('publisher.profile.availability', {
  insert: 'publishers/:userId/availability/:key/new',
  details: 'publishers/:userId/availability/:key'
});
RouteManager.registerEntity('publisher.profile.vacation', {
  insert: 'publishers/:userId/vacation/new',
  forwarding: {
    route: 'publishers/:userId/vacation/forwarding',
    name: 'publisher.profile.vacation.details',
    link: 'publisher.details'
  }
});
RouteManager.registerEntity('publisher', {
  search: 'publishers',
  insert: 'publishers/new',
  details: 'publishers/:userId',
  update: 'publishers/:userId/:key'
});
RouteManager.registerEntity('vessel', {
  search: 'vessels',
  insert: 'vessels/new',
  details: 'vessels/:vesselId',
  update: 'vessels/:vesselId/:key'
});
RouteManager.registerEntity('vessel.visit', {
  insert: 'vessels/:vesselId/visits/new',
  details: 'vessels/:vesselId/visits/:visitId',
  update: 'vessels/:vesselId/visits/:visitId/:key'
});
RouteManager.registerEntity('vessel.visit.language', {
  insert: 'vessels/:vesselId/visits/:visitId/languages/new',
  forwarding: {
    route: 'vessels/:vesselId/visits/:visitId/language/forwarding',
    name: 'vessel.visit.language.details',
    link: 'vessel.visit.details'
  }
});
RouteManager.registerEntity('note', {
  search: 'notes',
  insert: 'notes/new',
  details: 'notes/:noteId',
  update: 'notes/:noteId/:key'
});

FlowRouter.route('/:language/:projectId/calendar/:year?/:month?/:day?', {
  name: 'calendar',
  triggersEnter: [ Helpers.checkLanguage ],
  action: () => {
    Helpers.doIfLoggedIn(() => {
      Session.set('parent', 'project.details');
      BlazeLayout.render('mainLayout', { content: 'calendar' });
    });
  }
});

FlowRouter.route('/:language/:projectId/kb', {
  name: 'wiki',
  triggersEnter: [ Helpers.checkLanguage ],
  action: () => {
    Helpers.doIfLoggedIn(() => {
      Session.set('parent', 'project.details');
      BlazeLayout.render('mainLayout', { content: 'wiki' });
    });
  }
});

FlowRouter.route('/:language/:projectId/shifts', {
  name: 'shifts',
  triggersEnter: [ Helpers.checkLanguage ],
  action: () => {
    Helpers.doIfLoggedIn(() => {
      let parent = Session.get('parent');

      if (parent != 'settings') {
        Session.set('parent', 'project.details');
        Session.set('target', null);
      }

      BlazeLayout.render('mainLayout', { content: 'shifts' });
    });
  }
});

FlowRouter.route('/:language/goToShift/:shiftId', {
  name: 'shift.details',
  action: () => {
    Helpers.doIfLoggedIn(() => {
      Meteor.call('shift.getShiftOverview', {
        shiftId: FlowRouter.getParam('shiftId')
      }, (e, shift) => {
        const momentObj = moment(shift.date, 'YYYYDDD');
        const year = parseInt(momentObj.format('YYYY'));
        const month = parseInt(momentObj.format('MM'));
        const day = parseInt(momentObj.format('DD'));

        FlowRouter.go('calendar', {
          language: FlowRouter.getParam('language'),
          projectId: shift.projectId,
          year: year,
          month: month,
          day: day
        }, {
          showShift: FlowRouter.getParam('shiftId')
        });
      });
    });
  }
});

FlowRouter.route('/:language/:projectId/settings', {
  name: 'settings',
  triggersEnter: [ Helpers.checkLanguage ],
  action: () => {
    Helpers.doIfLoggedIn(() => {
      Session.set('parent', 'project.details');
      BlazeLayout.render('mainLayout', { content: 'settings' });
    });
  }
});

FlowRouter.route('/:language/:projectId/reports', {
  name: 'reports',
  triggersEnter: [ Helpers.checkLanguage ],
  action: () => {
    Helpers.doIfLoggedIn(() => {
      Session.set('parent', 'project.details');
      BlazeLayout.render('mainLayout', { content: 'reports' });
    });
  }
});

FlowRouter.route('/:language/:projectId/store', {
  name: 'store',
  triggersEnter: [ Helpers.checkLanguage ],
  action: () => {
    Helpers.doIfLoggedIn(() => {
      Session.set('parent', 'project.details');
      BlazeLayout.render('mainLayout', { content: 'store' });
    });
  }
});