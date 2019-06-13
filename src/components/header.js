import React from 'react'

const style =
{
    div: {
        borderBottom: 'solid grey 2px',
        height: 45,
    },
    header: {
        marginLeft: 45,
    }
}

const Header = () => {
    return <div style={style.div}><h2 style={style.header}>
        Help.com Coding Challenge
    </h2>
    </div>
}

export default Header;