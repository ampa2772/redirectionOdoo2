import React from "react";

export default function Mentions() {
  return (
    <main className="container section">
      <h1>Mentions légales</h1>
      <div className="grid" style={{marginTop:"1rem"}}>
        <section className="card" style={{gridColumn:"span 12"}}>
          <h2>Éditeur</h2>
          <p>Bernay Ville d’Avenir — Site d’information locale.</p>

          <h2>Hébergement</h2>
          <p>GitHub Pages / hébergeur du dépôt source.</p>

          <h2>Données personnelles</h2>
          <p>
            Aucune collecte nominative côté serveur. Les formulaires de la
            Boîte à idées stockent les données localement dans votre navigateur.
          </p>
        </section>
      </div>
    </main>
  );
}
