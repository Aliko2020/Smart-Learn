import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLogin from './Pages/Login/UserLogin'
import UserSign from './Pages/Login/SignUp'
import StudentPage from './Pages/StudentPage'
import EditProfile from './Pages/EditProfile'


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLogin />} />
        <Route path='/signup' element={<UserSign/>} />
        <Route path='/studentpage' element={<StudentPage/>} />
        <Route path='/editprofile' element={<EditProfile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
