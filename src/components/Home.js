import cv from '../pdf/mesalina-bracho-puga-cv.pdf';
import Icons from './Icons';
const Home = () => {
  return (
    <section className='section__home' id='home'>
      <h1 className='section__home--title'>Mesalina <span className='section__home--span'>Bracho</span></h1>
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
        <li className='section__home--li'>
          <a className='section__home--a' target='_blank' rel='noreferrer' href={cv} download='Mesalina Bracho Puga CV Front-end'>Download CV</a>
        </li>
    
      </ul>
     
      
      <a
        href='#about'
        title='Go to A Little About Me'
        rel='noreferrer'
      >
        <i className='fas fa-arrow-circle-down'></i>
      </a>
    </section>
  );
};
export default Home;
