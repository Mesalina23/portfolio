import '../styles/App.scss';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <header>
        <nav class='header__nav'>
          <a href='cualquiera' title='Home'>
            Home
          </a>
          <a href='cualquiera' title='About'>
            About
          </a>
          <a href='cualquiera' title='Portfolio'>
            Porfolio
          </a>
          <a href='cualquiera' title='Contact Me'>
            Contact Me
          </a>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
