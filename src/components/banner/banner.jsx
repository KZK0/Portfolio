import React, { useEffect, useRef, useState } from 'react';
import Fog from 'vanta/src/vanta.fog.js';
import './banner.scss';

export const Banner = () => {
    const vantaRef = useRef(null);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ["Junior Developer", "Learner", "& Creative."];

    useEffect(() => {
        // Initialise l'effet de brouillard sur l'élément avec la classe banner-section
        vantaRef.current = Fog({
            el: ".banner-section", // Sélectionne l'élément avec la classe banner-section
            color: 0x0, // Couleur du brouillard
            highlightColor: 0x0, // Couleur de mise en évidence (optionnel)
            midtoneColor: 0x0, // Couleur médiane (optionnel)
            lowlightColor: 0x0, // Couleur basse (optionnel)
            baseColor: 0x595959, // Couleur de base (optionnel)
            blurFactor: 1, // Facteur de flou (optionnel)
            speed: 1, // Vitesse de l'animation (optionnel)
            zoom: 0.3 // Zoom (optionnel)
            // Vous pouvez ajuster ces valeurs selon vos préférences
        });

        // Change le mot affiché toutes les 5 secondes
        const interval = setInterval(() => {
            setCurrentWordIndex(currentIndex => (currentIndex + 1) % words.length);
        }, 3000);

        // Nettoie l'effet de brouillard et arrête l'intervalle lors du démontage du composant
        return () => {
            if (vantaRef.current) vantaRef.current.destroy();
            clearInterval(interval);
        };
    }, []); // Cette fonction s'exécute une seule fois après le premier rendu

    return (
        <section className='banner-section'>
            <div className='banner-bloc'>
                <h1>Hello, im <span className='banner-text-style'>KZKO</span>.</h1>
                <h2>A French <span className='word-animation'>{words[currentWordIndex]}</span></h2>
                <p className='banner-paragraph'>I love web development and design for its fusion of user interface and user experience UI & UX. Every detail is meticulously thought out to create seamless and aesthetically pleasing online experiences.</p>
                <i class="fa-solid fa-caret-down"></i>
            </div>
        </section>
    );
}
