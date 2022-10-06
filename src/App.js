import './App.css';
import Explore from './Pages/Explore';
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import Feed from './Pages/Feed';

function App() {
  return (
    <Routes>
      <Route  path='/' element={<Layout/>} >
      <Route index element={<Explore/>}/>
      <Route path='/feed' element={<Feed/>} />
      <Route path='*' element={<Explore/>} />
      </Route>
    </Routes>
  );
}

export default App;
