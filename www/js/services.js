angular.module('starter.services', [])

.factory('context' , function(){
var config = {
    apiKey: "AIzaSyDjQgRtvJNZkvhBSCveyXbmdv5n7EFY6Jg",
    authDomain: "html-mil-grau.firebaseapp.com",
    databaseURL: "https://html-mil-grau.firebaseio.com",
    storageBucket: "html-mil-grau.appspot.com",
    messagingSenderId: "906905468037"
  };
  firebase.initializeApp(config);


  return {
     get: function() {
       return firebase;
       }
     }
  })   


.factory('Login', function(context) { 
 
  return { 
    login: function(email, senha) { 
      firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function() {
        callback();  
      })
         .catch(function(error) { 
           callback(error);
         });
      },
   novo: function(email, senha) { 
    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(function() {
        callback();  
      })
         .catch(function(error) { 
           callback(error);
         });
        }
     };
   })

