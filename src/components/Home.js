import cv from '../pdf/mesalina-bracho-puga-cv.pdf';
const Home = () => {
  return (
    <section className='section__home'>
      <h1 className='section__home--title'>Mesalina Bracho</h1>
      <p className='section__home--paragraph'>
        Hi, I'm Mesalina Front-end Developer, highly motivated and passionate.
      </p>
      <ul className='section__home--items'>
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
          <a href='cualquiera' target='_blank' title='twitter' rel='noreferrer'>
            <i class='fab fa-twitter-square'></i>
          </a>
        </li>
        <li>
          <a href='cualquiera' target='_blank' title='github' rel='noreferrer'>
            <i class='fab fa-github-square'></i>
          </a>
        </li>
        <li>
          <a href='cualquiera' target='_blank' title='email' rel='noreferrer'>
            <i class='fas fa-envelope-square'></i>
          </a>
        </li>
        <li>
          <a href={cv} title='Descargar CV' download='Mesalina-Bracho-Puga-CV'>
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
        <i class='fas fa-arrow-circle-down'></i>
      </a>
    </section>
  );
};
export default Home;
