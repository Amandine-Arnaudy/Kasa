import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './Timeline.scss';
import Typed from 'react-typed';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

const Timeline = () => {

    return (
        <div className='Timeline'>
            <Typed className='parcours'
                strings={[
                    "Mon parcours"
                ]}
                typeSpeed={100}
            />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2023"
                    iconStyle={{ background: '#DDB21C', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h2 className="vertical-timeline-element-title">Formation Intégrateur Web</h2>
                    <h5 className="vertical-timeline-element-subtitle">OpenClassrooms, Titre RNCP niveau 5</h5>
                    <p>
                        - Construire un site web fluide s'adaptant à tout type
                        d'écran (web, smartphone et tablette)
                        <br></br>
                        - Faire réagir la page web en fonction des actions de l'utilisateur en JavaScript
                        <br></br>
                        - Se connecter à un service web pour exploiter des données tierces (API)
                        <br></br>
                        - Gérer les comptes utilisateurs
                        <br></br>
                        - Concevoir un site maintenable grâce à la gestion des erreurs et exceptions
                        <br></br>
                        - Créer, gérer et afficher le contenu d'une base de donnée
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022"
                    iconStyle={{ background: '#DDB21C', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h2 className="vertical-timeline-element-title">Prep'Apprentissage Développeur Web</h2>
                    <h5 className="vertical-timeline-element-subtitle">OpenClassrooms</h5>
                    <p>
                        - Transformer une maquette en site web avec HTML & CSS
                        - Réaliser une veille technologique
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2022"
                    iconStyle={{ background: '#DDB21C', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h2 className="vertical-timeline-element-title">Parcours Psychologie</h2>
                    <h5 className="vertical-timeline-element-subtitle">Université Paul-Valéry, Montpellier </h5>
                    <p>
                        - Connaissances dans les différents champs de la psychologie
                        <br></br>
                        - Méthodes d'observation expérimentales et cliniques
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - 2019"
                    iconStyle={{ background: '#DDB21C', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h2 className="vertical-timeline-element-title">Baccalauréat Économique et Social</h2>
                    <h5 className="vertical-timeline-element-subtitle">Lycée Jules Fil, Carcassonne</h5>
                    <p>
                        - Spécialité économie approfondie
                        <br></br>
                        - Spécialité art
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    iconStyle={{ background: '#DDB21C', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h2 className="vertical-timeline-element-title">Stage</h2>
                    <h5 className="vertical-timeline-element-subtitle">CAUE (Conseil d'Architecture, d'Urbanisme et d'Environnement)</h5>
                    <p>
                        - Organiser des réunions
                        <br></br>
                        - Gestion administrative des dossiers
                        <br></br>
                        - Accueillir, renseigner et informer la clientèle
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default Timeline;

