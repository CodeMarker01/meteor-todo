// import { Notes } from "./lib/collection";

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    },
  });

  Template.hello.events({
    "click button": function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    },
  });

  Template.body.helpers({
    notes: [
      { text: "My note 1" },
      { text: "My note 2" },
      { text: "My note 3" },
      { text: "My note 4" },
    ],

    //connect mongo
    // notes() {
    //   return Notes.find();
    // },
  });

  Template.add.events({
    "submit .add-form": function () {
      event.preventDefault();
      // console.log(123);

      //get input value
      const target = event.target;
      const text = target.text.value;
      console.log(text);

      //Inseret note into collection
      // Notes.insert({
      //   text,
      //   createAt: new Date(),
      // });
      // notes.push({ text: "new note" });

      //Clear form
      target.text.value = "";

      //Close modal
      $("#addModal").modal("close");

      return false;
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
