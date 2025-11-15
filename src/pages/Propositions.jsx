import React from "react";

export default function Propositions() {
  return (
    <main className="container section">
      <h1>Propositions à venir</h1>
      <p className="lead">
        Cette page sera enrichie avec les propositions détaillées.
        Revenez prochainement pour découvrir les axes présentés.
      </p>

      <div className="grid" style={{marginTop:"1rem"}}>
        <section className="card" style={{gridColumn:"span 12"}}>
          <h2>À venir</h2>
          <p>Contenus en cours de préparation.</p>
        </section>
      </div>
    </main>
  );
}
