import React,{useEffect} from 'react'
import { addPet } from '../../store/Actions/userAction'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadData } from '../../store/Actions/userAction'


const Addpet = () => {

    const dispatch = useDispatch()
  

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()

        const petData = {
            petname : e.target.petname.value,
            type : e.target.type.value,
            src : e.target.src.value,
            temperature : e.target.temperature.value,
        }

        if(petData.username !== '' && petData.type !== '' && petData.src !== '' && petData.temperature !== ''){
        dispatch(addPet(petData))
        
        }
        else{
          alert("fields can not be empty ")
        }
    }

  return (
    <>
    <center><h3>Add Pet</h3></center>
    <br />
    <form onSubmit={submitHandler}>
        <input style={{width:"20rem",marginLeft:"150px"}} type="text" placeholder='Pet Name'name='petname' />
        <input style={{width:"20rem"}} type="text" placeholder='Type' name='type' />
        <input style={{width:"20rem"}} type="text" name="src" placeholder='Image src' />
        <input style={{width:"20rem",marginLeft:"480px"}} type="text" placeholder='Daily Temp' 
         name="temperature"  />
         <br />
         <input type="Submit" style={{marginLeft:"535px"}} />
    </form>
    
    </>
  )
}

export default Addpet