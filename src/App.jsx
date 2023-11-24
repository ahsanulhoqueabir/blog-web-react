import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faSort,faBookmark } from '@fortawesome/free-solid-svg-icons'
import Header from './component/header/Header'
import MainBody from './component/mainBody/MainBody'
import Blog from './component/blog/Blog'




function App() {

  return (
    <div className="">
      <Header></Header>
      <MainBody></MainBody>
      <h1 className='text-5xl font-bold py-10 text-center'>Blog Section</h1>
      <hr className='border-1 border-black'/>
      <Blog></Blog>
    </div>
  )
}



export default App
