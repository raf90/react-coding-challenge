import React from 'react'
import { Grid, GridList } from '@material-ui/core'
import MessageBox from './message-box';
import MESSAGE_TYPES from '../types/messages';

const MESSAGE_TYPE_NAMES = Object.entries(MESSAGE_TYPES).reduce((acc, entry) => {
    acc[entry[1]] = entry[0]
    return acc
}, {})

const style = {
    container: {
        padding: '0px 5px 0px 5px',
    },
    messages: {
        height: "60vh",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'auto'
    },
    header: {
        marginBottom: 0
    }
}

const MessageGroup = ({messages, priority, clearMessage}) => {

    const renderMessages = (messageList) => {

        return messageList.map((m) => 
            <Grid item xs={12} key={m.uuid}>
                <MessageBox 
                    {...m}
                    clearMessage = {() => clearMessage(m.uuid)}/>
            </Grid>)
    }

    return <Grid container style={style.container}>
        <Grid item xs={12}>
            <h3 style={style.header}>{MESSAGE_TYPE_NAMES[priority]} Type {priority}</h3>
            <small>{`Count ${messages.length}`}</small>
        </Grid>
        <Grid item xs={12}>
            <Grid container 
                style={style.messages}
                alignContent='flex-start'>
                {renderMessages(messages,clearMessage)}
            </Grid>
        </Grid>
    </Grid>
}

export default MessageGroup;