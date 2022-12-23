import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Edit = () => {

  const navigate = useNavigate()

  var showData = {
    petname:'',
    type:'',
    src:'',
    temperature:''
  }
  var ind = 0

  const { users, error} = useSelector(state => state.user)

  const index = JSON.parse(localStorage.getItem("index"))
  const logged = JSON.parse(localStorage.getItem("logged"))
  
  const filtered = users.filter((d,i) => {
    return d.username === logged
  })
  if(filtered.length>0){
     showData = filtered[0].pets[index]
     ind = users.indexOf(filtered[0])
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const pushData = {
      petname:e.target.petname.value,
    type:e.target.type.value,
    src:e.target.src.value,
    temperature:e.target.temperature.value
    }

    if(pushData.petname !== '' && pushData.type !== '' && pushData.src !== '' && pushData.temperature !== ''){
      users[ind].pets.splice(index,1)
      users[ind].pets.splice(index-1,0,pushData)
      localStorage.setItem("users",JSON.stringify(users))
      navigate('/profile')
    }
    else{
      alert("Fields can not be empty")
    }

  }


  return (
    <>
    <div className='container'>
      <center><h2>Edit Information</h2></center>
      <br />
      <br />
    <form className='d-flex flex-column align-items-center justify-content-center ' onSubmit={submitHandler}>
      <input style={{width:"20rem"}} type="text" placeholder='Petname' name='petname' defaultValue={showData.petname} />
      <input style={{width:"20rem"}} type="text" placeholder='Type' name='type' defaultValue={showData.type} />
      <input style={{width:"20rem"}} name="src" placeholder='Image src' type="text" defaultValue={showData.src}></input>
      <input style={{width:"20rem"}} type="text" name='temperature' defaultValue={showData.temperature} placeholder="temperature"/>
      <input style={{width:"20rem"}} type="submit" />
    </form>
    </div>
    </>
  )
}

export default Edit