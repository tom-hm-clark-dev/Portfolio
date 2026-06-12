import './App.css'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import ProjectsPage from './pages/ProjectsPage';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project/:slug' element={<ProjectDetailsPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
    </Routes>
      
    </>
  )
}

export default App
