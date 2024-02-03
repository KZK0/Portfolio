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
                    {data.map((item) => (
                        <div key={item.id} className='project-elm'>
                            <img src={item.cover} alt="Pictures of the project" />
                            <div className='under-cover'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
