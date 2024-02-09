import './about.scss';

export const About = () => {

    const redirectToLinkedin = () => {
        window.open('https://www.linkedin.com/in/mehdi-miraoui/', '_blank');
    };

    const redirectToGithub = () => {
        window.open('https://github.com/KZK0', '_blank');
    };

    return (
        <section className='about-section'>
            <div className='about-bloc'>
                <div className='about-title'>
                    <h3>About me</h3>
                    <p>Who am i ?</p>
                </div>
                <div className='about-card'>
                    <div className='about-card-first'>
                        <h4><span>Hey,</span> im Mehdi !</h4>
                        <p>I'm a passionate 27 year old front-end developer from northern France, where my meticulousness and perfectionism shine through in every line of code. Beyond coding, I enjoy exploring foreign languages, immersing myself in reading, savoring music, and delving into captivating video game worlds. My portfolio reflects my unwavering commitment to excellence and my constant desire to innovate.</p>
                        <p className='about-margin'>Would you like to learn more about my background ?</p>
                        <a className='btn-cv' href="/src/assets/pdf/NCV.pdf" download='CV - Mehdi Miraoui'>Download CV <i className="fa-regular fa-file-pdf"></i></a>
                    </div>
                    <div className='about-card-scnd'>
                        <div className='card-img'></div>
                        <div className='card-link'>
                            <button onClick={redirectToGithub} aria-label='link to github'><i className="fa-brands fa-github"></i></button>
                            <button onClick={redirectToLinkedin} aria-label='link to linkedin'><i className="fa-brands fa-linkedin"></i></button>
                            <button aria-label='link to mail'><i className="fa-solid fa-envelope"></i></button>
                        </div>
                        <div className='card-info'>
                            <p><i className="fa-solid fa-location-dot"></i><span>From:</span> France, Nord (59)</p>
                            <p><i className="fa-solid fa-comment"></i><span>Speak: </span>
                                <img src="/src/assets/images/logos/icons8-la-france-48.png" alt="Drapeau de la france" />|
                                <img src="/src/assets/images/logos/icons8-anglais-48.png" alt="Drapeau de l'angleterre'" />|
                                <img src="/src/assets/images/logos/icons8-allemagne-48.png" alt="Drapeau de l'allemagne'" />
                            </p>
                            <div className='available-card'>
                                <p>#OPEN TO WORK</p>
                                <i className="fa-solid fa-check"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
