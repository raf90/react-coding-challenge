import React from 'react'
import { Grid } from '@material-ui/core'
import MESSAGE_TYPES, { byMessagePriority } from '../types/messages'
import MessageGroup from './message-group';

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

const MessageTable = ({ messages, clearMessage }) => {

    const errors = messages.filter(byMessagePriority(MESSAGE_TYPES.Error)),
    warnings = messages.filter(byMessagePriority(MESSAGE_TYPES.Warning)),
    infos = messages.filter(byMessagePriority(MESSAGE_TYPES.Info))

    return <Grid container justify='center' spacing={8} style={style.buttonGroup}>
        <Grid item xs={8}>
            <Grid container>
                <Grid item xs={4}>
                    <MessageGroup
                        clearMessage={clearMessage}
                        messages={errors}
                        priority={MESSAGE_TYPES.Error} />
                </Grid>
                <Grid item xs={4}>
                    <MessageGroup
                        clearMessage={clearMessage}
                        messages={warnings}
                        priority={MESSAGE_TYPES.Warning} />
                </Grid>
                <Grid item xs={4}>
                    <MessageGroup
                        clearMessage={clearMessage}
                        messages={infos}
                        priority={MESSAGE_TYPES.Info} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default MessageTable