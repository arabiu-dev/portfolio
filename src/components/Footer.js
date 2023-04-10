import React, { useState, useEffect } from 'react';
import '../styles/Footer.css'
import { IonIcon } from '@ionic/react';
import { arrowUp } from 'ionicons/icons'

const Footer = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <>
            <footer className='footer'>
                <div className='container'>
                    <p className='h1 logo'>
                        <a href='#'>
                            Aminu<span>.</span>
                        </a>
                    </p>

                    <p class="copyright">
                        &copy; 2022 <a href="#">arabiu-dev</a>. All rights reserved
                    </p>
                </div>
            </footer>
            <a href="#top" className={`go-top ${offset >= 10 ? "active" : ""}`} title="Go to Top">
                <IonIcon icon={arrowUp} />
            </a>
        </>
    )
}

export default Footer;