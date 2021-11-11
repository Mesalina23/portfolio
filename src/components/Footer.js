import favicon from '../images/favicon.png';
import FooterIcons from "./FooterIcons";
const Footer = (props) => {
  return (
    <footer className="footer__container">
      <small className="footer__container--copy">mesalina<img src={favicon} alt="heart" className="footer__container--img" />2021 </small>
      <ul className="footer__container--ul">
        <FooterIcons
          className="footer__container--li"
          hrefIcon={`https://www.linkedin.com/in/user`}
          titleIcon="Linkedin"
          classIcon="fab fa-linkedin-in footer__icon"
        />
        <FooterIcons
          className="footer__container--li"
          hrefIcon={`https://www.twitter.com/mebrapu`}
          titleIcon="Twitter"
          classIcon="fab fa-twitter footer__icon"
        />
        <FooterIcons
          className="footer__container--li"
          hrefIcon={`https://www.github.com/Mesalina23`}
          titleIcon="Github"
          classIcon="fab fa-github-alt footer__icon"
        />
      </ul>
    </footer>
  );
};
export default Footer;
