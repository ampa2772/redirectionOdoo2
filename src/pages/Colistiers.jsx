import React from "react";

export default function Colistiers() {
  return (
    <main className="container section">
      <h1>Liste des colistiers</h1>
      <p className="lead">
        Présentation de l’équipe et des colistiers. Les informations seront
        publiées au fur et à mesure.
      </p>

      <div className="grid" style={{marginTop:"1rem"}}>
        <section className="card" style={{gridColumn:"span 12"}}>
          <h2>À venir</h2>
          <p>La liste détaillée sera publiée prochainement.</p>
        </section>
      </div>
    </main>
  );
}
