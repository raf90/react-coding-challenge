import React, { useState, Fragment } from 'react'
import { Snackbar, SnackbarContent, Grid } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const style = {
    content: {
        backgroundColor: '#F56236',
        color: 'black'
    },
    container: {
        height: '100%'
    }
}

const CustomSnackbarContent = ({ message, onClose }) => {
    return <SnackbarContent
        style={style.content}
        message={
            <Grid container style={style.container} spacing={8}>
                <Grid item><Close onClick={onClose} /></Grid>
                <Grid item>{message}</Grid>
            </Grid>
        }
    />
}

const withSnackBar = (Component) => {
    return (props) => {
        const [isOpen, setOpen] = useState(false)
        const [message, setMessage] = useState('')

        const showAlert = (message) => {
            setMessage(message)
            setOpen(true)
        }

        const close = () => {
            setOpen(false)
        }
        return <Fragment>
            <Snackbar
                open={isOpen}
                anchorOrigin={{ vertical: 'top', horizontal: 'center', }}
                autoHideDuration={2000}
                onClose={close}>
                <CustomSnackbarContent message={message} onClose={close} />
            </Snackbar>
            <Component {...props} showAlert={showAlert}></Component>
        </Fragment>
    }
}

export default withSnackBar