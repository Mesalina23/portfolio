import cv from '../pdf/mesalina-bracho-puga-cv.pdf';
import Icons from './Icons';
const Home = () => {
  return (
    <section className='section__home' id='home'>
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
    
      </ul>
      <form className='section__home--form'>
        <label className='section__home--label'for='cv'>Check my CV</label>
        <select className='section__home--select' name='cv' id='cv'>
          <option className='section__home--option0' value='select'>
           Language
          </option>
          <option className='section__home--option1' value='spanish'>
           Spanish
          </option>
           <option className='section__home--option2' value='english'>
          English</option>
        </select>
      </form>
      
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
