import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import './contact.scss';

export const Contact = () => {
    const form = useRef();
    const [isEmailSent, setIsEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setIsEmailSent(true);

        emailjs
            .sendForm('service_qc6epvb', 'template_7drojkb', form.current, import.meta.env.VITE_SECRET_KEY)
            .then(
                () => {
                    setTimeout(() => setIsEmailSent(false), 2000);
                },
                () => {
                    setIsEmailSent(false);
                }
            );

        form.current.reset();
    };

    const redirectToLinkedin = () => {
        window.open('https://www.linkedin.com/in/mehdi-miraoui/', '_blank');
    };

    const redirectToGithub = () => {
        window.open('https://github.com/KZK0', '_blank');
    };

    return (
        <section id='contact-section'>
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
                            <p><i className="fa-solid fa-phone"></i>+33 6 03 83 30 12</p>
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
                        <form ref={form} onSubmit={sendEmail} className='content-right-scnd'>
                            <label htmlFor="user_name"></label>
                            <input type="text" name='user_name' placeholder='NAME *' maxLength='25' required />
                            <label htmlFor="user_email"></label>
                            <input type="email" name='user_email' placeholder='E-MAIL *' maxLength='25' required />
                            <label htmlFor="user_message"></label>
                            <textarea name="user_message" cols="30" rows="10" placeholder='ENTER YOUR MESSAGE *' maxLength='700' required></textarea>
                            <button aria-label='Submit contact form' type='submit' id='submit-btn'>
                                {isEmailSent ? <p>Email Sent !</p> : <><i className="fa-solid fa-paper-plane"></i>Send</>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
