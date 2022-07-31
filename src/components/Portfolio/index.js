import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimationLetters";
import "./index.scss";
import movies from '../../assets/images/movies.jpg'
import unplugged from '../../assets/images/unplugged.png'
import red from '../../assets/images/instabook.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([
        {
        image:movies,
        name:"Movie Fricks",
        description:"Online movie web-site(Html5 Css3 React.js and firebase) ",
        url:"https://movies-iota-blond.vercel.app/",
        urlgit:"https://github.com/nvillalon1994/Movies-Proyecto"
    },
    {
        image:unplugged,
        name:"Unplugged Music Store",
        description:"Ecommerce web-site(Html5, Css3, React Js, Next Js, paypal and firebase) ",
        url:"https://unplugged-ecommerce2.vercel.app/",
        urlgit:"https://github.com/nvillalon1994/Unplugged-Ecommerce"
    },
    {
        image:red,
        name:"Insta-book",
        description:"Social Network(Html5, Css3, React Js, Next Js and firebase) ",
        url:"https://red-social-chatapp.vercel.app/",
        urlgit:"https://github.com/nvillalon1994/Red-Social-Chatapp"
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
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >Demo</button>
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
                        strArray={['P','o','r','t','a','f','o','l','i','o']}
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