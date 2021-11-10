import { useState } from 'react';
import contact from '../images/contact.jpg'; 
const Contact=()=>{

  const [messege,setMessege] = useState (false);
    const handleSubmit= (ev)=>{
      //ev.preventDefault();
      setMessege(true);
    }

    return(
    <section className='section__contact' id='contact' >
      <article className='section__contact--left'>
        <img src={contact} alt="Chatting telephone" className='section__contact--img'/>

      </article>
      <article className='section__contact--right'>
        <h2 className='section__contact--title'>Contac Me</h2>
        <form onSubmit={handleSubmit} className='section__contact--form' method='POST' action={`mailto:mebrapu23@gmail.com`}>
          <input
            placeholder='nombre@mail.com...'
            id='email'
            name='email'
            type='email'
            className='section__contact--input'
            required
          />
          <textarea
            className='section__contact--textarea'
            placeholder='Whitte your messege...'
            id='messege'
            name='messege'
            required
          ></textarea>
          <button className='section__contact--submit' type='submit' value='send'>Send</button>
          {messege && <span className='section__contact--span'>Thanks, I´ll replay ASAP :)</span>}
        </form>
        </article>
      </section>
    );
}
export default Contact;