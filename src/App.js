
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './PageComponents/Home';
import Contact from './PageComponents/Contact';
import About from './PageComponents/About';
import Wrong from './PageComponents/Wrong';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} 
            >
        <Route path='about' element={< About />} />
        <Route path='contact' element={ <Contact />} />
        <Route path='*' element={<Wrong />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
