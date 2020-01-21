import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logoImg from "../img/ballonstone.jpg"
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import Axios from "axios";
import { useAuth } from "../context/auth";

function Signup(props){
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const { setAuthTokens } = useAuth();
    const referer = props.location.state || '/';

    function postSignup(){
        // if password !== passwordCheck error passwords don't match else Axios
        Axios.post("https://www.somePlace.com/auth/signup", {
            userName,
            password
        }).then(result => {
            if(result.status === 200){
                setAuthTokens(result.data);
            }else{
                setIsError(true)
            }
        }).catch(e => {
            setIsError(true)
        })
    }
    if (isLoggedIn) {
        return <Redirect to={referer} />
    }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input
                    type="username" 
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="User Name" 
                />
                <Input
                    type="email" 
                    value={userEmail}
                    onChange={e => {
                        setUserEmail(e.target.value);
                    }}
                    placeholder="User Email" 
                />
                <Input 
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password" 
                />
                <Input 
                    type="password"
                    value={passwordCheck}
                    onChange={e => {
                        setPasswordCheck(e.target.value)
                    }}
                    placeholder="password again" 
                />
                <Button onClick={postSignup}>Sign Up</Button>
            </Form>
            <Link to="/login">Already have an account?</Link>
                    {isError && <Error></Error>}
        </Card>
    );
}

export default Signup;