import {onSnapshot, collection} from "firebase/firestore"
import db, {storage} from "../../firebase"
import {actionsLogin} from "../actionCreator/actionLogin";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"

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

export const uploadFileToFB = (imgFile, setImg) => {
    const storageRef = ref(storage, `/images/${imgFile.name}`);
    const uploadData = uploadBytesResumable(storageRef, imgFile);
    uploadData.on(
        "state_changed",
        () => {
            getDownloadURL(uploadData.snapshot.ref).then((url) => {
                setImg(url);
            });
        }
    );
}