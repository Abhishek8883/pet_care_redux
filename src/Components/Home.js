import React from 'react'
import Navigation from './Home/Navigation'
import Show  from './Home/Show'
import Addpet from './Home/Addpet'
import {Routes,Route} from 'react-router-dom'
import './Home/show.css'


function Home() {
  return (
    <>
    <div className='container' style={{minHeight:"120vh",backgroundColor:"white"}}>
    <Navigation />
    <Addpet />
    <br></br>
    <center><h2>Your Pets</h2></center>
    <br />
    <div className='d-flex'>
    <Show />
    </div>
    </div>
    </>
  )
}

export default Home