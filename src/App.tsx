import React, {useState} from 'react';
import {CssBaseline, withStyles, WithStyles} from "@material-ui/core";
import UserInfoComponent from "./UserInfo";
import LoginComponent from "./LoginComponent";

const styles = {};

export interface UserInfo {

}

const App = (props: WithStyles<typeof styles>) => {
    const {classes} = props;
    const [userInfo, setUserInfo] = useState<UserInfo | null>();

    const handleLogin = (login: string, password: string) => {
        setUserInfo("foo")
    };

    return <div>
        <CssBaseline/>
        {userInfo ? <UserInfoComponent userInfo={userInfo}/> : <LoginComponent handleLogin={handleLogin}/>}
    </div>;
};

export default withStyles(styles, {withTheme: true})(App);
