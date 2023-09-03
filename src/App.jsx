import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"
import Blog from "./components/Blogs/Blog"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/work" exact element={<Work />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path="/contact-me" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
