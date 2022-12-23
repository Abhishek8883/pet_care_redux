import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loadData } from '../../store/Actions/userAction'
import { editData } from '../../store/Actions/userAction'

const Show = () => {


  const dispatch = useDispatch()
  
  const { users, error} = useSelector(state => state.user)

  const loggeduser = JSON.parse(localStorage.getItem("logged"))

  const filtered = users.filter((d,i) => {
    return d.username === loggeduser
  })

  const edithandler = (id) => {
    localStorage.setItem("index",JSON.stringify(id))
  }

  const deletehandler = (id) => {
    let index = users.indexOf(filtered[0])
    users[index].pets.splice(id,1)
    localStorage.setItem("users",JSON.stringify(users))
    dispatch(loadData())
  }

  if(filtered.length>0){
    if(filtered[0].pets.length>0){
    var data = filtered[0].pets.map((d, i) => {
      return <div key={i} className="card p-1 container m-2 " style={{width:"15rem"}}>
        <img src={d.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name-: {d.petname}</h5>
          <p className="card-text">Type-: {d.type}</p>
          <p className="card-text">Temperature-: {d.temperature} ॰C</p>
        </div>
          <br />
          <div className='d-flex'>
          <Link to={'/edit'}><button onClick={() => edithandler(i)} className='ml-3 btn btn-primary'>EDIT</button></Link>
          <br />
          <a><button onClick={() => deletehandler(i)} className='ml-2 btn btn-danger'>DELETE</button></a>
          </div>
          
      </div>
    
    })
  }
  else{
    data = "No pets"
  }
  }
  

  useEffect(() => {
    if (error) {
      console.log(error);
      alert("Something went wrong")
    }
  }, [error])

   
  
  

  return (
    <>
      {data}
    </>
  )
}

export default Show
