import React from "react";

function readIdeas() {
  try {
    const raw = localStorage.getItem("bva_ideas");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveIdeas(list) {
  localStorage.setItem("bva_ideas", JSON.stringify(list));
}

export default function Idees() {
  const [ideas, setIdeas] = React.useState(() => readIdeas());
  const [form, setForm] = React.useState({ name: "", email: "", text: "" });

  function submit(e) {
    e.preventDefault();
    if (!form.text.trim()) return;
    const entry = {
      id: Date.now().toString(36),
      ...form,
      date: new Date().toISOString(),
    };
    const next = [entry, ...ideas];
    setIdeas(next);
    saveIdeas(next);
    setForm({ name: "", email: "", text: "" });
  }

  return (
    <main className="container section">
      <h1>Boîte à idées</h1>
      <p className="lead">
        Partagez vos idées et suggestions pour améliorer la ville. (Stockage
        local uniquement — aucune donnée n’est transmise en ligne.)
      </p>

      {/* La div 'grid' a été retirée.
        La 'section' suivante est maintenant centrée avec 'margin: auto'
        et sa largeur est contrôlée par 'maxWidth'.
      */}
      <section
        className="card"
        style={{
          marginTop: "1rem",
          maxWidth: "750px", // La rend "un peu plus grande"
          margin: "1rem auto 0 auto", // Centre la carte horizontalement
        }}
      >
        <h2>Proposer une idée</h2>

        <form className="form" onSubmit={submit}>
          <input
            type="text"
            placeholder="Nom (optionnel)"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            type="email"
            placeholder="Email (optionnel)"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          <textarea
            rows={6}
            placeholder="Votre idée…"
            value={form.text}
            onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
          />
          <button className="btn" type="submit">
            Envoyer
          </button>
        </form>
      </section>

      {/* <section className="card" style={{gridColumn:"span 6"}}>
          <h2>Idées reçues (local)</h2>
          {ideas.length === 0 ?
(
            <p>Aucune idée enregistrée pour l’instant.</p>
          ) : (
            <ul className="events-list">
              {ideas.map((i) => (
                <li key={i.id}>
                  <span className="tag">
       
             {new Date(i.date).toLocaleDateString("fr-FR", {
                      day: "2-digit", month: "2-digit", year: "numeric",
                      hour: "2-digit", minute: "2-digit"
                    })}
             
      </span>
                  <strong>{i.name || "Anonyme"}</strong> — {i.text}
                </li>
              ))}
            </ul>
          )}
        </section> */}
    </main>
  );
}
