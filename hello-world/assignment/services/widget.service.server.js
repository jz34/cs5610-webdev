// list页面不显示widgets？？？

module.exports = function(app) {
  var widgetModel = require("../model/widget/widget.model.server");

  var multer = require('multer'); // npm install multer --save
  var upload = multer({dest: __dirname + '/../../src/assets/uploads'});

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);


  app.post("/api/upload", upload.single('myFile'), uploadImage);

  // reorder
  app.put("/api/page/:pageId/widget", reorderWidgets);


  function uploadImage(req, res) {
    // var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    if(myFile == null) {
      res.redirect("https://cs5610-webdev-jiawei-zhang.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      // res.redirect("http://localhost:4200/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      return;
    }


    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;


    var widget = { url: "/uploads/"+filename};

    if (widgetId === '') {
      const newWidget = {
        _id: '',
        widgetType: '',
        pageId: '',
        size: '',
        text: '',
        width: '',
        formatted: false
      };

      widgetModel.findAllWidgetsForPage(pageId).then(function(widgets){
        newWidget.position = widgets.length;
        newWidget.widgetType = 'IMAGE';
        newWidget.pageId = pageId;
        newWidget.url = '/uploads/' + filename;
        newWidget._id = widgetId;
        newWidget.width = width;
        widgetModel.createWidget(pageId, newWidget).then(function(widget) {
          this.widgetId = width._id;
        });
      });


    } else {
      widgetModel.findWidgetById(widgetId).then(function (widget) {
        widget.url = '/uploads/' + filename;
        widgetModel.updateWidget(widgetId, widget)
          .then(function(status){
            res.send(status);
          });
      });
    }

    res.redirect("https://cs5610-webdev-jiawei-zhang.herokuapp.com/user/website/"+ websiteId+ "/page/"+pageId+"/widget/"+widgetId);
    // res.redirect("http://localhost:4200/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
  }


  function reorderWidgets(req,res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    widgetModel
      .reorderWidgets(pageId, startIndex, endIndex)
      .then(function (stats) {
        res.send(200);

      }, function (err) {
        res.sendStatus(400).send(err);
      });
  }


  function createWidget (req,res) {
    var pageId = req.params.pageId;
    var widget = req.body;

    console.log("request received to create a widget ", pageId, widget);

    widgetModel.findAllWidgetsForPage(pageId).then(function (widgets) {
      widget.position = widgets.length;
      widgetModel
        .createWidget(pageId, widget)
        .then(function (widget) {
          res.json(widget);

        }, function (err) {
          res.sendStatus(400).send(err);
        });
    })


  }


  function findAllWidgetsForPage (req,res) {
    var pageId = req.params.pageId;
    console.log(pageId);

    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function (widgets) {
          res.json(widgets);

        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function findWidgetById (req,res) {
    var widgetId  = req.params.widgetId;

    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
          res.json(widget);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function updateWidget (req,res) {

    var widgetId  = req.params.widgetId;
    var widget = req.body;

    widgetModel.updateWidget(widgetId, widget)
      .then(function(status){
        res.send(status);
      });
  }

  function deleteWidget (req,res) {
    var widgetId  = req.params.widgetId;
    var pageId = req.query.pageId;

    widgetModel.findWidgetById(widgetId).then(function (widget) {
      widgetModel.updatePosition(pageId, widget.position);

    });

    widgetModel.deleteWidget(widgetId)
      .then(function(status) {
      res.send(status)
    });
  }

};





/*
  var WIDGETS = [
    { wgId: "123", widgetType: "HEADER",  pageId: "321", size: 2, text: "GIZMODO", width: "", url: "", formatted: false},
    { wgId: "234", widgetType: "HEADER",  pageId: "321", size: 4, text: "Lorem ipsum", width: "", url: "", formatted: false},
    { wgId: "345", widgetType: "IMAGE",  pageId: "321", size: 2, text: "text777", width: "100%", url: 'https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F19eb57c6a70d5d354b68c5cb1431aeed%2F205858361%2Fbd-spotmini.jpg&client=cbc79c14efcebee57402&signature=1e160c7bcf4c0c526c4dbed864ce5db9ceb7fad6', formatted: false},
    { wgId: "456", widgetType: "HTML",   pageId: "321", size: 2, text: "<p>Lorem ipsum</p>", width: "", url: "", formatted: false},
    { wgId: "567", widgetType: "HEADER", pageId: "321", size: 4, text: "Lorem ipsum", width: "", url: "", formatted: false},
    { wgId: "678", widgetType: "YOUTUBE", pageId: "321", size: 2, text: "text888", width: "100%", url: "https://www.youtube.com/embed/YBpdL9hSac4", formatted: false},
    { wgId: "789", widgetType: "HTML", pageId: "321", size: 4, text: "<p>Lorem ipsum</p>", width: "", url: "", formatted: false}
  ];

  //ok
  function createWidget(req, res) {
    var pageId = req.param['pageId'];
    var widget = req.body;
    widget._id = (new Date()).getTime() + "";
    widget.pageId = pageId;
    WIDGETS.push(widget);
    var widgets = getWidgetsForPageId(pageId);
    res.json(widgets);
  }

  function getWidgetsForPageId(pageId) {
    var widgets=[];
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].pageId === pageId) {
        widgets.push(WIDGETS[i]);
      }
    }
    return widgets;
  }

  //ok
  function findAllWidgetsForPage(req, res) {
    var pageId= req.param['pageId'];
    var widgets = getWidgetsForPageId(pageId);
    res.json(widgets);
  }

  //ok
  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    res.json(getWidgetById(widgetId));
  }

  function getWidgetById(widgetId) {
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].wgId === widgetId) {
        return WIDGETS[i];
      }
    }
  }

  //ok
  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var newWidget = req.body;
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].wgId === widgetId) {
        WIDGETS[i].widgetType = newWidget.widgetType;
        WIDGETS[i].pageId = newWidget.pageId;
        WIDGETS[i].size = newWidget.size;
        WIDGETS[i].text = newWidget.text;
        WIDGETS[i].width = newWidget.width;
        WIDGETS[i].url = newWidget.url;
        WIDGETS[i].formatted = newWidget.formatted;
        res.json(getWidgetsForPageId(getWidgetById(widgetId).pageId));
        return;
      }
    }
    res.status(404).send("widget not found!");
  }


  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var pageId = getWidgetById(widgetId).pageId;
    for(var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].wgId === widgetId) {
        WIDGETS.splice(i, 1);
        var pages = getWidgetsForPageId(pageId);
        res.json(pages);
        return;
      }
    }
    res.status(404).send("widget not found!");
  }


  function reorderWidgets(req, res) {
    var pageId = req.params['pageId'];
    var initialIndex = parseInt(req.query["initial"]);
    var finalIndex = parseInt(req.query["final"]);

    var widgetsIndexList = [];// all widgets with this pageId

    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i].pageId === pageId) {
        widgetsIndexList.push(i);
      }
    }

    var temp =  WIDGETS[widgetsIndexList[initialIndex]];
    if (finalIndex > initialIndex){
      for(var i = initialIndex; i < finalIndex; i++) {
        WIDGETS[widgetsIndexList[i]] = WIDGETS[widgetsIndexList[i + 1]];
      }
      WIDGETS[widgetsIndexList[finalIndex]] = temp;
    } else {
      for(var i = initialIndex; i > finalIndex; i--) {
        WIDGETS[widgetsIndexList[i]] = WIDGETS[widgetsIndexList[i - 1]];
      }
      WIDGETS[widgetsIndexList[finalIndex]] = temp;
    }
    res.send(200);
  }

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId        = req.body.userId;
    var websiteId     = req.body.websiteId;
    var pageId        = req.body.pageId;


    if(myFile == null) {
      //res.redirect("https://cs5610-webdev-jiawei-zhang.herokuapp.com/user/" + userId + "website/"+websiteId+"/page/"+pageId+"/widget");
      // res.redirect("http://localhost:4200/user/" + userId + "/website/"+websiteId+"/page/"+pageId+"/widget");
      res.redirect("/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget");
      return;
    }


    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;


    //var newWidget = getWidgetById(widgetId);
    if (!widgetId) {
      widgetId = (new Date()).getTime() + "";
      var newWidget = {
        wgId: widgetId, widgetType: "IMAGE", pageId: pageId, size: size, text: "", width: "",
        url: '/uploads/' + filename, formatted: false
      };
      WIDGETS.push(newWidget);
    } else {
      var findWidget = WIDGETS.find(function (widget) {
        return widget._id === widgetId;
      });
      findWidget.url = "/uploads/" + filename;
    }

    var callbackUrl   = "/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget";
    // var callbackUrl   =  "http://localhost:4200/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget";
    //var callbackUrl   =  "https://cs5610-webdev-jiawei-zhang.herokuapp.com/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget";
    res.redirect(callbackUrl);
  }

};

*/
