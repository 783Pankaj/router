
import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './PageComponents/Home';
import Contact from './PageComponents/Contact';
import About from './PageComponents/About';
import User from './PageComponents/User';
import Wrong from './PageComponents/Wrong';
import Search from './PageComponents/Search';
import Login from './PageComponents/Login';
import Redirected from './PageComponents/Redirected';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Redirected Component ={Home} />} />
          <Route path='login' element={< Login />} />
          <Route path='about' element={< About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/user' element={<User />} />
          <Route path='/user/:fname' element={<User />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<Wrong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
