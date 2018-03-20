module.exports = function(app){
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsiteForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  var WEBSITES = [
    {wid: "123", name: "Facebook", developerId: "456", description: "Lorem"},
    {wid: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
    {wid: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
    {wid: "890", name: "Go", developerId: "123", description: "Lorem"},
    {wid: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
    {wid: "678", name: "Checkers", developerId: "123", description: "Lorem"},
    {wid: "789", name: "Chess", developerId: "234", description: "Lorem"}
  ];

  //ok
  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    website.wid = (new Date()).getTime() + "";
    website.developerId = userId; //多余？
    WEBSITES.push(website);
    var websites = getWebsitesForUserId(userId);
    res.json(websites);
  }

  //ok
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
