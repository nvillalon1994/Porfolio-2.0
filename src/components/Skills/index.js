import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimationLetters'
import Courses from './Courses'
import './index.scss'
import Skillbars from './Skillsbars'

const Skills =()=>{
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
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['S','k','i','l','l','s',' ','&',' ',' E','x','p','e','r','i','e','n','c','e']}
                    idx={15}
                    />
                </h1>
                
                <Skillbars/>
                    
                
                
                
                
            </div>
            {/* <Courses/> */}
            
            
        </div>
        <Loader type="line-scale" />
        </>

    )
}
export default Skills