import './contact.scss';


export const Contact = () => {

    const redirectToLinkedin = () => {
        window.open('https://www.linkedin.com/in/mehdi-miraoui/', '_blank');
    };

    const redirectToGithub = () => {
        window.open('https://github.com/KZK0', '_blank');
    };

    return (
        <section className='contact-section'>
            <div className='contact-bloc'>
                <div className='contact-title'>
                    <h3>Contact</h3>
                    <p>Lets connect together !</p>
                </div>
                <div className='contact-content'>
                    <div className='content-left'>
                        <div className='content-left-ltl-bloc'>
                            <h4>E-MAIL ME...</h4>
                            <p><i className="fa-solid fa-at"></i> contact@kzko.xyz</p>
                        </div>
                        <div className='content-left-ltl-bloc'>
                            <h4>CALL ME...</h4>
                            <p><i className="fa-solid fa-phone"></i> 06 03 83 30 12</p>
                        </div>
                        <div className='content-left-ltl-bloc'>
                            <h4>HIRE ME...</h4>
                            <p><i className="fa-solid fa-location-dot"></i> France, North</p>
                        </div>
                        <div className='contact-link'>
                            <button onClick={redirectToGithub} aria-label='link to github'><i className="fa-brands fa-github"></i></button>
                            <button onClick={redirectToLinkedin} aria-label='link to linkedin'><i className="fa-brands fa-linkedin"></i></button>
                        </div>
                    </div>
                    <div className='content-right'>
                        <div className='content-right-first'>
                            <h5>A project idea, my profile interests you or you just want to say hello? Type something ! <i className="fa-solid fa-face-laugh-wink"></i></h5>
                            <p>NB: Fields marked with a star are required *</p>
                        </div>
                        <form className='content-right-scnd'>
                            <label htmlFor="Name"></label>
                            <input type="text" name='Name' placeholder='NAME *' required />
                            <label htmlFor="Mail"></label>
                            <input type="email" name='Mail' placeholder='E-MAIL *' required />
                            <label htmlFor="Message"></label>
                            <textarea name="Message" cols="30" rows="10" placeholder='ENTER YOUR MESSAGE *' required></textarea>
                            <input type="submit" value="Let's Go !" id='submit-btn' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}