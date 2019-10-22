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

}

const App = (props: WithStyles<typeof styles>) => {
    const {classes} = props;
    const [userInfo, setUserInfo] = useState<UserInfo | null>();

    const handleLogin = (login: string, password: string) => {
        const formData = new FormData();
        formData.set("username", login);
        formData.set("password", password);
        axios.post(`https://fiesta.esncz.org/api/auth`, formData, {withCredentials: false})
            .then(response => {
                console.log(JSON.stringify(response, null, 2))
            }).catch(error => {
            console.log(JSON.stringify(error, null, 2))
        })
    };

    return <Container className={classes.root}>
        <CssBaseline/>
        {userInfo ? <UserInfoComponent userInfo={userInfo}/> : <LoginComponent handleLogin={handleLogin}/>}
    </Container>;
};

export default withStyles(styles, {withTheme: true})(App);
