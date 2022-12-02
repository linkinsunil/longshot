import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Drag from './components/Drag/Drag';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/outlines' element={<Drag />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
