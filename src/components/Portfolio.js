import rick from '../images/rick&morty.png'; 
import candyflix from '../images/candyflix.png';
import migratedCode from '../images/migratedCode.png';
import awesome from '../images/awesome.png';
import anonymous from '../images/anonymous.png';
import aboutUs from '../images/aboutUs.png';
const Portfolio = () => {
  return (
    <section className="section__portfolio" id="portfolio">
      <h2 className="section__portfolio--title">My Projects</h2>
      <ul className="section__portfolio--container">
        <li>
          <h4 className="section__portfolio--subtitle">Rick & Morty App</h4>
          <img src={rick} alt="Rick and Morty Finder" className="section__portfolio--img"/>
          <p className="section__portfolio--paragraph">Character finder created with React Js.</p>
          <a href="http://beta.adalab.es/modulo-3-evaluacion-final-Mesalina23/#/" target="_blank" rel="noreferrer"title="Go to Website" className="section__portfolio--a">
           Click Me and Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">React Migrated Code</h4>
          <img src={migratedCode} alt="Cards Generater" className="section__portfolio--img"/>
          <p className="section__portfolio--paragraph">Refactored code from JavaScript to React Js. Adding Backed side.</p>
          <a href="cualquiera" target="_blank" rel="noreferrer" title="Go to Website" className="section__portfolio--a">
          Click Me and Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">Series Finder</h4>
          <img src={candyflix} alt="Series Finder" className="section__portfolio--img"/>
          <p className="section__portfolio--paragraph">Series Finder create with JavaScript.</p>
          <a href="http://beta.adalab.es/modulo-2-evaluacion-final-Mesalina23/#" target="_blank" rel="noreferrer" title="Go to Website" className="section__portfolio--a">
          Click Me and Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">Awesome Profile Cards</h4>
          <img src={awesome} alt="Cards Generater" className="section__portfolio--img"/>
          <p className="section__portfolio--paragraph">
            Responsive Web App created with JavaScript.
          </p>
          <a href="cualquiera" title="Go to Website"className="section__portfolio--a" >
          Click Me and Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">Anonimous Proxy</h4>
          <img src={anonymous} alt="Responsive Web" className="section__portfolio--img"/>
          <p className="section__portfolio--paragraph">Responsive Web created with HTML5 and CSS3. Animations and transitions are shown.</p>
          <a href="cualquiera" title="Go to Website" className="section__portfolio--a" >
          Click Me and Have a look!
          </a>
        </li>
        <li>
          <h4 className="section__portfolio--subtitle">About Us</h4>
          <img src={aboutUs} alt="About Us Web" className="section__portfolio--img"/>
          <p className="section__portfolio--paragraph">Colaborative Web created With HTML5 and CSS3.</p>
          <a href="cualquiera" title="Go to Website" className="section__portfolio--a">
          Click Me and Have a look!
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        title="Go to My Projects"
        className="section__about--anchor section__portfolio--anchor"
      >
        <i class="fas fa-arrow-circle-down fas-about "></i>
      </a>
    </section>
  );
};
export default Portfolio;
