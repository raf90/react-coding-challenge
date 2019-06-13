const MESSAGE_TYPES = {
    Error: 1,
    Warning: 2,
    Info: 3,
}

export const byMessagePriority = (type) => {
    return (message) => !message.hidden && message.priority === type
}

export default MESSAGE_TYPES