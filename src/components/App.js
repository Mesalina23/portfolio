import { useState } from 'react';
import '../styles/App.scss';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
//import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from './Header';

import Home from './Home';
import Menu from './Menu';
import Portfolio from './Portfolio';
function App() {
  const [menuOpen, setmenuOpen]=useState(false);
 
  return (
    <div className='page' >
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen}>
      </Header>
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <main className='main__container' >
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
