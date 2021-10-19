import {Form, FormContainer, HomePageContainer, Input} from "../../styles/Home.styles";
import axios from "axios";
import {useHistory} from "react-router-dom";


function Home() {

    function handleSubmit(event) {
        event.preventDefault();
        let username = event.target[0].value;
        let password = event.target[1].value;
        axios.post('https://localhost:8000/api/login', {
            username: username,
            password: password
        })
            .then(function (response) {
                let token = response.data.token;
                window.localStorage.setItem("token", token);
                useHistory.push('/');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <HomePageContainer>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Input type="text" name="username" placeholder="Username"/>
                    <Input type="password" name="password" placeholder="Password"/>
                    <Input className="submit-input" type="submit" value="se connecter"/>
                </Form>
            </FormContainer>
        </HomePageContainer>
    )
}

export default Home