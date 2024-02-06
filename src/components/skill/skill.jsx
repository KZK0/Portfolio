import './skill.scss';


export const Skill = () => {

    return (
        <section className='skill-section'>
            <div className='skill-bloc'>
                <div className='skill-card-bloc'>
                    <div className='skill-card'>
                        <i className="fa-brands fa-html5"></i>
                        <h6>HTML</h6>
                    </div>
                    <div className='skill-card'>
                        <i className="fa-brands fa-css3-alt"></i>
                        <h6>CSS</h6>
                    </div>
                    <div className='skill-card'>
                        <i className="fa-brands fa-sass"></i>
                        <h6>SASS/SCSS</h6>
                    </div>
                    <div className='skill-card'>
                        <i className="fa-brands fa-js"></i>
                        <h6>JavaScript</h6>
                    </div>
                    <div className='skill-card'>
                        <i className="fa-brands fa-react"></i>
                        <h6>React</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}