import React from 'react';
import '../styles/About.css'

const About = () => {
    return(
        <section className='about' id='about'>
            <figure className='about-banner'>
                <img src={require('../images/about.png')} alt='A happy man' className='w-100' />
            </figure>

            <div className='about-content section-content'>
                <p className='section-subtitle'>About me</p>
                <h3 className='h3 section-title'>Need a Creative Product? I can Help You!</h3>
                <p className='section-text'>
                    Hi! I'm Aminu Rabiu, and I'm a developer who has passion for building clean web applications with intuitive
                    functionalities. I enjoy the process of turning ideas into reality using creative solutions. I'm always
                    curious about
                    learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have
                    worked with
                    creative teams, which involves daily stand-ups and communications, source control, and project management.
                </p>

                <div className='btn-group'>
                    <a
                        href="#contact"
                        className="btn btn-secondary">
                        Hire me
                    </a>
                    <a
                        href="https://docs.google.com/document/d/1coDXzBg1XBcAF2lbiHkVoQKIoP9nkBL__cIcFhadt0Q/edit?usp=sharing"
                        className="btn btn-primary"
                        download={"Aminu_Rabiu_Resume"}>
                        Download
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;