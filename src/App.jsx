
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header1 from './pages/Header'

function App() {
 

  return (
    <>
    <Routes>
      <Route path={"/"} element={<Header1/>}/>
       </Routes> 
    </>
  )
}

export default App
