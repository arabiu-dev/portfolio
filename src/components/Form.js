import React from 'react';
import '../styles/Contact.css'
import { IonIcon } from '@ionic/react';
import {
    personCircle,
    mail,
    call,
    chatbubble
} from 'ionicons/icons'

const Wrapper = (props) => {
    return (
        <div className='form-wrapper'>
            <label for={props.name.toLowerCase()} className='form-label'>{props.name}</label>
            <div className='input-wrapper'>
                { props.children }
            </div>
        </div>
    )
}

const Form = () => {
    return(
        <form action='https://formspree.io/f/xeqdoebo' method='POST' className='contact-form'>
            <Wrapper name="Name">
                <input type="text" name='name' id='name' placeholder='e.g John Doe' required className='input-field'/>
                <IonIcon icon={personCircle} />
            </Wrapper>
            <Wrapper name="Email">
                <input type="email" name='email' id='email' placeholder='e.g johndoe@mail.com' required className='input-field' />
                <IonIcon icon={mail} />
            </Wrapper>
            <Wrapper name="Phone">
                <input type="tel" name='phone' id='phone' placeholder='Phone Number' required className='input-field' />
                <IonIcon icon={call} />
            </Wrapper>
            <Wrapper name="Message">
                <textarea name='message' id='message' placeholder='Write message...' required className='input-field' />
                <IonIcon icon={chatbubble} />
            </Wrapper>
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    )
}

export default Form;