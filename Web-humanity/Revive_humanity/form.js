var firebaseConfig = {
  apiKey: "AIzaSyBqPzpDlrA_GMV9SCmEwbsclGvT904bdnE",
  authDomain: "humanity-c4466.firebaseapp.com",
  databaseURL: "https://humanity-c4466.firebaseio.com",
  projectId: "humanity-c4466",
  storageBucket: "humanity-c4466.appspot.com",
  messagingSenderId: "1460990045",
  appId: "1:1460990045:web:2de28cf5e96666ce115db4"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


function login(){

  var email = document.getElementById('username');
  var email = document.getElementById('password');

  const promise = auth.createUserWithUsernameAndPassword(username.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Login");
}