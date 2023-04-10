import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => {
    return(
        <main>
            <article className='container'>
                <Hero />
                <Stats />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </article>
        </main>
    )
}

export default Main;