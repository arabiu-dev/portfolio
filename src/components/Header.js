import React, {useState, useEffect} from 'react';
import '../styles/Header.css';
import { IonIcon } from '@ionic/react';
import { documentText } from 'ionicons/icons'

const Header = () => {
    const [active, setActive] = useState(false);
    const [offset, setOffset] = useState(0);
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (localStorage.getItem("theme") === "light_theme") {
            setTheme(!theme)
            document.body.classList.remove("dark_theme");
            document.body.classList.add("light_theme");
        } else {
            setTheme(theme)
            document.body.classList.remove("light_theme");
            document.body.classList.add("dark_theme");
        }
    }, []);

    const handleToggleBtn = () => {
        setActive(!active);
        document.body.classList.toggle("active");
    }

    const handleTheme = () => {
        setTheme(!theme)
        if (!theme) {
            document.body.classList.remove("dark_theme");
            document.body.classList.add("light_theme");

            localStorage.setItem("theme", "light_theme");
        } else {
            document.body.classList.add("dark_theme");
            document.body.classList.remove("light_theme");

            localStorage.setItem("theme", "dark_theme");
        }
    }

    return (
        <header className={`header ${offset >= 10 ? "active" : ""}`}>
            <div className='container'>

                <h1 className='h1 logo'>
                    <a href='#'>Aminu<span>.</span></a>
                </h1>

                <div className='navbar-actions'>
                    <a
                        href="https://docs.google.com/document/d/1coDXzBg1XBcAF2lbiHkVoQKIoP9nkBL__cIcFhadt0Q/edit?usp=sharing"
                        className="contact-social-link"
                        target={"_blank"}>
                        <IonIcon icon={documentText} />
                    </a>

                    <button className={`theme-btn ${theme ? "active" : ""}`} aria-label='Change Theme' title='Change Theme' onClick={() => handleTheme()}>
                        <span className='icon'></span>
                    </button>
                </div>

                <button className={`nav-toggle-btn ${active ? "active" : ""}`}
                    aria-label='Toggle Menu'
                    title='Toggle Menu'
                    onClick={() => handleToggleBtn()}>
                    {["one", "two", "three"].map((c) => <span className={c}></span>)}
                </button>

                <nav className={`navbar ${active ? "active" : ""}`}>
                    <ul className='navbar-list'>
                        {["Home", "About", "Skills", "Portfolio", "Contact"].map((link) => 
                            <li><a href={`#${link.toLowerCase()}`} className='navbar-link' onClick={() => handleToggleBtn()}>{link}.</a></li>
                        )}
                    </ul>

                </nav>

            </div>
        </header>
    )
}

export default Header;