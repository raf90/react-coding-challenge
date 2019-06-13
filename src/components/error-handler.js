import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core';

const style = {
    root: {
        height: '50vh',
        textAlign: 'center'
    }
}

export default class ErrorWrapper extends PureComponent {
    state = {
        error: false,
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        return this.state.error ? (
            <Grid container style={style.root} justify='center' alignItems='center'>
                <Grid item>
                    <h3>What did you do ?!</h3>
                    <h6>Things are broken. So yeah.</h6>
                    <h6>Have you tried turning it off and on again?</h6>
                    ¯\_(ツ)_/¯
                    </Grid>
            </Grid>
            ) : (
                this.props.children
            )
        }
}