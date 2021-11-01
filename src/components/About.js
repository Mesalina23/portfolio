const About = () => {
  return (
    <section className='section__about'>
      <h2 className='section__about--title'>A Little Bit About Me</h2>

      <div alt='imagen personal' className='section__about--img'></div>
      <article className='section__about--article'>
        <h3 className='section__about--subtitle'>Skills</h3>
        <p>
          Hello World!!! Being a <strong>curious</strong>,{' '}
          <strong>creative</strong> person and always ready to face new
          challenges has brought me here.After a wonderful trip with #Adalab I
          have redirected my professional career to the world of programming
          becoming a <strong>Front-end Developer</strong>.
        </p>
        <p>
          I have a degree in Economic and Business Sciences from the University
          of Granada, since that moment my professional career has been
          developed around banking and business administration.However, my great
          interest in the world of technology made me take a leap and reorient
          my career towards this moment.
        </p>
        <p>
          I consider myself a <strong>hard-working</strong> and
          <strong> decisive</strong> person, with a high capacity to adapt to
          any work environment. My high <strong>empathy</strong>, good character
          and love for continuous learning are my main virtues.
        </p>
        <p>Always ready for a good cup of coffee!!</p>
      </article>
      <article className='section__about--article'>
        <h3 className='section__about--subtitle'>Tech Skills</h3>
        <p>
          Through the adalab bootcamp under the <strong>Scrum</strong> and
          <strong> Agile</strong> philosophy of work I have learned the use of
          the following technologies: HTML5, CSS3, SASS, Gulp, Git, GitHub,
          JavaScript, React, NodeJS, Express JS, SQLite, Postman, Heroku and
          Zeplin.
        </p>
      </article>
      <a
        href='cualquiera'
        title='Go to My Projects'
        rel='noreferrer'
        target='_blank'
      >
        <i class='fas fa-arrow-circle-down'></i>
      </a>
    </section>
  );
};
export default About;
