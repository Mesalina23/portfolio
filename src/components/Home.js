import cv from '../pdf/mesalina-bracho-puga-cv.pdf';
import Icons from './Icons';
const Home = () => {
  return (
    <section className='section__home'>
      <h1 className='section__home--title'>Mesalina Bracho</h1>
      <p className='section__home--paragraph'>
        Hi, I'm Mesalina Front-end Developer, highly motivated and passionate.
      </p>
      <ul className='section__home--items'>
        <Icons
          hrefIcon={`https://www.linkedin.com/in/user`}
          titleIcon='Linkedin'
          classIcon='fab fa-linkedin-in'
        />
        <Icons
          hrefIcon={`https://www.twitter.com/mebrapu`}
          titleIcon='Twitter'
          classIcon='fab fa-twitter'
        />
        <Icons
          hrefIcon={`https://www.github.com/Mesalina23`}
          titleIcon='Github'
          classIcon='fab fa-github-alt'
        />
        <Icons
          hrefIcon={`mailto:mebrapu23@gmail.com`}
          titleIcon='Email'
          classIcon='far fa-envelope'
        />
        <li>
          <a
            href={cv}
            title='Download CV'
            download='Mesalina-Bracho-Puga-CV'
            className='section__home--download'
          >
            Descargar Cv
          </a>
        </li>
      </ul>
      <a
        href='cualquiera'
        title='Go to A Little About Me'
        rel='noreferrer'
        target='_blank'
      >
        <i className='fas fa-arrow-circle-down'></i>
      </a>
    </section>
  );
};
export default Home;
