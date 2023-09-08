import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimationLetters'
import './index.scss'
import pdf from './downloads/Natalio Villalón CV.pdf'
import cvpdf from'./downloads/Villalón-Natalio CV.pdf'
const About =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const a =()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
      }
      useEffect(() => {
        return a()
      })
    return(
        <>
        <div className='container about-page'>
            
            <div className='text-zone'>

                <div className='text-2'>
                    <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                    </h1>
                    <div className='cubo2'>
                        <div className='stage-cube-cont2'>
                            <div className='cubespinner2'>
                                <div className='face1'>
                                    <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                                </div>
                                <div className='face2'>
                                    <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                                </div>
                                <div className='face3'>
                                    <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                                </div>
                                <div className='face4'>
                                    <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                                </div>
                                <div className='face5'>
                                    <FontAwesomeIcon icon={faGitAlt} color='#' />
                                </div>
                                <div className='face6'>
                                    <FontAwesomeIcon icon={faNodeJs} color='#22a522' />
                                </div>
                            </div>
                    

                        </div>
                    </div>
                    
            </div>
                
                
                <p>
                    I'm very ambitious front-end developer looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quietly confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person,musician, and tech-obsessed!!!
                </p>
                
                <a  href={cvpdf} download="Natalio Villalón CV.pdf" target="_blank"><button  downloads="Natalio Villalón CV" class="flat-button" >DOWNLOAD CV</button></a>
            </div>
            
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color='#' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color='#22a522' />
                    </div>
                </div>
                

            </div>
        </div>
        <Loader type="line-scale" />
        </>

    )
}
export default About