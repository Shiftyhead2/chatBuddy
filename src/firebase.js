import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore,doc,setDoc,serverTimestamp} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrxaD5ym-3DMqTtDDvtxPTmA3EDh-dn_4",
    authDomain: "chatbuddy-b7ffa.firebaseapp.com",
    projectId: "chatbuddy-b7ffa",
    storageBucket: "chatbuddy-b7ffa.appspot.com",
    messagingSenderId: "538299136753",
    appId: "1:538299136753:web:9e1859291c578a116d0750"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

async function addMessage(user,text){
    try{
        await setDoc(doc(db,"messages"),{
            UID:user.uid,
            displayName:user.displayName,
            text:text,
            createdAt:serverTimestamp(),
        },{merge:true});
    }catch(err){
        console.err(err);
    }
}


export {addMessage }