import './App.css'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import ProjectsPage from './pages/ProjectsPage';
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project/:slug' element={<ProjectDetailsPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </>
  )
}

export default App
