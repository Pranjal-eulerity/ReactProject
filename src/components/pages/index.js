import React from 'react'
import Editor from './creative/Editor'
import Button from '../Button'

const MainView = () => {
  return (
    <div style={{padding: '2rem'}}>
        <Editor/>
        <Button label="Contact" onClick={() => alert("Contact clicked")} />
    </div>
  )
}



export default MainView