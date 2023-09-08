import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimationLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact =()=>{
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_5qy9dc3',
            'template_yuvzpa8',
            form.current,
            '3p5dZV_oT4TzgWxRK'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
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
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                I am interested in freelance opportunities - especially ambitious or
                large projects. However, if you have other request or question,
                don't hesitate to contact me using below form either.   
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="text" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" placeholder='Subject' name='subject' required/>
                            </li> 
                             <li>
                                <textarea cols="30" rows="10" placeholder='Messages' name='message' required></textarea>
                            </li> 
                            <li>
                                <input type="submit" className='flat-button2' value={"Send"} />
                            </li>
                            
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Villalón Natalio,
                <br />
                Buenos Aires, Argentina
                
                <br />
                <span>natalius_94@hotmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[-34.59945076114469, -58.52744676434707]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-34.59945076114469, -58.52744676434707]}>
                    <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
        </div>
        </div>

        <Loader type="line-scale" />
        </>
    )
}

export default Contact 
