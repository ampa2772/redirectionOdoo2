import React from "react";
import { events } from "../data/events";

/** Format FR court pour les en-têtes du calendrier */
function monthLabel(d) {
  return d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
}
function fmt(d) {
  return new Date(d).toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Calcule les jours à afficher pour un mois donné */
function getMonthGrid(base) {
  const first = new Date(base.getFullYear(), base.getMonth(), 1);
  const last = new Date(base.getFullYear(), base.getMonth() + 1, 0);
  const start = new Date(first);
  start.setDate(first.getDate() - ((first.getDay() + 6) % 7)); // Lundi=0

  const days = [];
  let cur = new Date(start);
  while (cur <= last || days.length % 7 !== 0) {
    days.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return days;
}

export default function Agenda() {
  const [current, setCurrent] = React.useState(() => {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), 1);
  });

  const days = getMonthGrid(current);

  // Index des événements par jour (clé AAAA-MM-JJ)
  const index = React.useMemo(() => {
    const map = new Map();
    const toKey = (d) => {
      const dt = new Date(d);
      return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,"0")}-${String(dt.getDate()).padStart(2,"0")}`;
    };
    events.forEach((e) => {
      const k = toKey(e.date);
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(e);
    });
    return map;
  }, []);

  const toKey = (d) =>
    `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;

  const allSorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <main className="container section">
      <h1>Agenda</h1>
      <p className="lead">Vue calendrier + liste chronologique des événements.</p>

      <div className="calendar" style={{marginTop:".75rem"}}>
        <div className="cal-head">
          <button
            className="btn"
            onClick={() =>
              setCurrent((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
            }
            title="Mois précédent"
          >
            ◀
          </button>
          <h2 style={{margin:0}}>{monthLabel(current)}</h2>
          <button
            className="btn"
            onClick={() =>
              setCurrent((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
            }
            title="Mois suivant"
          >
            ▶
          </button>
        </div>

        <div className="grid" style={{marginBottom:".35rem"}}>
          {["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map((d) => (
            <div key={d} style={{textAlign:"center", opacity:.8, fontWeight:700}}>{d}</div>
          ))}
        </div>

        <div className="grid">
          {days.map((d, i) => {
            const k = toKey(d);
            const isOtherMonth = d.getMonth() !== current.getMonth();
            const dayEvts = index.get(k) || [];
            return (
              <div key={i} className="day" style={{opacity: isOtherMonth ? .45 : 1}}>
                <div className="d">{d.getDate()}</div>
                {dayEvts.map((e) => (
                  <div key={e.id} className="evt">{e.title}</div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <section className="card" style={{marginTop:"1rem"}}>
        <h2>Liste complète des événements</h2>
        <ul className="events-list" style={{marginTop:".35rem"}}>
          {allSorted.map((e) => (
            <li key={e.id}>
              <span className="tag date">{fmt(e.date)}</span>
              <strong>{e.title}</strong>
              {e.location ? <span> — {e.location}</span> : null}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
