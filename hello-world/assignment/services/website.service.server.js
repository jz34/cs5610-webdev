module.exports = function(app) {
  var websiteModel = require("../model/website/website.model.server");

  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsiteForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  function createWebsite(req,res) {
    var userId = req.params.userId;
    var website = req.body;

    console.log("request received to create a website ", userId, website);

    websiteModel
      .createWebsiteForUser(userId, website)
      .then (function (website) {
          res.json(website);
        },
        function (err) {
          res.sendStatus(400).send(err);
        });
  }


  function findAllWebsiteForUser(req,res) {
    var userId = req.params.userId;
    console.log(userId);

    websiteModel
      .findAllWebsitesForUser(userId)
      .then(function (websites) {
          res.json(websites);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params.websiteId;

    websiteModel
      .findWebsiteById(websiteId)
      .then(function (website) {
          res.json(website);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function updateWebsite(req,res) {
    var websiteId = req.params.websiteId;
    var website  = req.body;

    websiteModel.updateWebsite(websiteId, website)
      .then(function(status){
        res.send(status);
    });

    // websiteModel
    //   .updateWebsite(websiteId, website)
    //   .then (function (stats) {
    //       console.log(stats);
    //       res.send(200);
    //     },
    //     function (err) {
    //       res.sendStatus(404).send(err);
    //     });
  }

  function deleteWebsite(req,res) {
    var websiteId = req.params.websiteId;

    websiteModel.deleteWebsite(websiteId)
      .then(function(status){
        res.send(status);
      });

    // websiteModel
    //   .deleteWebsite(websiteId)
    //   .then (function (stats) {
    //       console.log(stats);
    //       res.send(200);
    //     },
    //     function (err) {
    //       res.sendStatus(404).send(err);
    //     });
  }
};


/*
  // var WEBSITES = [
  //   {wid: "123", name: "Facebook", developerId: "456", description: "Lorem"},
  //   {wid: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
  //   {wid: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
  //   {wid: "890", name: "Go", developerId: "123", description: "Lorem"},
  //   {wid: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
  //   {wid: "678", name: "Checkers", developerId: "123", description: "Lorem"},
  //   {wid: "789", name: "Chess", developerId: "234", description: "Lorem"}
  // ];

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    website._id = (new Date()).getTime() + "";
    website.developerId = userId; //多余？
    WEBSITES.push(website);
    var websites = getWebsitesForUserId(userId);
    res.json(websites);
  }


  function findAllWebsiteForUser(req, res) {
    var userId = req.params['userId'];
    var websites= getWebsitesForUserId(userId);
    res.json(websites);
  }

  function getWebsitesForUserId(userId) {
    var websites=[];

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  //ok
  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    res.json(getWebsiteById(websiteId));
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].wid === websiteId) {
        return WEBSITES[i];
      }
    }
  }

  //ok???
  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;

    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].wid === websiteId) {
        WEBSITES[i].name = newWebSite.name;
        WEBSITES[i].developerId = newWebSite.developerId;
        WEBSITES[i].description = newWebSite.description;
        res.json(getWebsitesForUserId(getWebsiteById(websiteId).developerId));
        return;
      }
    }
    res.status(404).send("website not found!");
  }

  //ok???
  function deleteWebsite(req, res){
    var websiteId = req.params['websiteId'];
    var userId = getWebsiteById(websiteId).developerId;
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].wid === websiteId) {
        WEBSITES.splice(i, 1);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }
    res.status(404).send("website not found!");
  }
};

*/
