const Footer = () => {
    return ( <footer className='footer__container'>
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
    );
}
export default Footer;