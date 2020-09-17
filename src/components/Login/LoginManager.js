import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


// Initialize Firebase
export const initLoginFramework = () => {
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
}


export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email
            }
            return signedInUser;
        })
        .catch(err => {
            console.log(err.message)
        })
}

export const handleFBSignIn = () => {
    const FBProvider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(FBProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email
            }
            return signedInUser;
        })
        .catch(err => {
            console.log(err.message)
        });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    console.log('ok')
    return firebase.auth().createUserWithEmailAndPassword( email, password)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserName(name);
        return newUserInfo;
    })
    .catch(error => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
    });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    const newUserInfo = res.user;
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    return newUserInfo;
                })
                .catch(function (error) {
                    const newUserInfo = {}
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    return newUserInfo;
                });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    }).then(() => {
        console.log('Update successful')
    }).catch(err => {
        console.log(err)
    });
}