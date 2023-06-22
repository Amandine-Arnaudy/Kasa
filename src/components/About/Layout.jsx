import React from 'react'

function Main2(props) {
    const children = props.children;
    return (
        <div className='about'>{...children}</div>
    )
}

export default Main2