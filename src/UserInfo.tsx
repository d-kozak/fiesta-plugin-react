import {WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React from 'react';
import {UserInfo} from "./App";


const styles = {};

type UserInfoComponentProps = WithStyles<typeof styles> & {
    userInfo: UserInfo
}

const UserInfoComponent = (props: UserInfoComponentProps) => {
    const {userInfo} = props;
    return <div>
        User info
        <pre>
        {JSON.stringify(userInfo, null, 2)}
        </pre>
    </div>
};


export default withStyles(styles, {withTheme: true})(UserInfoComponent);