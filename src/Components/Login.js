import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {loadData} from '../store/Actions/userAction'

const Login = () => {
    const [print, setprint] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const changeHandler = (e) => {
        const data = JSON.parse(localStorage.getItem("users")) || [];
        const match = data.filter((d,i) => {
            return d.username === e.target.value
        })
        if(match.length>0){
            setprint("username found continue with login")
        }
        else{
            setprint("user not found")
        }
    }

    const SubmitHandler = (e) => {
        e.preventDefault()

        const localdata = JSON.parse(localStorage.getItem("users"))
        const loginData = {
            username:e.target.username.value,
            password:e.target.password.value,   
        }

        const filtered = localdata.filter((d,i) => {
            return d.username === loginData.username
        })
        if(filtered.length>0){
            if(filtered[0].username === loginData.username && filtered[0].password === loginData.password){
                localStorage.setItem("logged",JSON.stringify(loginData.username))
                dispatch(loadData())
                navigate('/profile')
            }
            else{
                alert(" Incorrect Password")
            }
        }
        else{
            alert("Incorrect username or password")
        }
    }



    return (
        <>
        <div>
            <div  className=" mt-5 wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src="https://media.istockphoto.com/photos/we-herd-you-were-looking-for-some-magnificent-cattle-picture-id1303666715?b=1&k=20&m=1303666715&s=170667a&w=0&h=mOQcfUp6wdVwwVtoigfMQZHLGv4RWUzm_5PKvZc58go=" id="icon" alt="User Icon" />
                    </div>


                    <form onSubmit={SubmitHandler}>
                        <input autoComplete='off' onChange={changeHandler} type="text" id="login" className="fadeIn second" name="username" placeholder="Username" />
                        <p className='text-danger'>{print}</p>
                        <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>


                    <div id="formFooter">
                        <Link className="underlineHover" to={"/Register"}>Register</Link>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Login