// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var bcrypt = require("bcrypt-nodejs");

module.exports = function (app, models) {
  var userModel = require("../model/user/user.model.server");

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  function findUserByCredentials (username, password, req, res){
    userModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          console.log(user);
          if (user) {
            res.json(user);
          }
          else {
            res.send('0');
          }
        },
        function(err) {
          res.sendStatus(400).send(err);
        }
      );
  }

  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          console.log(user._id);
          res.json(user);
        },
        function (error) {
          res.statusCode(400).send(error);
        }
      )
  }

  function deleteUser(req, res) {
    var userId = req.params.userId;

    userModel
      .deleteUser(userId)
      //responds with some stats
      .then(function (stats) {

          res.send(200);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
  }

  function updateUser(req, res) {
    var userId = req.params.userId;
    var user = req.body;

    console.log('server side', userId, user);

    userModel.updateUser(userId, user)
      .then(function(status){
        res.send(status);
      });

    // userModel
    //   .updateUser(userId, user)
    //   .then(function (stats) {
    //
    //       res.send(200);
    //     },
    //     function (error) {
    //       res.statusCode(404).send(error);
    //     });
  }

  function findUserById(req, res) {
    var id = req.params.userId;

    userModel
      .findUserById(id)
      .then(function (user) {
          res.send(user);
        },
        function (error) {
          res.statusCode(404).send(error);
        });
  }

  function findUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    if (username && password) {
      findUserByCredentials(username, password, req, res);
    } else if (username) {
      findUserByUsername(username, res);
    } else {
      res.send(users);
    }
  }

  function findUserByUsername(username, res) {
    userModel
      .findUserByUsername(username)
      .then(function (user) {
          res.json(user);
        },
        function (err) {
          res.statusCode(404).send(err);
        });
  }
};




// archive
/*
module.exports = function (app) {
  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);


  var users = [
    {uid: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland", email: "alice@qq.com"},
    {uid: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: "bob@qq.com"},
    {uid: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: "charly@qq.com"},
    {uid: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: "jannunzi@qq.com"}
  ];

  function createUser(req, res) {
    var newUser = req.body;
    newUser.uid = (new Date()).getTime() + "";
    users.push(newUser);
    res.json(newUser);
  }

  function findUser(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];

    var user = null;

    if (username && password){
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    }
    res.json(user);
  }

  function findUserById(req, res){
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user.uid === userId;
    });
    res.json(user);
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for(var i = 0; i < users.length; i++) {
      if (users[i].uid === userId) {
        users[i].username = user.username;
        users[i].password = user.password;
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        users[i].email = user.email;
        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("user not found!");
  }

  function deleteUser(req, res){
    var userId = req.params['userId'];
    for (var i = 0; i < users.length; i++) {
      if (users[i].uid === userId) {
        users.splice(i,1);
        res.status(200).send("user deleted");
        return;
      }
    }
    res.status(404).send("user not found!");
  }
 };
*/
