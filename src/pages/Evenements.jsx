import React from "react";
import { events } from "../data/events";
import logo from "../Images/logo.png";

/** Format FR court */
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

/**
 * Page "Événement" = Galerie photos des événements auxquels nous avons participé.
 * - Affiche tous les événements (passés et à venir).
 * - Si un événement n’a pas encore de photos, une vignette neutre est affichée.
 */
export default function Evenements() {
  const all = [...events].sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <main className="container section">
      <h1>Événements — Galerie photos</h1>
      <p className="lead">
        Retrouvez ici les galeries des événements auxquels nous avons participé.
      </p>

      <div className="grid" style={{marginTop:"1rem"}}>
        {all.map((e) => {
          const images = (e.photos && e.photos.length > 0) ? e.photos : [logo];
          return (
            <article key={e.id} className="card" style={{gridColumn:"span 12"}}>
              <div style={{display:"flex", gap:"1rem", alignItems:"baseline", flexWrap:"wrap"}}>
                <span className="tag">{fmt(e.date)}</span>
                <h2 style={{margin:0}}>{e.title}</h2>
              </div>
              {e.location ? <p style={{marginTop:".2rem"}}><em>{e.location}</em></p> : null}
              <p style={{marginTop:".4rem"}}>{e.description}</p>

              <div className="gallery-grid" style={{marginTop:".75rem"}}>
                {images.map((src, idx) => (
                  <img key={idx} src={src} alt={`Photo ${idx+1} — ${e.title}`} />
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
