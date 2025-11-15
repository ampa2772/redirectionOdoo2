import React from "react";
import { NavLink } from "react-router-dom";
import { events } from "../data/events";

/** Format FR court pour la liste d'événements */
function fmt(date) {
  const d = new Date(date);
  return d.toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Home() {
  // Récupère les 3 prochains événements (dans le futur)
  const now = new Date();
  const upcoming = [...events]
    .filter((e) => new Date(e.date) > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <>
      {/* En-tête avec image de fond (utilise les styles de index.css) */}
      <header className="header">
        <div className="container">
          <h1>Construire ensemble une ville qui avance</h1>
          <p className="lead" style={{ maxWidth: "60ch" }}>
            Bienvenue sur Bernay Ville d’Avenir. Retrouvez notre vision,
            l’agenda, la galerie des événements, le contrat municipal et nos
            propositions à venir.
          </p>
          <div
            style={{
              marginTop: "1.25rem",
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <NavLink to="/agenda" className="btn">
              Voir l'agenda
            </NavLink>
            <NavLink
              to="/propositions"
              className="btn"
              style={{ background: "var(--green)" }}
            >
              Propositions
            </NavLink>
          </div>
        </div>
      </header>

      {/* Contenu principal (grille) */}
      <main className="container section">
        <div className="grid">
          {/* Nos priorités */}
          <section className="card" style={{ gridColumn: "span 6" }}>
            <h2>Nos priorités</h2>
            <p>
              Transition, mobilité, cadre de vie, attractivité économique et
              soutien au tissu associatif. Des actions concrètes et mesurables.
            </p>
          </section>

          {/* Participation citoyenne */}
          <section className="card" style={{ gridColumn: "span 6" }}>
            <h2>Participation citoyenne</h2>
            <p>
              Réunions publiques, ateliers participatifs et outils numériques
              pour co-construire avec les habitants.
            </p>
          </section>

          {/* Événements à venir */}
          <section className="card" style={{ gridColumn: "span 12" }}>
            <h2>Événements à venir (prochains)</h2>
            {upcoming.length > 0 ? (
              <ul className="events-list" style={{ marginTop: ".35rem" }}>
                {upcoming.map((e) => (
                  <li key={e.id}>
                    <span className="tag date">{fmt(e.date)}</span>
                    <strong>{e.title}</strong>
                    {e.location ? <span> — {e.location}</span> : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucun événement à venir programmé pour l'instant.</p>
            )}
            <NavLink
              to="/agenda"
              className="btn"
              style={{ marginTop: "1rem" }}
            >
              Tout l'agenda
            </NavLink>
          </section>
        </div>
      </main>
    </>
  );
}
