import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faSort,faBookmark } from '@fortawesome/free-solid-svg-icons'
import Header from './component/header/Header'
import MainBody from './component/mainBody/MainBody'




function App() {

  return (
    <div className="">
      <Header></Header>
      <MainBody></MainBody>
    </div>
  )
}



export default App
