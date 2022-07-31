import './index.scss'
import LogoS from '../../assets/images/My project-1.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faBrain, faAward } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        <h3 className='nombre'>Villalón Natalio</h3> 
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#669dbb" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#669dbb" />
          
        </NavLink>
        <NavLink
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faAward} color="#669dbb" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#669dbb" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#669dbb" />
        </NavLink>
        
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/natalio-villal%C3%B3n-6aa814229/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin}  />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nvillalon1994"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub}  />
          </a>
        </li>
        
        
      </ul>
    </div>
  )
}

export default Sidebar