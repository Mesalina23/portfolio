import '../styles/App.scss';
import About from './About';
//import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from './Header';

import Home from './Home';
function App() {
  return (
    <div className='page'>
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>

        <section>
          <h2>My Projects</h2>
        </section>
        <article>
          <h4>Rick & Morty App</h4>
          <p></p>
          <a href='cualquiera' title='Go to Website'>
            Have a look!
          </a>
        </article>
        <article>
          <h4>React Migrated Code</h4>
          <p></p>
          <a href='cualquiera' title='Go to Website'>
            Have a look!
          </a>
        </article>
        <article>
          <h4>Series Finder</h4>
          <p></p>
          <a href='cualquiera' title='Go to Website'>
            Have a look!
          </a>
        </article>
        <article>
          <h4>Awesome Profile Cards</h4>
          <p></p>
          <a href='cualquiera' title='Go to Website'>
            Have a look!
          </a>
        </article>
        <article>
          <h4>Anonimous Proxy</h4>
          <p></p>
          <a href='cualquiera' title='Go to Website'>
            Have a look!
          </a>
        </article>
        <article>
          <h4>About Us</h4>
          <p></p>
          <a href='cualquiera' title='Go to Website'>
            Have a look!
          </a>
        </article>
        <section>
          <h2>Contac Me</h2>
          <form className='contact__form' action='cualquiera' method='post'>
            <input
              placeholder='Name...'
              id='name'
              name='name'
              type='text'
              required
            />
            <input
              placeholder='nombre@mail.com...'
              id='email'
              name='email'
              type='email'
              required
            />
            <textarea
              placeholder='Whitte your messege...'
              id='messege'
              name='messege'
              row='45'
              cols='45'
            ></textarea>
            <input type='submit' value='send'></input>
          </form>
        </section>
      </main>
      <footer className='footer__container'>
        <small className='footer__container--copy'>mesalina&copy;2021 </small>
        <ul>
          <li>
            <a
              href='cualquiera'
              target='_blank'
              title='linkedin'
              rel='noreferrer'
            >
              <i class='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a
              href='cualquiera'
              target='_blank'
              title='twitter'
              rel='noreferrer'
            >
              <i class='fab fa-twitter-square'></i>
            </a>
          </li>
          <li>
            <a
              href='cualquiera'
              target='_blank'
              title='github'
              rel='noreferrer'
            >
              <i class='fab fa-github-square'></i>
            </a>
          </li>
          <li>
            <a href='cualquiera' target='_blank' title='email' rel='noreferrer'>
              <i class='fas fa-envelope-square'></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
