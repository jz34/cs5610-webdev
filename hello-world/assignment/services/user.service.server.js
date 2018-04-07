var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");

module.exports = function (app, models) {
  var userModel = require("../model/user/user.model.server");
  var facebookConfig = {
    clientID : "1985736928120660",
    clientSecret : "08fa195be685e8fcdd78cca85db367f6",
    callbackURL : "https://cs5610-webdev-jiawei-zhang.herokuapp.com/auth/facebook/callback"
  };

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  // authentication api
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post('/api/loggedIn', loggedIn);

  // auth with Facebook
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
  }));

  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));

  // passport config
  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  // Facebook
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      // .findUserByCredentials(username, password)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
          // if(user.username === username && user.password === password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          res.sendStatus(400).send(err);
        });
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }


  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user)
      .then(function(user) {
        console.log(user);
        if(user){
          req.login(user, function(err) {
            if(err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      });
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }








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
