import './App.css'
import ProjectPage from './pages/ProjectPage'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project/:slug' element={<ProjectPage/>}/>
    </Routes>
      
    </>
  )
}

export default App
