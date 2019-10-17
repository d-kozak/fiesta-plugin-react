import {Button, Paper, TextField, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React, {useState} from 'react';


const styles = {};

type LoginComponentProps = WithStyles<typeof styles> & {
    handleLogin: (login: string, password: string) => void
}

const LoginComponent = (props: LoginComponentProps) => {
    const {classes, handleLogin} = props;

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    return <Paper>
        <form>
            <TextField
                label="Login"
                value={login}
                onChange={e => setLogin(e.target.value)}
            />
            <TextField
                label="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button color="primary" onClick={() => handleLogin(login, password)}>Login</Button>
        </form>
    </Paper>
};


export default withStyles(styles, {withTheme: true})(LoginComponent);