module.exports = function () {
  var mongoose = require("mongoose"); // mongoDb has no notion of schemas. this is at the application level

  var UserSchema = mongoose.Schema ({
    username : {type: String, required: true},
    password : String,
    firstName : String,
    lastName : String,
    email : String,
    phone: String,
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}],
    dateCreated : {type: Date, default : Date.now} //Date.now is the current time
  }, {collection: "assignment.user" });

  return UserSchema;
};