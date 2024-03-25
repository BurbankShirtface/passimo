import React from "react";

import "./Info.css";

const Info = ({ language }) => {
  return (
    <div className="info-container">
      {language === "english" ? (
        <h2 className="info-title">
          Ottawa and Gatineau's Finest Mobile Car Detailing Service
        </h2>
      ) : (
        <h2 className="info-title">
          Le meilleur service d'esthétique automobile mobile d'Ottawa et de
          Gatineau
        </h2>
      )}
      {language === "english" ? (
        <h3 className="info-text">
          Passimo is your premier mobile car detailing solution!
          <br />
          We specialize in bringing the ultimate convenience to you with our
          range of services. Whether it's a thorough exterior wash, meticulous
          interior cleaning, or a comprehensive detailing package, our skilled
          technicians deliver exceptional results right to your doorstep.
          Experience convenience and quality with Passimo, where your car's
          shine is our priority.
        </h3>
      ) : (
        <h3 className="info-text">
          Passimo est votre première solution mobile d'esthétique automobile!
          <br />
          Nous sommes spécialisés dans la fourniture du confort ultime avec
          notre gamme de prestations. Qu'il s'agisse d'un lavage extérieur
          minutieux, d'un intérieur minutieux nettoyage ou un forfait détaillé
          complet, nos techniciens qualifiés livrez des résultats exceptionnels
          directement à votre porte. Expérience commodité et qualité avec
          Passimo, où l'éclat de votre voiture est notre priorité.
        </h3>
      )}
    </div>
  );
};

export default Info;

// h2 - Le meilleur service d'esthétique automobile mobile d'Ottawa et de Gatineau
// h3 - Passimo est votre première solution mobile d'esthétique automobile !
// French - Nous sommes spécialisés dans la fourniture du confort ultime avec notre gamme
// de prestations. Qu'il s'agisse d'un lavage extérieur minutieux, d'un intérieur minutieux
// nettoyage ou un forfait détaillé complet, nos techniciens qualifiés
// livrez des résultats exceptionnels directement à votre porte. Expérience
// commodité et qualité avec Passimo, où l'éclat de votre voiture est notre
// priorité.
