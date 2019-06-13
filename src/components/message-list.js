import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Api from '../api'
import { Grid } from '@material-ui/core';
import MESSAGE_TYPES from '../types/messages';
import { v4 } from 'uuid';
import withSnackBar from './with-snackbar';
import Header from './header';
import MessageTable from './message-table';

const style = {
  buttonGroup: {
    paddingTop: 8,
    paddingBottom: 80,
  },
  button: {
    backgroundColor: 'rgb(0, 226, 196)',
    minWidth: 100,
  }
}
class MessageList extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  clearMessage = (uuid) => {
    const messages = this.state.messages.slice().filter((m) => m.uuid !== uuid)
    this.setState({ messages })
  }

  clearAllMessages = () => {
    this.setState({ messages: [] })
  }

  messageCallback(message) {
    const { messages } = this.state
    if (message.priority === MESSAGE_TYPES.Error) {
      this.props.showAlert(message.message)
    }
    this.setState({
      messages: [
        //since we don't have an id to rely on, lets create our own for now.
        { ...message, uuid: v4() },
        ...messages.slice(),
      ],
    })
  }

  renderButton() {
    const isApiStarted = this.api.isStarted()
    return (
      <Button
        style={style.button}
        variant="contained"
        onClick={() => {
          if (isApiStarted) {
            this.api.stop()
          } else {
            this.api.start()
          }
          this.forceUpdate()
        }}
      >
        {isApiStarted ? 'Stop' : 'Start'}
      </Button>
    )
  }

  ButtonGroup = () => {
    return <Grid container justify='center' spacing={8} style={style.buttonGroup}>
      <Grid item>
        {this.renderButton()}
      </Grid>
      <Grid item>
        <Button
          style={style.button}
          variant="contained"
          onClick={this.clearAllMessages}>
          Clear
  </Button>
      </Grid>
    </Grid>
  }

  render() {
    const { messages } = this.state
    return (
      <div>
        <Header />
        <Grid container justify='center'>
          <Grid item xs={12}>
            {this.ButtonGroup()}
          </Grid>
          <Grid item xs={12}>
            <MessageTable messages={messages} clearMessage={this.clearMessage}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withSnackBar(MessageList)
