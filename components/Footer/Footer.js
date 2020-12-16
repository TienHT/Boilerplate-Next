import { Divider, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: '16px',
    },
    footer: {
       position:'absolute',
       bottom:0,
       left:0,
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Divider />
            <Paper className={classes.paperStyle}>
                <footer>Copyright {new Date().getFullYear()} Thương Quán </footer>
            </Paper>
        </footer>

    );
}

export default Footer;
