import {Button, createStyles, Divider, Grid, Paper, Typography, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React from 'react';
import {UserInfo} from "./App";


const styles = createStyles({
    root: {
        position: 'fixed',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -25%)',
        padding: '10px'
    },
    divider: {
        margin: '10px 0px'
    }
});


type UserInfoComponentProps = WithStyles<typeof styles> & {
    userInfo: UserInfo
    logout: () => void
}

const UserInfoComponent = (props: UserInfoComponentProps) => {
    const {userInfo, logout, classes} = props;
    return <Paper className={classes.root}>
        <Typography variant="h4">User details</Typography>
        <Divider className={classes.divider}/>
        <Typography><b>FirstName:</b> {userInfo.firstname}</Typography>
        <Divider className={classes.divider}/>
        <Typography><b>LastName:</b> {userInfo.lastname}</Typography>
        <Divider className={classes.divider}/>
        <Typography><b>Email:</b> {userInfo.email}</Typography>
        <Divider className={classes.divider}/>
        <Typography style={{marginBottom: '10px'}}><b>University:</b> {userInfo.university.name}</Typography>
        <Grid container justify="flex-end">
            <Button variant="contained" color="primary" onClick={logout}>Logout</Button>
        </Grid>
    </Paper>
};


export default withStyles(styles, {withTheme: true})(UserInfoComponent);