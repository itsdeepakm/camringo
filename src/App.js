import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Home/Nav';
import Services from './Components/Services/Services';
import Plans from './Components/Plans/Plans';
import Book from './Components/Book/Book';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Support from './Components/Support/Support';
import Jobs from './Components/Jobs/Jobs';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/plans' element={<Plans />}></Route>
        <Route path='/book' element={<Book />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/jobs' element={<Jobs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
