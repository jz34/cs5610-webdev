// this API for the database
//encapsulate all CRUD operations in this
//Only database operations happen here

var mongoose = require ("mongoose");
var WidgetSchema = require("./widget.schema.server")();
var WidgetModel =  mongoose.model("Widget", WidgetSchema); //mongo plurarizes

// // 可能要删
// var models = require("../models.server");
// var pageModel = models.pageModel;

WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.updateWidget = updateWidget;
WidgetModel.createWidget = createWidget;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.deleteWidget = deleteWidget;

WidgetModel.reorderWidgets = reorderWidgets;
WidgetModel.updatePosition = updatePosition;

// 改一改一改一改
function updatePosition (pageId, position) {
  return WidgetModel.find({_page:pageId}, function (err, widgets) {
    widgets.forEach (function (widget) {
      if(widget.position > position){
        widget.position--;
        widget.save();
      }
    })
  })
}


function reorderWidgets(pageId, startIndex, endIndex) {
  return WidgetModel.find({_page:pageId}, function (err,widgets) {
    widgets.forEach (function (widget) {
      if(startIndex < endIndex){
        if(widget.position === startIndex){
          widget.position = endIndex;
          widget.save();
        }else if (widget.position > startIndex
          && widget.position <= endIndex){
          widget.position --;
          widget.save();
        }
      } else {
        if(widget.position === startIndex){
          widget.position = endIndex;
          widget.save();
        } else if(widget.position < startIndex
          && widget.position >= endIndex){
          widget.position ++;
          widget.save();
        }
      }
    })
  })
}



function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({_page: pageId});
}

function updateWidget(widgetId, widget) {
  delete widget._id;
  return WidgetModel
    .update({_id: widgetId},{
      $set : widget
    })
}

function createWidget(pageId, widget)  {
  widget._id = mongoose.Types.ObjectId();
  widget._page = pageId;
  return WidgetModel.create(widget);
}

// // refactored??
// function createWidget(pageId, widget)  {
//   var newWidget = null;
//   // newWidget.pageId = pageId;
//   return WidgetModel
//     .create(widget)
//     .then(function (widget) {
//     newWidget = widget;
//     newWidget.pageId = pageId;
//     pageModel
//       .findWidgetByPage(newWidget.pageId)
//       .then(function (page) {
//         page.widgets.push(newWidget);
//       });
//   });
//
//   // widget._id = mongoose.Types.ObjectId();
//   // widget._page = pageId;
//   // return WidgetModel.create(widget);
// }

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function deleteWidget(widgetId) {
  return WidgetModel.remove({_id: widgetId});
}

module.exports = WidgetModel;
