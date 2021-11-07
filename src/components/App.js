import '../styles/App.scss';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
//import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from './Header';

import Home from './Home';
import Portfolio from './Portfolio';
function App() {
  return (
    <div className='page'>
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>
        <Portfolio/>
        <Contact/>
        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
