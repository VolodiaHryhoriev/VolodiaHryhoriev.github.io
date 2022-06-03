import {onSnapshot, collection, doc, setDoc,} from "firebase/firestore"
import db, {storage} from "../../firebase"
import {actionsLogin} from "../actionCreator/actionLogin";
import {ref, uploadBytesResumable, getDownloadURL, listAll, getStorage} from "firebase/storage"

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

export const getInfoFirebase = (dispatch) => {
    const collectionRef = collection(db, "editData");
    onSnapshot(collectionRef, (snapshot) => {
        dispatch(
            actionsLogin.setEditData(
                snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            )
        );
    });
};

export const getImageFirebase = (dispatch) => {
    const collectionRef = collection(db, "imgLink");
    onSnapshot(collectionRef, (snapshot) => {
        dispatch(
            actionsLogin.setImage(
                snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            )
        );
    });
};

export const editDataFirebase = async (id, item) => {
    const docRef = doc(db, "editData", id);
    await setDoc(docRef, item);
};


 export const setImgFirebase = async (data, img) => {
     editDataFirebase(data[0].id, {...data[0], image: img});
 };



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