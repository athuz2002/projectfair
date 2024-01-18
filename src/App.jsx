import { Routes ,Route, Navigate} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
