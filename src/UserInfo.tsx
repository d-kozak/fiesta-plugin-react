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
        Hello
        {userInfo}
    </div>
};


export default withStyles(styles, {withTheme: true})(UserInfoComponent);