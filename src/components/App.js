import '../styles/App.scss';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import personalImg from '../images/avatar.png';
function App() {
  return (
    <div className='App'>
      <header class='header'>
        <ul class='header__contact'>
          <li>
            <a
              class='header__contact--phone'
              href='<%= phone %>'
              target='_blank'
              title='Call'
              rel='noreferrer'
            >
              <i class='fas fa-phone-alt'></i> +34 691 270 156
            </a>
          </li>
          <li>
            <a
              class='header__contact--email'
              href='mailto: <%= email %>'
              target='_blank'
              title='Email'
              rel='noreferrer'
            >
              <i class='fas fa-envelope'></i> mebrapu23@gmail.com
            </a>
          </li>
        </ul>
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
          <button>Descargar CV</button>
        </nav>
      </header>
      <main>
        <section class='section__home'>
          <h1>Mesalina Bracho</h1>
          <p>
            Hi, I'm Mesalina Front-end Developer, highly motivated and
            passionate.
          </p>
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
              <a
                href='cualquiera'
                target='_blank'
                title='email'
                rel='noreferrer'
              >
                <i class='fas fa-envelope-square'></i>
              </a>
            </li>
          </ul>
          <a
            href='cualquiera'
            title='Go to A Little About Me'
            rel='noreferrer'
            target='_blank'
          >
            <i class='fas fa-arrow-circle-down'></i>
          </a>
        </section>
        <section>
          <h2>A Little About Me</h2>

          <img alt='imagen personal' src={personalImg}></img>
          <article>
            <h4>Skills</h4>
            <p>
              Hello World!!! Being a <strong>curious</strong>,{' '}
              <strong>creative</strong> person and always ready to face new
              challenges has brought me here.After a wonderful trip with #Adalab
              I have redirected my professional career to the world of
              programming becoming a <strong>Front-end Developer</strong>.
            </p>
            <p>
              I consider myself a <strong>hard-working</strong> and{' '}
              <strong>decisive</strong> person, with a high capacity to adapt to
              any work environment. My high <strong>empathy</strong>, good
              character and love for continuous learning are my main virtues.
            </p>
            <p>Always ready for a good cup of coffee!!</p>
          </article>
          <article>
            <h4>Tech Skills</h4>
            <p>
              Through the adalab bootcamp under the <strong>Scrum</strong> and{' '}
              <strong>Agile</strong> philosophy of work I have learned the use
              of the following technologies: HTML5, CSS3, SASS, Gulp, Git,
              GitHub, JavaScript, React, NodeJS, Express JS, SQLite, Postman,
              Heroku and Zeplin.
            </p>
          </article>
          <a
            href='cualquiera'
            title='Go to My Projects'
            rel='noreferrer'
            target='_blank'
          >
            <i class='fas fa-arrow-circle-down'></i>
          </a>
        </section>
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
          <form class='contact__form' action='cualquiera' method='post'>
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
