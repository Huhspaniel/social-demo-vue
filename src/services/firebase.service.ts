import firebase from 'firebase/app';

export function logOut() {
    return firebase.auth().signOut();
}
