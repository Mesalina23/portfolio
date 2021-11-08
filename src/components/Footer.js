const Footer = () => {
    return ( <footer className='footer__container'>
    <small className='footer__container--copy'>mesalina&copy;2021 </small>
    <ul className='footer__container--ul'>
      <li className='footer__container--li'>
        <a
          href='cualquiera'
          target='_blank'
          title='Linkedin'
          rel='noreferrer'
        >
          <i class='fab fa-linkedin'></i>
        </a>
      </li>
      <li className='footer__container--li'>
        <a
          href='cualquiera'
          target='_blank'
          title='Twitter'
          rel='noreferrer'
        >
          <i class='fab fa-twitter-square'></i>
        </a>
      </li>
      <li className='footer__container--li'>
        <a
          href='cualquiera'
          target='_blank'
          title='GitHub'
          rel='noreferrer'
        >
          <i class='fab fa-github-square'></i>
        </a>
      </li>
      <li className='footer__container--li'>
        <a href='cualquiera' target='_blank' title='Email' rel='noreferrer'>
          <i class='fas fa-envelope-square'></i>
        </a>
      </li>
    </ul>
  </footer>
    );
}
export default Footer;