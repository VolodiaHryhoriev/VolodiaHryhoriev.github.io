import {onSnapshot, collection} from "firebase/firestore"
import db from "../../firebase"
import {actionsLogin} from "../actionCreator/actionLogin";

export const getLoginFirebase = (dispatch) => {
    const collectionRef = collection(db, "login")
    onSnapshot(collectionRef, (snapshot)=>{
        dispatch(actionsLogin.setLogin(
            snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))));
    })
}