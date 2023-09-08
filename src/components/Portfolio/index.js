import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimationLetters";
import "./index.scss";
import movies from '../../assets/images/movies.jpg'
import unplugged from '../../assets/images/unplugged.png'
import red from '../../assets/images/instabook.jpg'
import logoaudio from'../../assets/images/logoaudio.jpg'
import museo from'../../assets/images/museos (1).jpg'
import amazonclone from '../../assets/images/amazon clone.jpg'
import reco360 from '../../assets/images/reco360.jpg'
import dreamhouse from '../../assets/images/dreamhouse.jpg'
import photos from '../../assets/images/photos.jpg'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([
        {
        image:museo,
        name:"Museum View Carga",
        description:"Online movie web-site(Html5 Css3 React.js, Redux, redux-toolkit, tailwind and firebase) ",
        // url:"https://movies-iota-blond.vercel.app/",
        urlgit:"https://github.com/nvillalon1994/Museos"
    },
    {
        image:amazonclone,
        name:"Amazon clone",
        description:"Ecommerce web-site(Html5, Css3, React Js, Next Js,Tailwind, Redux, redux-toolkit) ",
        url:"https://ecommerce-phi-six.vercel.app/",
        urlgit:"https://github.com/nvillalon1994/ecommerce"
    },
    {
        image:logoaudio,
        name:"Aural -  Audiometrías",
        description:"Examanes audiometricos online(Html5, Css3, React Js, Next Js, Redux, redux-toolkit, Web Audio Api and firebase) ",
        
        urlgit:"https://github.com/nvillalon1994/Unplugged-Ecommerce"
    },
    {
        image:red,
        name:"Insta-book",
        description:"Social Network(Html5, Css3, React Js, Next Js, Redux, redux-toolkit and firebase) ",
        url:"https://red-social-chatapp.vercel.app/",
        urlgit:"https://github.com/nvillalon1994/Red-Social-Chatapp"
    },
    {
        image:reco360,
        name:"360° View",
        description:"Make your 360° Tour(Html5, Css3, React Js, Next Js, Redux, redux-toolkit and firebase) ",
        url:"https://360-virtual.vercel.app/",
        urlgit:"https://github.com/nvillalon1994/360-virtual"
    },
    {
        image:photos,
        name:"Blackparadox",
        description:"Photography page(Html5, Css3, Scss and Js) ",
        url:"https://landing-model-8.vercel.app/",
        urlgit:"https://github.com/nvillalon1994/Landing-model-8"
    },
    
    
]);

    

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <div className="views">
                                    {port.url&&<button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >Demo</button>}
                                    <button
                                        className="btn2"
                                        onClick={() => window.open(port.urlgit)}
                                    ><FontAwesomeIcon icon={faGithub}  /></button>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    const a =()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
      }
      useEffect(() => {
        return a()
      })

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P','o','r','t','f','o','l','i','o']}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="line-scale" />
        </>
    );
}

export default Portfolio;