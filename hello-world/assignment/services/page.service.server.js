module.exports = function (app) {
  var pageModel = require("../model/page/page.model.server");

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function createPage(req, res) {
    var websiteId = req.params.websiteId;
    var page = req.body;

    pageModel
      .createPage(websiteId, page)
      .then(function (page) {
        res.json(page);
      }, function (err) {
        res.sendStatus(400).send(err);
      });
  }

  function findAllPagesForWebsite(req,res) {
    var websiteId = req.params.websiteId;

    pageModel
      .findAllPagesForWebsite(websiteId)
      .then(function (pages) {
          res.json(pages);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function updatePage(req,res) {
    var pageId = req.params.pageId;
    var page = req.body;

    pageModel.updatePage(pageId, page)
      .then(function(status){
        res.send(status);
      });

    // pageModel
    //   .updatePage(pageId, page)
    //   .then(function (stats) {
    //       console.log(stats);
    //       res.send(200);
    //     },
    //     function (err) {
    //       res.sendStatus(404).send(err);
    //     });
  }

  function findPageById(req,res ) {
    var pageId = req.params.pageId;
    pageModel
      .findPageById(pageId)
      .then(function (page) {
          res.json(page);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function deletePage(req,res) {
    var pageId = req.params.pageId;

    pageModel.deletePage(pageId)
      .then(function(status){
        res.send(status);
      });

    // pageModel
    //   .deletePage(pageId)
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
  var PAGES = [
    {pid: "321", name: "Post 1", websiteId: "456", title: "Lorem"},
    {pid: "432", name: "Post 2", websiteId: "456", title: "Lorem"},
    {pid: "543", name: "Post 3", websiteId: "456", title: "Lorem"}
  ];

  //ok
  function createPage(req, res) {
    var websiteId = req.param['websiteId'];
    var page = req.body;
    page._id = (new Date()).getTime() + "";
    page.websiteId = websiteId; //多余？
    PAGES.push(page);
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function getPagesForWebsiteId(websiteId) {
    var pages=[];
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].websiteId === websiteId) {
        pages.push(PAGES[i]);
      }
    }
    return pages;
  }

  //ok
  function findAllPagesForWebsite(req, res) {
    var websiteId= req.param['websiteId'];
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  //ok
  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    res.json(getPageById(pageId));
  }

  function getPageById(pageId) {
    for(var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].pid === pageId) {
        return PAGES[i];
      }
    }
  }

  //ok
  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var newPage = req.body;
    for(var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].pid === pageId) {
        PAGES[i].name = newPage.name;
        PAGES[i].title= newPage.title;
        PAGES[i].websiteId= newPage.websiteId;
        res.json(getPagesForWebsiteId(getPageById(pageId).websiteId));
        return;
      }
    }
    res.status(404).send("page not found!");
  }


  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    var websiteId = getPageById(pageId).websiteId;
    for(var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].pid === pageId) {
        PAGES.splice(i, 1);
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
    res.status(404).send("page not found!");
  }
};

*/
