import React from 'react'

function Main(props) {
    const children = props.children;
  return (
    <div className='layout'>{...children}</div>
  )
}

export default Main
