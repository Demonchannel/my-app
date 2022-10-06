import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Explore from './Pages/Explore'
import Feed from './Pages/Feed'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route element={<Explore />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='*' element={<Explore />} />
    </Routes>
  )
}

export default App
