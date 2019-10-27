import React, {useState} from 'react';
import {Container, CssBaseline, withStyles, WithStyles} from "@material-ui/core";
import UserInfoComponent from "./UserInfo";
import LoginComponent from "./LoginComponent";
import axios from "axios";

const styles = {
    root: {
        width: "100%",
        height: "100%"
    }
};

export interface UserInfo {
    firstname: string,
    lastname: string,
    gender: string,
    email: string,
    university: {
        name: string,
        sectionShort: string,
        section_long: string
    }
}


const handleLoginUsingCustomBackend = (email: string, password: string, setToken: (token: string | null) => void, setUserInfo: (userInfo: UserInfo) => void, setShowProgress: (progress: boolean) => void) => {
    setShowProgress(true);
    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);
    axios.post("https://fiesta-plugin-spring-kotlin.herokuapp.com/api/login", formData, {withCredentials: true})
        .then(response => {
            const userData = response.data;
            console.log(JSON.stringify(userData));
            setUserInfo(userData);
        })
        .catch(error => {
            console.log(JSON.stringify(error, null, 2))

        }).finally(() => {
        setShowProgress(false);
    });

};

const handleLoginDirectly = (email: string, password: string, setToken: (token: string | null) => void, setUserInfo: (userInfo: UserInfo) => void, setShowProgress: (progress: boolean) => void) => {
    setShowProgress(true);
    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);
    axios.post(`https://fiesta.esncz.org/api/auth`, formData, {withCredentials: false})
        .then(response => {
            const token = response.data["access_token"];
            setToken(token);
            axios.get("https://cors-anywhere.herokuapp.com/https://fiesta.esncz.org/api/profile", {
                headers: {
                    'X-Auth-Token': token
                }
            }).then(response => {
                setUserInfo(response.data);
            }).catch(error => {
                console.log(JSON.stringify(error, null, 2))
            }).finally(() => setShowProgress(false));

        }).catch(error => {
        console.log(JSON.stringify(error, null, 2))
    }).finally(() => setShowProgress(false))
};

const App = (props: WithStyles<typeof styles>) => {
    const {classes} = props;
    const [showProgress, setShowProgress] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo | null>();
    const [token, setToken] = useState<string | null>();


    return <Container className={classes.root}>
        <CssBaseline/>
        {userInfo ? <UserInfoComponent logout={() => setUserInfo(null)} userInfo={userInfo}/> : <LoginComponent
            showProgress={showProgress}
            handleLoginDirectly={(email, password) => handleLoginDirectly(email, password, setToken, setUserInfo, setShowProgress)}
            handleLoginUsingCustomBackend={(email, password) => handleLoginUsingCustomBackend(email, password, setToken, setUserInfo, setShowProgress)}
        />
        }
    </Container>;
};

export default withStyles(styles, {withTheme: true})(App);
