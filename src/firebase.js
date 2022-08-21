import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {collection, getFirestore,serverTimestamp,addDoc,orderBy,query} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

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
export const messageRef = collection(db,"messages");
export const queryVar = query(messageRef,orderBy("createdAt","asc"));

async function addMessage(user,text){
    try{
        if(text.length === 0 || text.trim(" ") === ""){
            alert("Please enter a message");
            throw Error("Messages cannot be empty");
        }

        if(text.length >= 250){
            alert("Your message is larger than 150 words!");
            throw Error("Messages cannot be larger than 150 words");
        }

        await addDoc(messageRef,{
            ID:uuidv4(),
            UID:user.uid,
            displayName:user.displayName,
            text:text,
            createdAt:serverTimestamp(),
        });         
    }catch(err){
        console.warn(err);
    }
}


export {addMessage}