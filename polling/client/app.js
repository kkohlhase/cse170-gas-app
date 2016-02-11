Template.body.helpers({
  
  polls: function() {
    return Polls.find({username: Meteor.user().username});
  }
  
});


Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});