import React from "react";

export default function Contact() {
  return (
    <main className="container section">
      <h1>Nous contacter</h1>
      <p className="lead">
        Pour toute question, suggestion ou prise de contact média.
      </p>

      <div className="grid" style={{marginTop:"1rem"}}>
        <section className="card" style={{gridColumn:"span 6"}}>
          <h2>Coordonnées</h2>
          <p>
            Email :{" "}
            <a href="mailto:contact@bernay-ville-avenir.com">
              contact@bernay-ville-avenir.com
            </a>
          </p>
        </section>

      <section className="card" style={{gridColumn:"span 6"}}>
          <h2>Écrire un message</h2>
          <p>
            Vous pouvez également nous écrire via votre messagerie en cliquant sur{" "}
            <a href="mailto:contact@bernay-ville-avenir.com?subject=Contact%20via%20site">
              ce lien (ouvrir votre client mail)
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
