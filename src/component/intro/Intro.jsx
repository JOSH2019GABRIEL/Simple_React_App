import React from 'react'
import './intro.css'

import Josh from "../../images/Joshy.png"
const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Joshua Gabriel</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX</div>
                        <div className="i-title-item">Photograph</div>
                        <div className="i-title-item">Programmer</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Content Creator</div> 
                    </div>
                    </div>
                    <div className="i-desc">
                    I design and develop service for customers of all sizes, specializing
                    in creating stylish, modern websites, web services and online stores.
                    </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Josh} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro