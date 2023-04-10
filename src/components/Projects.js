import React from 'react';
import '../styles/Projects.css'

const Projects = () => {
    return(
        <section className='project' id='portfolio'>
            <ul className='project-list'>
                <li>
                    <div className='project-content section-content'>
                        <p className='section-subtitle'>My Works</p>
                        <h2 className='h3 section-title'>See My Works Which Will Amaze You!</h2>
                        <p className='section-text'>
                            We develop the best quality website that serves for the long-term. Well-documented, clean,
                            easy and elegant interface helps any non-technical clients.
                        </p>
                    </div>
                </li>
                {
                    ["A macintosh on a yellow background.", "On a Blue background, a Wacom and a mouse.",
                        "A Cassette tape on a mellow apricot background.",
                        "Blue digital watch on a dark liver background.",
                        "On a dark liver background, Airport luggage car carrying a luggage.",
                        "On a yellow background, a digital watch and a glass.",
                        "A fujifilm instant camera on a dark electric blue background."].map((e, i) => {
                        return(
                            <li>
                                <a href='#' className='project-card'>
                                    <figure className='card-banner'>
                                        <img src={require(`../images/project-${i+1}.png`)} alt={e} className='w-100' />
                                    </figure>
                                    <div className='card-content'>
                                        <h3 className='h4 card-title'>{`Lorem Ipsum Dolor 0${i+1}`}</h3>
                                        <time className='publish-date' dateTime='2022-04'>April 2022</time>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
                <li>
                    <button className="load-more">Load more work</button>
                </li>
            </ul>
        </section>
    )
}

export default Projects;