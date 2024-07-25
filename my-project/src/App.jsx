
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Landing from './components/landingpage'
import Adding from './components/adding'
import Edit from './components/editing'
function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/adding' element={<Adding/>}/>
    <Route path='/editing/:id' element={<Edit/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
