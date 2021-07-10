import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBS-eWkfwAcWVqmRux01um3bWOkcy7y4dA",
    authDomain: "stock-broker-app-47d9d.firebaseapp.com",
    projectId: "stock-broker-app-47d9d",
    storageBucket: "stock-broker-app-47d9d.appspot.com",
    messagingSenderId: "455571209603",
    appId: "1:455571209603:web:9da6cc7ae0f6ab766a8ab6"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;