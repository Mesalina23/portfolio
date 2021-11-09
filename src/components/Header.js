import Icons from "./Icons";


const Header = (props) => {
  return (
    <header className={'header '+  (props.menuOpen && 'active')}>
      <div className='header__details '>
        <a href='#home' title='Home'>
          Home
        </a>
        <ul className='header__details--icons' >
          <Icons
          hrefIcon={`mailto:mebrapu23@gmail.com`}
          titleIcon='Email'
          classIcon='far fa-envelope'
        /> <span className='header__details--span'  >mebrapu23@gmail.com</span>
         <Icons
          hrefIcon={`tel:+691270156`}
          titleIcon='Phone'
          classIcon='fas fa-phone'
        />
        <span className='header__details--span'>(+34)691270156</span>
         
        </ul>
      </div>

      <nav className='header__menu' onClick={()=>props.setmenuOpen(!props.menuOpen)}>
        <span className='header__menu--line1 header__menu--span'></span>
        <span className='header__menu--line2 header__menu--span'></span>
        <span className='header__menu--line3 header__menu--span'></span>
      </nav>
      
    </header>
  );
};
export default Header;
