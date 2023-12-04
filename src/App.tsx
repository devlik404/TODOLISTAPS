import { Route, Routes } from 'react-router-dom'
import SignInSide from './layouts/Login/LoginForm'
import SignUpSide from './layouts/Register/RegisterForm'
import HomePage from './pages/Home/page'

function App() {

  return (
    <>
  <Routes>
  <Route path="/" element={<HomePage />}></Route>
  <Route path="/login" element={<SignInSide />}></Route>
  <Route path="/register" element={<SignUpSide />}></Route>
  </Routes>
    </>
  )
}

export default App
