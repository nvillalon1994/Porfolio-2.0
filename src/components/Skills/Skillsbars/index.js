import { useEffect, useRef } from 'react'

import LogoS from '../../../assets/images/My project-1 (6).png'

import './index.scss'
import Loader from 'react-loaders'

const Skillbars = () => {
  

  
    

  return (
    <div className='skills-container'>
        <div class="skill-bars">
    <div class="bar">
      <div class="info">
        <span>HTML</span>
      </div>
      <div class="progress-line html">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>CSS</span>
      </div>
      <div class="progress-line css">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>JavaScript</span>
      </div>
      <div class="progress-line javascript">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>React js</span>
      </div>
      <div class="progress-line react">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Next Js</span>
      </div>
      <div class="progress-line next">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>GitHub</span>
      </div>
      <div class="progress-line github">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Firebase</span>
      </div>
      <div class="progress-line firebase">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Node Js</span>
      </div>
      <div class="progress-line node">
        <span></span>
      </div>
    </div>
    
  </div>
    
    </div>
  )
}

export default Skillbars