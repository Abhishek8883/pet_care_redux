import '../src/App.css'
import { useEffect } from 'react';
import Login from './Components/Login'
import Register from './Components/Register';
import Home from './Components/Home';
import Edit from './Components/Edit'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadData } from './store/Actions/userAction'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadData())
  }, [dispatch])


  return (
    <>
      <div className='p-3' style={{ backgroundColor: "white" }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/profile/' element={<Home />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
