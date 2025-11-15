import React from "react";
import { FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

// Importation des images depuis le dossier /src/Images/
// (J'utilise les noms de fichiers exacts vus dans votre explorateur VSCode)
import imgGare from "../Images/quartier_de_gare.png";
import imgCharentonne from "../Images/PrairieCharentonne.png";
import imgGabelle from "../Images/Hôtel_de_la_gabelle_Bernay.jpg";
import imgChaufferie from "../Images/chaufferie.jpg";
import imgBourg from "../Images/Bourg-le-Comte.jpg";
import imgEnfant from "../Images/Maison_Enfant.jpg"; // CORRIGÉ: "enfant" est devenu "Enfant"
import imgFerry from "../Images/JulesFerry.png";
import imgMusee from "../Images/MuséeBernay.jpg";
import imgCasiers from "../Images/Casiers.jpg";
import imgPAT from "../Images/PAT.jpg";

// NOUVEL AJOUT: Importation de la vidéo de la piscine
import videoPiscine from "../Images/Gen-4 the camera moves forward like a drone 1587114135.mp4";

// Données structurées du contrat municipal
const bilanData = [
  {
    id: 1,
    title: "Transformation du Quartier de la Gare et Pôle Multimodal (2023-2025)",
    text: "La transformation du Quartier de la Gare de Bernay : rénovation urbaine emblématique depuis 2023, création d’un pôle multimodal moderne, place Verdun devenue piétonne, nouvelles pistes cyclables, valorisation patrimoniale et près d’un hectare d’espaces publics désimperméabilisés, financements multi-niveaux.",
    image: imgGare,
    url: "https://www.bernaylaville.fr/transformation-du-quartier-de-la-gare/",
    videoUrl: "https://youtu.be/erxYxIpHR2g",
    layout: "special-gare", // Layout unique
  },
  {
    id: 2,
    title: "Aménagement de la Prairie de la Charentonne",
    text: "La Prairie de la Charentonne, espace naturel réaménagé : agrandissement de l’aire de jeux, accès pompier, mur d’expression artistique, suppression des clôtures pour un cadre plus ouvert et sécurité renforcée en 2025.",
    image: imgCharentonne,
    url: "https://www.normandie-tourisme.fr/sites-lieux-de-visites/les-pres-humides-de-la-charentonne/",
    layout: "text-left",
  },
  {
    id: 3,
    title: "Gestion de l'Habitat et du Patrimoine Bâti : Hôtel de la Gabelle",
    text: "L’Hôtel de la Gabelle, bâtiment du XVIIIe siècle, sauvegardé grâce à une future reconversion en logements après consultation citoyenne et à une réunion publique en octobre 2025. Patrimoine remis en valeur, impact financier maîtrisé.",
    image: imgGabelle,
    url: "https://fr.wikipedia.org/wiki/H%C3%B4tel_de_la_Gabelle_de_Bernay",
    layout: "text-right",
  },
  {
    id: 4,
    title: "Chaufferie Biomasse",
    text: "Nouvelle chaufferie biomasse inaugurée en 2023 dans le quartier Bourg-le-Comte, alimentant réseau de chaleur pour 780 logements, hôpital, école, avec du bois local, première étape vers un écoquartier durable.",
    image: imgChaufferie,
    url: "https://www.siloge.fr/inauguration-de-la-chaufferie-biomasse-a-bourg-le-comte/",
    layout: "text-left",
  },
  {
    id: 5,
    title: "Quartier Bourg-le-Comte : Réhabilitation Urbaine",
    text: "Lancement début 2026 du programme de réhabilitation de dix immeubles d’habitation, rénovation énergétique et architecturale, création d’espaces extérieurs et d’aires de jeux, démarche participative et environnementale.",
    image: imgBourg,
    url: "https://www.siloge.fr/visite-officielle-a-bernay-deux-projets-emblematiques-de-siloge-a-lhonneur/",
    layout: "text-right",
  },
  {
    id: 6,
    // MODIFIÉ: Le titre est maintenant un élément JSX pour forcer la mise en page
    title: (
      <>
        Centre Aquatique Intercommunal
        <span
          style={{
            display: "block",
            fontSize: "0.9em",
            marginTop: "0.2rem",
          }}
        >
          « Les Bains de Bernay »
        </span>
      </>
    ),
    text: "Centre aquatique moderne avec bassins sportifs, nordiques, espace bien-être et gradins extensibles, architecture écoresponsable, ouverture prévue en 2026. Projet phare porté par l’IBTN, Région, État et Département.",
    image: null,
    video: videoPiscine,
    url: "https://www.shema.fr/projets/centre-aquatique-bains-de-bernay/",
    layout: "text-left",
  },
  {
    id: 7,
    title: "Espace du Droit et de la Famille",
    text: "Ce nouvel espace inauguré en 2025 regroupe services publics, démarches administratives et juridiques pour faciliter le quotidien des familles et des habitants.",
    image: null,
    url: null,
    layout: "text-only",
  },
  {
    id: 8,
    title: "Maison de l’Enfant",
    text: "Ouverte en septembre 2025, la Maison de l’Enfant offre un accompagnement global aux parents, futurs parents et enfants jusqu’à 13 ans dans un lieu innovant, inédit dans l’Eure.",
    image: imgEnfant,
    url: "https://www.bernaylaville.fr/grands-projets/maison-de-lenfant/",
    layout: "text-left",
  },
  {
    id: 9,
    title: "Espaces culturels Jules Ferry",
    text: "Réhabilitation de l’ancienne école Jules Ferry en tiers-lieu culturel intergénérationnel, incluant une salle modulable et des espaces partagés pour associations, inaugurés à l’automne 2025.",
    image: imgFerry,
    url: null, // Pas de lien fourni, l'image ne sera pas cliquable
    layout: "text-right",
  },
  {
    id: 10,
    title: "Musée des Beaux-Arts : Expositions et mécénats",
    text: "Le musée prépare une grande exposition en 2026, mobilise mécénats pour la restauration de ses œuvres et la scénographie autour de Marie-Thérèse Lanoa, valorisant le patrimoine culturel local.",
    image: imgMusee,
    url: "https://www.musees-normandie.fr/musees-normandie/musee-des-beaux-arts-de-bernay/",
    layout: "text-left",
  },
  {
    id: 11,
    title: "« Les Casiers de Bernay »",
    text: "Concept inédit de vente automatisée dans l’ancien buffet de la gare : produits frais de commerçants locaux disponibles 24h/24, soutien au commerce de proximité et innovation.",
    image: imgCasiers,
    url: null, // Pas de lien fourni, l'image ne sera pas cliquable
    layout: "text-right",
  },
  {
    id: 12,
    title: "Projet Alimentaire Territorial (PAT)",
    text: "Le PAT, porté par l’IBTN, favorise l’agriculture durable, circuits courts et produits locaux dans la restauration collective, label national niveau 2 obtenu en 2024, projet de légumerie et conserverie locale.",
    image: imgPAT,
    url: "https://www.anbdd.fr/developpement-durable/initiatives-et-experiences/ddtour/decouvrez-loffre-de-visites-ddtour-des-collectivites/circuit-15-projet-alimentaire-territorial-pat-de-lintercom-bernay-terres-de-normandie/",
    layout: "text-left",
  },
];

/**
 * Composant pour afficher une image (cliquable ou non)
 * MODIFIÉ pour gérer aussi les vidéos
 */
function BilanMedia({ image, video, url, title }) {
  // Si pas d'image ET pas de vidéo, ne rien rendre
  if (!image && !video) return null;

  // Détermine quel tag média utiliser
  const mediaTag = video ? (
    <video
      src={video}
      className="bilan-item-image" // Réutilise la classe CSS de l'image
      autoPlay
      loop
      muted
      playsInline // Important pour iOS
      title={title} // Le titre ne sera pas 'title' mais on le garde pour l'accessibilité
    />
  ) : (
    <img src={image} alt={title} className="bilan-item-image" />
  );

  // S'il y a une URL, le média est cliquable
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={"En savoir plus sur ce projet"} // Titre générique car 'title' peut être un objet JSX
        className="bilan-item-media"
      >
        {mediaTag}
      </a>
    );
  }

  // Sinon, simple média non cliquable
  return <div className="bilan-item-media">{mediaTag}</div>;
}

/**
 * Page Bilan / Contrat Municipal
 */
export default function Bilan() {
  return (
    <main className="container section">
      <h1>Contrat municipal — Bilan des réalisations</h1>
      <p className="lead">
        Synthèse des projets clés et des transformations engagées.
      </p>

      <div className="bilan-list">
        {bilanData.map((item) => {
          // Cas spécial: 1. Gare
          if (item.layout === "special-gare") {
            return (
              <section key={item.id} className="card bilan-item-gare">
                <div className="bilan-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="bilan-links-gare">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <FaExternalLinkAlt /> En savoir plus
                  </a>
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-video"
                  >
                    <FaYoutube /> Voir la vidéo
                  </a>
                </div>
                <BilanMedia
                  image={item.image}
                  url={item.url}
                  title={item.title}
                />
              </section>
            );
          }

          // Cas: 7. Texte seulement
          if (item.layout === "text-only") {
            return (
              <section key={item.id} className="card bilan-item">
                <div className="bilan-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.url && (
                    <div className="bilan-links">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        <FaExternalLinkAlt /> En savoir plus
                      </a>
                    </div>
                  )}
                </div>
              </section>
            );
          }

          // Cas par défaut: Grille 2 colonnes (Texte/Image ou Texte/Vidéo)
          const layoutClass =
            item.layout === "text-left"
              ? "layout-text-left"
              : "layout-text-right";

          return (
            <section
              key={item.id}
              className={`card bilan-item bilan-item-grid ${layoutClass}`}
            >
              <div className="bilan-item-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.url &&
                  !item.image &&
                  !item.video && ( // S'il y a un lien mais pas de média
                    <div className="bilan-links">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        <FaExternalLinkAlt /> En savoir plus
                      </a>
                    </div>
                  )}
              </div>
              <BilanMedia
                image={item.image}
                video={item.video} // Passe la vidéo au composant
                url={item.url}
                title={item.title}
              />
            </section>
          );
        })}
      </div>
    </main>
  );
}