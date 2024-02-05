import { NavLink } from "react-router-dom";
import './project.scss';

export const Project = ({ data }) => {
    return (
        <section className='project-section'>
            <div className='project-bloc'>
                <div className='project-title'>
                    <h3>Projects</h3>
                    <p>See my works !</p>
                </div>
                <div className='project-content'>
                    <div className="content-firstbloc">
                        <NavLink className='nav-btn-project' to='/Project'>View all projects <i className="fa-solid fa-bars-staggered"></i></NavLink>
                    </div>
                    <div className="project-column">
                        {data.map((item) => (
                            <div key={item.id} className="content-scndbloc">
                                <NavLink to='/Project' className="bloc-one">
                                    <div className="bloc-one-content">
                                        <h3>{item.title}</h3>
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                    <div className="context-content">
                                        <div className="context-one">
                                            <p>For: {item.for}</p>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="context-two">
                                            <p>{item.context}</p>
                                            <ul>
                                                <li>{item.tags}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </NavLink>
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
