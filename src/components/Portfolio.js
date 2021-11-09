import rick from '../images/rick&morty.png'; 
import candyflix from '../images/candyflix.png';
const Portfolio = () => {
  return (
    <section className="section__portfolio" id="portfolio">
      <h2 className="section__portfolio--title">My Projects</h2>
      <ul className="section__portfolio--container">
        <li>
          <h4 className="section__portfolio--subtitle">Rick & Morty App</h4>
          <div className="img__container">
          <img src={rick} alt="Rick and Morty Finder" className="section__portfolio--img"/>
          </div>
          <p className="section__portfolio--paragraph">Character finder created with React Js.</p>
          <a href="http://beta.adalab.es/modulo-3-evaluacion-final-Mesalina23/#/" target="_blank" rel="noreferrer"title="Go to Website" className="section__portfolio--a">
            Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">React Migrated Code</h4>
          <img src={candyflix} alt="Series Finder" className="section__portfolio--img"/>
          <p className="section__portfolio--paragraph">asdasdfa</p>
          <a href="http://beta.adalab.es/modulo-2-evaluacion-final-Mesalina23/" target="_blank" rel="noreferrer" title="Go to Website" className="section__portfolio--a">
            Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">Series Finder</h4>
          <p className="section__portfolio--paragraph">asdasdfa</p>
          <a href="cualquiera" title="Go to Website" className="section__portfolio--a">
            Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">Awesome Profile Cards</h4>
          <p className="section__portfolio--paragraph">asdasdfa</p>
          <a href="cualquiera" title="Go to Website"className="section__portfolio--a" >
            Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">Anonimous Proxy</h4>
          <p className="section__portfolio--paragraph">asdasdfa</p>
          <a href="cualquiera" title="Go to Website" className="section__portfolio--a" >
            Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">About Us</h4>
          <p className="section__portfolio--paragraph">asdasdfa</p>
          <a href="cualquiera" title="Go to Website" className="section__portfolio--a">
            Have a look!
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        title="Go to My Projects"
        className="section__about--anchor"
      >
        <i class="fas fa-arrow-circle-down fas-about"></i>
      </a>
    </section>
  );
};
export default Portfolio;
