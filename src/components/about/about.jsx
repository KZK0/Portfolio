import './about.scss';


export const About = () => {
    return (
        <section className='about-section'>
            <div className='about-bloc'>
                <div className='about-title'>
                    <h3>About me</h3>
                    <p>Who am i ?</p>
                </div>
                <div className='about-card'>
                    <div className='about-card-first'>
                        <h4><span>Hello,</span> im Mehdi !</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto sit fugit quas necessitatibus odit, sapiente excepturi nesciunt, beatae, deserunt reprehenderit deleniti accusantium repudiandae. Vitae odit quaerat amet illum unde, aspernatur in reprehenderit quas nostrum tenetur. Minus quod mollitia laudantium!</p>
                        <p className='about-margin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, veniam?</p>
                        <button>Download CV <i class="fa-solid fa-file-arrow-down"></i></button>
                    </div>
                    <div className='about-card-scnd'>
                        <div className='card-img'>

                        </div>
                        <div className='card-link'>
                            <button><i class="fa-brands fa-github"></i></button>
                            <button><i class="fa-brands fa-linkedin"></i></button>
                            <button><i class="fa-solid fa-envelope"></i></button>
                        </div>
                        <div className='card-info'>
                            <p><i class="fa-solid fa-location-dot"></i><span>From:</span> France, Nord (59)</p>
                            <p><i class="fa-solid fa-comments"></i><span>Speak: </span>
                                <img src="/src/assets/images/logos/icons8-la-france-48.png" alt="Drapeau de la france" />|
                                <img src="/src/assets/images/logos/icons8-anglais-48.png" alt="Drapeau de l'angleterre'" />|
                                <img src="/src/assets/images/logos/icons8-allemagne-48.png" alt="Drapeau de l'allemagne'" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}