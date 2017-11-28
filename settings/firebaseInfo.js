// Initialize Firebase
 
    var config = {

      apiKey: "AIzaSyAfaP8iyYQEv1k4vU3lBo_K2FaNjN6S_5E",
      authDomain: "agrarpolitik2020.firebaseapp.com",
      databaseURL: "https://agrarpolitik2020.firebaseio.com",
      projectId: "agrarpolitik2020",
      storageBucket: "agrarpolitik2020.appspot.com",
      messagingSenderId: "514903138744"

    };
    
firebase.initializeApp(config);
    
var rootRef = firebase.database().ref();