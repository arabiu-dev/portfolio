import React from 'react';
import '../styles/Hero.css'
import { IonIcon } from '@ionic/react';
import { logoLinkedin, logoMedium, logoGithub, logoStackoverflow } from 'ionicons/icons'

const Hero = () => {
    return(
        <section className='hero logo' id='home'>
            <figure className='hero-banner'>
                <img src={require('../images/a4.png')} alt='A happy man' className='w-100' />
            </figure>

            <div className='hero-content'>
                <h1 className='h1 hero-title'>I Design & Build Creative Web Apps</h1>
                <a href='#contact' className='btn btn-primary'>Get in touch</a>
            </div>

            <ul className='hero-social-list'>
                <li>
                    <a href='https://www.linkedin.com/in/arabiu033/' className='hero-social-link' target={"_blank"}>
                        <IonIcon icon={logoLinkedin} />
                        <div className="tooltip">Linkedin</div>
                    </a>
                </li>
                <li>
                    <a href='#' className='hero-social-link' target={"_blank"}>
                        <IonIcon icon={logoStackoverflow}/>
                        <div className="tooltip">Stackoverflow</div>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/arabiu-dev' className='hero-social-link' target={"_blank"}>
                        <IonIcon icon={logoGithub} />
                        <div className="tooltip">Github</div>
                    </a>
                </li>
                <li>
                    <a href='https://medium.com/@arabiu-dev' className='hero-social-link' target={"_blank"}>
                        <IonIcon icon={logoMedium} />
                        <div className="tooltip">Medium</div>
                    </a>
                </li>
            </ul>
            <a href='#stats' className='scroll-down'>Scroll</a>
        </section>
    )
}

export default Hero; 