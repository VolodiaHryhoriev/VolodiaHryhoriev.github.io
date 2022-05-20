import CV from "../CV/CV";
import {HryhorievPostsAndCommentsAPI} from "../API/api";
import {useEffect, useState} from "react";
import {actionsLogin, getLogin} from "../actionCreator/actionLogin";
import {useDispatch, useSelector} from "react-redux";
const Admin = () => {


    // useEffect( ()=>{
    //     HryhorievPostsAndCommentsAPI.getPostsAndComents()
    //         .then((res) => res.status === 200 && dispatch(actionsLogin.setLogin(res.data)))
    //         .catch(() =>  dispatch(actionsLogin.setError("Error while getting posts and coments")))
    //         .finally(()=> console.log("finally"))
    // }, [])

    return (
        <div>

        <CV />
        </div>

    )
}

export default Admin;