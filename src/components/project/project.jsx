import './project.scss';


export const Project = () => {
    return (
        <section className='project-section'>
            <div className='project-bloc'>
                <div className='project-title'>
                    <h3>Projects</h3>
                    <p>See my works !</p>
                </div>
                <div className='project-content'>
                    <div className='project-carrousel'>
                        <img src="" alt="Pictures of the project" />
                    </div>
                    <div className='project-btn'>
                        <button><i className="fa-solid fa-caret-left"></i> Previous Project</button>
                        <button>Next Project <i className="fa-solid fa-caret-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}