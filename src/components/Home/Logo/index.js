import { useEffect, useRef } from 'react'


import LogoS from '../../../assets/images/My project-1 (6).png'

import './index.scss'
import Loader from 'react-loaders'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  

  return (
    <>
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
      

     
    </div>
    {/* <Loader type='pacman'/> */}
    </>
  )
}

export default Logo