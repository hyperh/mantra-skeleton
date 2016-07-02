export default {
  login({ Meteor, LocalState, FlowRouter }, email, password) {
    Meteor.loginWithPassword(email, password, err => {
      if (err) alert(err);
    });
  },

  logout({ Meteor }) {
    Meteor.logout(err => {
      if (err) alert(err);
    });
  },
};
