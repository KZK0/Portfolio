import React, { useEffect, useRef } from 'react';
import Fog from 'vanta/src/vanta.fog.js';
import './quote.scss';


export const Quote = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        // Initialise l'effet de brouillard sur l'élément avec la classe banner-section
        vantaRef.current = Fog({
            el: ".quote-section", // Sélectionne l'élément avec la classe banner-section
            color: 0x0, // Couleur du brouillard
            highlightColor: 0x0, // Couleur de mise en évidence (optionnel)
            midtoneColor: 0x0, // Couleur médiane (optionnel)
            lowlightColor: 0x0, // Couleur basse (optionnel)
            baseColor: 0x828282, // Couleur de base (optionnel)
            blurFactor: 1, // Facteur de flou (optionnel)
            speed: 1, // Vitesse de l'animation (optionnel)
            zoom: 0.1 // Zoom (optionnel)
            // Vous pouvez ajuster ces valeurs selon vos préférences
        });

        // Nettoie l'effet de brouillard et arrête l'intervalle lors du démontage du composant
        return () => {
            if (vantaRef.current) vantaRef.current.destroy();
        };
    }, []); // Cette fonction s'exécute une seule fois après le premier rendu

    return (
        <blockquote className='quote-section'>
            <div className='quote-content'>
                <h5>My Favorite Quote:</h5>
                <p><i className="fa-solid fa-quote-left"></i> We grow after we finish learning. <i className="fa-solid fa-quote-right"></i></p>
                <h6>By: ich weiß nicht !</h6>
            </div>
        </blockquote>
    )
}