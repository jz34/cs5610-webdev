// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here

var mongoose = require ("mongoose");
var UserSchema = require("./user.schema.server")();
var UserModel =  mongoose.model("User", UserSchema); //mongo plurarizes

// for cascade delete
var pageModel = require('../page/page.model.server');
var websiteModel = require('../website/website.model.server');
var widgetModel = require('../widget/widget.model.server');


UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;


function createUser(user){
  user._id = mongoose.Types.ObjectId();
  console.log(user);
  return  UserModel.create(user);
}

function findUserById(userId) {
  return UserModel.findById({_id: userId});
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function updateUser(userId, user) {
  //ignore _id
  delete user._id;
  return UserModel
    .update({_id: userId},{
      $set: {firstName : user.firstName,
        lastName : user.lastName,
        email: user.email}}
    );
}


function deleteUser(userId) {
  websiteModel.find({_user:userId}).then(function(websites) {
    websites.forEach(function (website) {
      pageModel.find({_website: website._id}).then(function(pages) {
        pages.forEach(function (page) {
          widgetModel.remove({_page: page._id}).exec();
        });
      });
    });
  });

  websiteModel.find({_user:userId}).then(function(websites) {
    websites.forEach(function (website) {
      pageModel.remove({_website: website._id}).exec();
    });
  });

  websiteModel.remove({_user: userId}).exec();
  return UserModel.remove({_id: userId});
}

//findOne returns only One (first one for multiple results)
function findUserByCredentials(username, password) {
  console.log("from MONGO");
  return UserModel.findOne({username: username, password: password});

}

module.exports = UserModel;

