import { useEffect, useRef ,useState} from 'react'

import LogoS from '../../../assets/images/My project-1 (6).png'

import './index.css'
import Loader from 'react-loaders'
import AnimatedLetters from '../../AnimationLetters'

const Courses = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const a =()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
      }
      useEffect(() => {
        return a()
      })

  
    

  return (
    <section class="results-text">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['S','t','u','d','i','e','s',' ','&',' ',' C','o','u','r','s','e','s']}
                        idx={15}
                        />
                </h1>
                
                <div className='text'>
                    <div class="course">
                        <p>2022</p>
                        <p>TzuzulCode BootCamp</p>
                        <p>Front-End Fundamentals</p>
                    </div>
                    <div class="course">
                        <p>2022</p>
                        <p>TzuzulCode BootCamp</p>
                        <p>Front-End with React Js</p>
                    </div>
                    <div class="course">
                        <p>2021</p>
                        <p>Grover Vásquez en Udemy</p>
                        <p>JavaScript Full- Curso desde Principiante hasta Profesional</p>
                    </div>
                    <div class="course">
                        <p>2021</p>
                        <p>Global Mentoring Ing. Ubaldo Acosta</p>
                        <p>Universidad Desarrollo Web - FrontEnd Web Developer!</p>
                    </div>
                    <div class="course">
                        <p>2021</p>
                        <p>Universidad de Tres de Febrero</p>
                        <p>Ingeniería en Sonido</p>
                    </div>
                </div>
                
                
            </section> 
  )
}

export default Courses