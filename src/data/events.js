/**
 * Liste des événements (passés et futurs).
 * - Utilisée par la page d'accueil (aperçu des prochains),
 *   la page Agenda (calendrier + liste), et la page Événements (galerie).
 *
 * Les dates sont au format ISO local (sans fuseau explicite).
 * Ajustez librement ce tableau pour mettre vos vraies données.
 */
export const events = [
  {
    id: "2025-10-10-forum-associations",
    title: "Forum des associations",
    date: "2025-10-10T18:30:00",
    location: "Salle polyvalente",
    description:
      "Rencontre des associations locales et échanges sur la vie citoyenne.",
    photos: [],
  },
  {
    id: "2025-11-08-rencontre-centre",
    title: "Rencontre publique — Centre-ville",
    date: "2025-11-08T10:00:00",
    location: "Centre-ville",
    description: "Présentation et échanges ouverts.",
    photos: [],
  },
  {
    id: "2025-11-09-marche-citoyenne",
    title: "Marche citoyenne",
    date: "2025-11-09T09:30:00",
    location: "Parc municipal",
    description: "Moments conviviaux autour du projet.",
    photos: [],
  },
  {
    id: "2025-11-10-lancement-video",
    title: "Lancement vidéo",
    date: "2025-11-10T18:00:00",
    location: "En ligne",
    description: "Diffusion d’un clip court sur les réseaux.",
    photos: [],
  },
];
