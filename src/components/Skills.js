import React, { useState } from 'react';
import '../styles/Skills.css'

const Skills = () => {
    const [active, setActive] = useState(false);

    return(
        <section className='skills' id='skills'>
            <div className='skills-content section-content'>
                <p className='section-subtitle'>My skills</p>
                <h2 className='h3 section-title'>What My Programming Skills Included?</h2>
                <p className='section-text'>
                    I develop simple, intuitive and responsive user interface that helps users 
                    get things done with less effort and time with those technologies.
                </p>
                <div className={`skills-toggle ${active ? "active" : ""}`}>
                    {["Skills", "Tools"].map((e) => <button className='toggle-btn' onClick={() => setActive(!active)}>{e}</button>)}
                </div>
            </div>
            <div className={`skills-box ${active ? "active" : ""}`}>
                <ul className='skills-list'>
                    {
                        [
                            "HTML5", "CSS3", "JavaScript", "TypeScript", "jQuery", "Bootstrap",
                            "Angular", "React", "Vue", "Firebase", "PugJs", "SASS"
                        ].map((e) => {
                            return (
                                <li>
                                    <div className='skill-card'>
                                        <div className='tooltip'>{e}</div>
                                        <div className='card-icon'>
                                            <img src={require(`../images/${e.toLowerCase()}.png`)} alt={`${e} logo`} />
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

                <ul className='tools-list'>
                    {
                        [
                            "Ajax", "Gulp", "Webpack", "Git", "Npm", "Command Line",
                            "VS Code", "Trello", "ClickUp", "Slack", "Photoshop", "Adobe XD"
                        ].map((e) => {
                            return (
                                <li>
                                    <div className='skill-card'>
                                        <div className='tooltip'>{e}</div>
                                        <div className='card-icon'>
                                            <img src={require(`../images/${e.toLowerCase().split(' ')[0]}.png`)} alt={`${e} logo`} />
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Skills;