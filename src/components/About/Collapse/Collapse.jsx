import React, { useState } from 'react';
import '././Collapse.scss'

function Collapse() {
    const [expandedItems, setExpandedItems] = useState([]);

    const details = [
        {
            id: 0,
            title: "Fiabilité",
            text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            id: 1,
            title: "Respect",
            text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: 2,
            title: "Service",
            text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            id: 3,
            title: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];

    const toggleItem = (id) => {
        if (expandedItems.includes(id)) {
            setExpandedItems(expandedItems.filter(item => item !== id));
        } else {
            setExpandedItems([...expandedItems, id]);
        }
    };

    return (
        <section className="collapse">
            {details.map(elt => (
                <div className="collapse_container" key={elt.title}>
                    <div className="collapse_title">
                        <h2>{elt.title}</h2>
                        <img
                            src="src/assets/Arrow.png"
                            alt="flêche"
                            className={`arrow ${expandedItems.includes(elt.id) ? 'rotate' : 'rotate0'}`}
                            onClick={() => toggleItem(elt.id)}
                        />
                    </div>
                    <p className={`collapse_text ${expandedItems.includes(elt.id) ? 'expand' : 'expand1'}`}>
                        {elt.text}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default Collapse;
