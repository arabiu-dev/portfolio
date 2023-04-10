import React from 'react';
import '../styles/Contact.css'
import Form from './Form';
import { IonIcon } from '@ionic/react';
import { 
    locationOutline,
    callOutline,
    mailOutline,
    logoTwitter,
    logoFacebook,
    logoYoutube,
    logoLinkedin
} from 'ionicons/icons'

const Wrapper = (props) => {
    return(
        <li className='contact-list-item'>
            <div className='contact-item-icon'>
                <IonIcon icon={props.icon} />
            </div>

            <div className='wrapper'>
                { props.children }
            </div>
        </li>
    )
}

const Contact = () => {
    return(
        <section className='contact' id='contact'>
            <div className='contact-content section-content'>
                <p className='section-subtitle'>Contact</p>
                <h2 className='h3 section-title'>Have You Any Project? Please Drop a Message</h2>
                <p className='section-text'>
                    Get in touch and let me know how i can help. 
                    Fill out the form and i'll be in touch as soon as possible.
                </p>

                <ul className='contact-list'>
                    <Wrapper icon={locationOutline}>
                        <h3 className='h4 contact-item-title'>Address:</h3>
                        <address className='contact-info'>
                            M21 Gubuchi Road, Ikeja Lagos, Nigeria.
                        </address>
                    </Wrapper>
                    <Wrapper icon={callOutline}>
                        <h3 className='h4 contact-item-title'>Phone:</h3>
                        <a href="tel:01234567789" className="contact-info">(+234) 816 661 2899</a>
                        <a href="tel:09765432200" className="contact-info">(+234) 806 493 5195</a>
                    </Wrapper>
                    <Wrapper icon={mailOutline}>
                        <h3 className='h4 contact-item-title'>Email:</h3>
                        <a href="mailto:info@jack.com" className="contact-info">arabiu.dev@gmail.com</a>
                        <a href="mailto:support@jack.com" className="contact-info">arabiu033@gmail.com</a>
                    </Wrapper>
                    <li>
                        <ul class="contac-social-list">
                            {
                                [["Facebook", logoFacebook], ["Twitter", logoTwitter],
                                    ["Linkedin", logoLinkedin], ["Youtube", logoYoutube]].map((e) => {
                                    return (
                                        <li>
                                            <a href="#" className="contact-social-link">
                                                <div class="tooltip">{e[0]}</div>

                                                <IonIcon icon={e[1]} />
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                </ul>
            </div>
            <Form />
        </section>
    )
}

export default Contact;