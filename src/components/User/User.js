import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Title, UserContainer} from "../../styles/User.styles";
import axios from "axios";

function User(props) {
    useEffect(() => {
        window.localStorage.getItem('token') === undefined && useHistory.push('/')
    }, [])

    const token = window.localStorage.getItem('token');
    const [data, setData] = useState({});
    const [isFetched, setIsFetched] = useState(false);

    if (!isFetched) {
        axios.get(`https://localhost:8000/api/users/1`, {
            headers: {Authorization: `Bearer ${token}`},
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                setIsFetched(true);
            });
    }


    return (
        <UserContainer>
            <Title>hello, {data.firstName} {data.lastName}</Title>
        </UserContainer>
    )
}

export default User;