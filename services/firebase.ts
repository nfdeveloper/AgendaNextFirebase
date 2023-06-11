import firebase from "firebase";
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyD3-Tow4pcXis_XuGalJSwL7iNHiJflAt8",
  authDomain: "agendanextfirebase.firebaseapp.com",
  projectId: "agendanextfirebase",
  storageBucket: "agendanextfirebase.appspot.com",
  messagingSenderId: "933840611414",
  appId: "1:933840611414:web:978544739107942c87f3f7"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app()
}

const database = firebase.database()

export { database,firebase }

