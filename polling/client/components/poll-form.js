Template.pollForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
      trip_miles: event.target.trip_miles.value,
      gallons_filled: event.target.gallons_filled.value,
      price_per_gallon: event.target.price_per_gallon,
      miles_per_gallon: Math.round( (event.target.trip_miles.value / event.target.gallons_filled.value) * 10) / 10,
      createdAt: new Date(),            // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username  // username of logged in user
    };    
     
    // create the new poll
    Polls.insert(newPoll);
  }

});