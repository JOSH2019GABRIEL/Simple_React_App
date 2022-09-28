import React from 'react'
import "./about.css"
import AboutImg from '../../images/pexels-pixabay-247851.jpg'
import Award from '../../images/award.jpg'


const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card.bg"></div>
            <div className="a-card">
                <img src={AboutImg} alt="theImage" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be distracted by the readable content.  
            </p>
            <p className='a-desc'>
            Lorem ipsum dolor sit amet. Aut ducimus illo eos enim 
            fugiat ut porro molestias aut voluptatem accusantium aut minus
             consectetur ut magnam atque eos inventore quia. Et numquam consectetur ad 
             soluta tenetur ut architecto illo et ipsa rerum.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className='a-award-title'>International Design Award</h4>
                <p className='a-award-desc'>
                In an award speech, a speaker or emcee introduces an award and the winner. The introduction is meant to build excitement, 
                 and often the winner is not known until just before the award is to be presented.
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About
