// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here

var mongoose = require ("mongoose");
var WebsiteSchema = require("./website.schema.server")();
var WebsiteModel =  mongoose.model("Website", WebsiteSchema); //mongo plurarizes
var pageModel = require('../page/page.model.server'); // for cascade delete
var widgetModel = require("../widget/widget.model.server"); // for cascade delete

var models = require("../models.server");
var userModel = models.userModel;


WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;


function deleteWebsite(websiteId) {
  pageModel.find({_website: websiteId}).then(function (pages) {
   pages.forEach(function (page) {
    widgetModel.remove({_page: page._id}).exec();
   });
  });
  pageModel.remove({_website: websiteId}).exec();
  return WebsiteModel.remove({_id: websiteId});
}

function updateWebsite(websiteId, website){
  delete website._id;
  return WebsiteModel
    .update({_id: websiteId},{
      $set: { name : website.name,
        description : website.description
      }}
    );
}


function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({_user: userId});
}


function createWebsiteForUser(userId, website)  {
  website._id = mongoose.Types.ObjectId();
  website._user = userId;
  return WebsiteModel.create(website);
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

//refactored version
function createWebsite(website)  {
  var newWebsite = null;
  return WebsiteModel
    .create(website)
    .then(function (website) {
      newWebsite = website;
      userModel
        .findUserById(website.developerId)
        .then(function (user) {
          user.websites.push(newWebsite);
        });
    });
}

function findWebsiteForUser_new(userId) {
  return Website
    .find({developerId: userId})
    .populate('developerId', 'username')
    .exec();
}

module.exports = WebsiteModel;
