import {useEffect} from "react";
import { useHistory } from "react-router-dom";

function User(props) {
    useEffect(() => {
        window.localStorage.getItem('token') === undefined && useHistory.push('/')
    }, [])

    return (
        <>

        </>
    )
}

export default User;