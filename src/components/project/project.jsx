import React from 'react';
import './project.scss';

export const Project = ({ data }) => {
    const handleClick = (event, demo) => {
        if (!demo) {
            event.preventDefault();
        }
    };

    return (
        <section id='project-section'>
            <div className='project-bloc'>
                <div className='project-title'>
                    <h3>Projects</h3>
                    <p>See my works !</p>
                </div>
                <div className='project-content'>
                    <div className="content-firstbloc">
                        <button aria-label='button view all projects' className='nav-btn-project'>View all projects <i className="fa-solid fa-bars-staggered"></i></button>
                    </div>
                    <div className="project-column">
                        {data.map((item) => (
                            <div key={item.id} className="content-scndbloc">
                                <div className="bloc-one">
                                    <div className="bloc-one-content">
                                        <h3>{item.title}</h3>
                                        <div className="context-three">
                                            <a href={item.repository} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code-branch"></i>GitHub</a>
                                            <a
                                                href={item.demo || '#'}
                                                target={item.demo ? "_blank" : ""}
                                                rel="noopener noreferrer"
                                                style={{
                                                    cursor: item.demo ? 'pointer' : 'not-allowed',
                                                    textDecoration: item.demo ? 'none' : 'line-through'
                                                }}
                                                onClick={(e) => handleClick(e, item.demo)}
                                            >
                                                <i className="fa-solid fa-globe"></i>View Site
                                            </a>
                                        </div>
                                    </div>
                                    <div className="context-content">
                                        <div className="context-one">
                                            <p><span>For: </span>{item.for}</p>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="context-two">
                                            <div className="button-view">
                                                <p>{item.context}</p>
                                            </div>
                                            <ul>
                                                {item.tags.map((tag, index) => (
                                                    <li key={index}>{tag}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bloc-two">
                                    <img src={item.cover} alt={item.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
