import React from "react";

import "./Packages.css";

const Packages = ({ language }) => {
  return (
    <>
      {language === "english" ? (
        <div className="packages-section-container">
          <h1 className="packages-section-title">What We Offer</h1>
          <div className="packages-container">
            <div className="package-card">
              <h1 className="package-title">Basic Package</h1>
              <div className="package-text">
                <ul className="package-list-container">
                  <li className="package-list-item">- Full vacuum</li>
                  <li className="package-list-item">
                    - Bench/seat carpet shampoo
                  </li>
                  <li className="package-list-item">
                    - Removable carpet shampoo
                  </li>
                  <li className="package-list-item">
                    - Deep cleaning of all plastic interior
                  </li>
                  <li className="package-list-item">- Window washing</li>
                  <li className="package-list-item">
                    - UV treatment application
                  </li>
                  <li className="package-list-item">
                    - Full exterior body wash
                  </li>
                  <li className="package-list-item">- Wheel arch washing</li>
                  <li className="package-list-item">
                    - Wheel and tire washing
                  </li>
                  <li className="package-list-item">- Tire polish</li>
                </ul>
              </div>
              <div className="package-price-container">
                <div className="package-price-card">
                  <h4 className="package-price-card-title">Car</h4>
                  <h4 className="package-price">$225</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Van/SUV</h4>
                  <h4 className="package-price">$245</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Truck</h4>
                  <h4 className="package-price">$285</h4>
                </div>
              </div>
            </div>
            <div className="package-card">
              <div className="package-title-container">
                <h1 className="package-title">Premium Package</h1>
                <p className="package-subtext">
                  Premium Package contains everything in the Basic Package plus:
                </p>
              </div>
              <div className="package-text">
                <ul className="package-list-container">
                  <li className="package-list-item">- Paint/sealant wax</li>
                  <li className="package-list-item">
                    - Sealant that guarantees 4 months of protection
                  </li>
                </ul>
              </div>
              <div className="package-price-container">
                <div className="package-price-card">
                  <h4 className="package-price-card-title">Car</h4>
                  <h4 className="package-price">$295</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Van/SUV</h4>
                  <h4 className="package-price">$325</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Truck</h4>
                  <h4 className="package-price">$345</h4>
                </div>
              </div>
            </div>
            <div className="package-card">
              <div className="package-title-container">
                <h1 className="package-title">Luxury Package</h1>
                <p className="package-subtext">
                  Luxury Package contains everything in the Premium Package
                  plus:
                </p>
              </div>
              <div className="package-text">
                <ul className="package-list-container">
                  <li className="package-list-item">- Full engine cleaning</li>
                  <li className="package-list-item">
                    - Anti-stain treatment for fabrics
                  </li>
                  <li className="package-list-item">
                    - Aquavelox treatment for windows and mirrors
                  </li>
                  <li className="package-list-item">- Polishing of defects</li>
                </ul>
              </div>
              <div className="package-price-container">
                <div className="package-price-card">
                  <h4 className="package-price-card-title">Car</h4>
                  <h4 className="package-price">$425</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Van/SUV</h4>
                  <h4 className="package-price">$465</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Truck</h4>
                  <h4 className="package-price">$495</h4>
                </div>
              </div>
            </div>
          </div>
          <p className="fineprint">
            *Prices subject to change based on condition. We will get your
            approval prior to cleaning if pricing changes need to be made.*
          </p>
        </div>
      ) : (
        <div className="packages-section-container">
          <h1 className="packages-section-title">Ce Que Nous Offrons</h1>
          <div className="packages-container">
            <div className="package-card">
              <h1 className="package-title">Paquet de base</h1>
              <div className="package-text">
                <ul className="package-list-container">
                  <li className="package-list-item">- Vide total</li>
                  <li className="package-list-item">
                    - Shampoing pour tapis de banquette/siège
                  </li>
                  <li className="package-list-item">
                    - Shampoing pour tapis amovible
                  </li>
                  <li className="package-list-item">
                    - Nettoyage en profondeur de tout l'intérieur en plastique
                  </li>
                  <li className="package-list-item">- Lavage des vitres</li>
                  <li className="package-list-item">
                    - Application de traitement UV
                  </li>
                  <li className="package-list-item">
                    - Lavage extérieur complet du corps
                  </li>
                  <li className="package-list-item">
                    - Lavage passage de roue
                  </li>
                  <li className="package-list-item">
                    - Lavage des roues et pneus
                  </li>
                  <li className="package-list-item">- Cirage des pneus</li>
                </ul>
              </div>
              <div className="package-price-container">
                <div className="package-price-card">
                  <h4 className="package-price-card-title">Voiture</h4>
                  <h4 className="package-price">$225</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Fourgon/VUS</h4>
                  <h4 className="package-price">$245</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Camion</h4>
                  <h4 className="package-price">$285</h4>
                </div>
              </div>
            </div>
            <div className="package-card">
              <div className="package-title-container">
                <h1 className="package-title">Forfait Premium</h1>
                <p className="package-subtext">
                  Le forfait Premium contient tout le forfait de base, plus :
                </p>
              </div>
              <div className="package-text">
                <ul className="package-list-container">
                  <li className="package-list-item">
                    - Cire de peinture/scellant
                  </li>
                  <li className="package-list-item">
                    - Scellant qui garantit 4 mois de protection
                  </li>
                </ul>
              </div>
              <div className="package-price-container">
                <div className="package-price-card">
                  <h4 className="package-price-card-title">Voiture</h4>
                  <h4 className="package-price">$295</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Fourgon/VUS</h4>
                  <h4 className="package-price">$325</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Camion</h4>
                  <h4 className="package-price">$345</h4>
                </div>
              </div>
            </div>
            <div className="package-card">
              <div className="package-title-container">
                <h1 className="package-title">Forfait Luxe</h1>
                <p className="package-subtext">
                  Le forfait Luxe contient tout ce qui est dans le forfait
                  Premium plus:
                </p>
              </div>
              <div className="package-text">
                <ul className="package-list-container">
                  <li className="package-list-item">
                    - Nettoyage complet du moteur
                  </li>
                  <li className="package-list-item">
                    - Traitement anti-taches pour tissus
                  </li>
                  <li className="package-list-item">
                    - Traitement Aquavelox pour fenêtres et miroirs
                  </li>
                  <li className="package-list-item">- Polissage des défauts</li>
                </ul>
              </div>
              <div className="package-price-container">
                <div className="package-price-card">
                  <h4 className="package-price-card-title">Voiture</h4>
                  <h4 className="package-price">$425</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Fourgon/VUS</h4>
                  <h4 className="package-price">$465</h4>
                </div>

                <div className="package-price-card">
                  <h4 className="package-price-card-title">Camion</h4>
                  <h4 className="package-price">$495</h4>
                </div>
              </div>
            </div>
          </div>
          <p className="fineprint">
            *Prix sujets à changement selon les conditions. Nous obtiendrons
            votre approbation avant le nettoyage si des modifications de prix
            doivent être apportées.*
          </p>
        </div>
      )}
    </>
  );
};

export default Packages;
