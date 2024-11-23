import Profile from '../assets/profile.JPEG';

const About = () => {

  return (
    <div className='about' id='about'>
      <div className="profile">
        <img src={Profile} alt="profile-pic" />
      </div>
      <div className="about-body">
      <div className="about-header">
        <p>Bio</p>
        <h2>About Me</h2>
      </div>
      <div className="about-text">
        <p>I’m a full stack developer with a solid foundation in coding from my studies, but much of my expertise comes from being self-taught and continually expanding my skills on my own. My passion for technology has driven me to learn various programming languages and frameworks independently, giving me a versatile skill set and a strong problem-solving ability. I’m now seeking opportunities to bring my experience and enthusiasm for coding to a team that values innovation and growth.</p>
      </div>
      <div className="about-skills">
        <h2>Skills</h2>
        <div className="skills">
        <div className="skills-left">
          <div className='skills-item'>
            <div className="loader"></div><p>Node.js Development</p>
          </div>
          <div className='skills-item'>
            <div className="loader"></div><p>MongoDB,  PostgreSQL</p>
          </div>
        </div>
        <div className="skills-right">
          <div className='skills-item'>
            <div className="loader"></div><p>React</p>
          </div>
          <div className='skills-item'>
            <div className="loader"></div><p>Next.js</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
