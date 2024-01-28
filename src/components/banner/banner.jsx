import React, { useEffect, useRef } from 'react';
import Fog from 'vanta/src/vanta.fog.js';
import './banner.scss';

export const Banner = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        // Initialise l'effet de brouillard sur l'élément avec la classe banner-section
        vantaRef.current = Fog({
            el: ".banner-section", // Sélectionne l'élément avec la classe banner-section
            color: 0x0, // Couleur du brouillard
            highlightColor: 0x0, // Couleur de mise en évidence (optionnel)
            midtoneColor: 0x0, // Couleur médiane (optionnel)
            lowlightColor: 0x0, // Couleur basse (optionnel)
            baseColor: 0x595959, // Couleur de base (optionnel)
            blurFactor: 0.9, // Facteur de flou (optionnel)
            speed: 1, // Vitesse de l'animation (optionnel)
            zoom: 0.3 // Zoom (optionnel)
            // Vous pouvez ajuster ces valeurs selon vos préférences
        });

        // Nettoie l'effet de brouillard lors du démontage du composant
        return () => {
            if (vantaRef.current) vantaRef.current.destroy();
        };
    }, []); // Cette fonction s'exécute une seule fois après le premier rendu

    return (
        <section className='banner-section'>
            <div className='banner-bloc'>
                <h1>Hi, im KZKO</h1>
                <h2>Im a French Student</h2>
            </div>
        </section>
    );
}
