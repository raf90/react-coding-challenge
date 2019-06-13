import React from 'react'
import { Paper, ButtonBase, Grid } from '@material-ui/core'
import MESSAGE_TYPES from '../types/messages';

const styles = {
    root: {
        height: '100%',
        fontSize: 12,
    },
    buttonContainer: {
        height: '100%'
    },
    default: {
        padding: 15,
        margin: '3px 0px 3px 0px',
        height: 40,
    },
    [MESSAGE_TYPES.Error] : {
            backgroundColor: '#F56236',
    },
    [MESSAGE_TYPES.Warning] : {
            backgroundColor: '#FCE788',
    },
    [MESSAGE_TYPES.Info]: {
            backgroundColor: '#88FCA3',
    },
}

const MessageBox = ({message, priority, clearMessage}) => {
    return <Paper style={{...styles.default, ...styles[priority]}}>
        <Grid container justify='space-between' style={styles.root}>
        <Grid item>{message}</Grid>
        <Grid item style={styles.buttonContainer}>
            <Grid container style={styles.buttonContainer} alignItems='center'>
                <Grid item>
                    <ButtonBase onClick={clearMessage}>Clear</ButtonBase>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    </Paper>
}

export default MessageBox;