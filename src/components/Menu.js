const Menu=(props)=>{
    return(
        <ul className={'menu__container '+  (props.menuOpen && 'active')}>
            <li className='menu__container--li' onClick={()=>props.setmenuOpen(false)}>
            <a href='#about' title='About' className='menu__container--a'>
          Home
        </a> 
        </li>
        <li className='menu__container--li' onClick={()=>props.setmenuOpen(false)}>
            <a href='#about' title='About' className='menu__container--a'>
          About
        </a> 
            </li>
            <li className='menu__container--li' onClick={()=>props.setmenuOpen(false)}><a href='#portfolio' title='Portfolio' className='menu__container--a' >
          Porfolio
        </a></li>
            <li className='menu__container--li' onClick={()=>props.setmenuOpen(false)}><a href='#contact' title='Contact Me' className='menu__container--a'>
          Contact Me
  </a></li>
        </ul>
    );
}
export default Menu;