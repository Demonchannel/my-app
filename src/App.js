import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Explore from './Pages/Explore'
import Feed from './Pages/Feed'

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path='/' element={<Layout />}>
       <Route element={<Explore />} />
       <Route path='/feed' element={<Feed />} />
       <Route path='*' element={<Explore />} />
      </Route>
=======
      <Route path='/' element={<Layout />} />
      <Route element={<Explore />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='*' element={<Explore />} />
>>>>>>> 9c104894dd344c5f852d21e27dfeef40e6bb5d3b
    </Routes>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 9c104894dd344c5f852d21e27dfeef40e6bb5d3b
