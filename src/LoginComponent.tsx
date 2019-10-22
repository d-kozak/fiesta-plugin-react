import {Button, createStyles, Grid, Paper, TextField, Theme, Typography, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React, {useState} from 'react';

const styles = (theme: Theme) => createStyles({
    root: {
        position: 'fixed',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -25%)',
        padding: '10px'
    },
    formElem: {
        margin: '10px 0px'
    }
});

type LoginComponentProps = WithStyles<typeof styles> & {
    handleLogin: (email: string, password: string) => void
}

const LoginComponent = (props: LoginComponentProps) => {
    const {classes, handleLogin} = props;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return <Paper className={classes.root}>
        <Typography variant="h4">Fiesta React Plugin</Typography>
        <form>
            <Grid container direction="column">
                <TextField
                    className={classes.formElem}
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    className={classes.formElem}
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button className={classes.formElem} type="submit" color="primary" variant="contained" onClick={(e) => {
                    e.preventDefault();
                    handleLogin(email, password)
                }}>Login</Button>
            </Grid>
        </form>
    </Paper>
};


export default withStyles(styles, {withTheme: true})(LoginComponent);