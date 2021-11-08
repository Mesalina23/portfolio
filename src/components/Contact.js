const Contact=()=>{
    return(
    <section className='section__contact' id='contact' >
        <h2>Contac Me</h2>
        <form className='contact__form' action='cualquiera' method='post'>
          <input
            placeholder='Name...'
            id='name'
            name='name'
            type='text'
            required
          />
          <input
            placeholder='nombre@mail.com...'
            id='email'
            name='email'
            type='email'
            required
          />
          <textarea
            placeholder='Whitte your messege...'
            id='messege'
            name='messege'
            row='45'
            cols='45'
          ></textarea>
          <input type='submit' value='send'></input>
        </form>
      </section>
    );
}
export default Contact;