import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import { registerUser } from '../store/Actions/userAction'

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()

    const userData = {
      username:e.target.username.value,
      email:e.target.email.value,
      password:e.target.password.value,
      pets:[]
    }

    const localdata = JSON.parse(localStorage.getItem("users")) || [];
    if(localdata !== []){
      var filtered = localdata.filter((d,i) => {
        return d.username === userData.username
      })
    }
    if(filtered.length>0){
      alert("Username alerady exist")
    }
    else{
      if(userData.username !== '' && userData.email !== '' && userData.password !== ''){
      dispatch(registerUser(userData))
      alert("User Successfully registered ! Please Login")
      navigate('/')
      }
      else{
        alert("fields can not be empty")
      }
    }

  }

  return (
    <>
    <form onSubmit={submitHandler} className="form-horizontal container pt-5" >
  <fieldset>
    <div id="legend">
      <legend className="">Register</legend>
    </div>
    <div className="control-group">

      <label className="control-label"  htmlFor="username">Username</label>
      <div className="controls">
        <input type="text" id="username" name="username" placeholder="" className="input-xlarge" />
        <p className="help-block">Username can contain any letters or numbers, without spaces</p>
      </div>
    </div>
 
    <div className="control-group">
      <label className="control-label" htmlFor="email">E-mail</label>
      <div className="controls">
        <input type="text" id="email" name="email" placeholder="" className="input-xlarge" />
        <p className="help-block">Please provide your E-mail</p>
      </div>
    </div>
 
    <div className="control-group">
      <label className="control-label" htmlFor="password">Password</label>
      <div className="controls">
        <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
        <p className="help-block">Password should be at least 4 characters</p>
      </div>
    </div>
 
    <div className="control-group">
      <div className="controls">
        <button className="btn btn-success">Register</button>
        <br></br>
      </div>
      <br></br>
      <h3>Already a User ?</h3>
        <Link to={"/"}><button className="btn btn-primary">Login</button></Link>
    </div>
  </fieldset>
</form>
    </>
  )
}

export default Register