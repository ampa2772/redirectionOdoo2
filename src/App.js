import React from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Evenements from "./pages/Evenements";
import Agenda from "./pages/Agenda";
import Propositions from "./pages/Propositions";
import Colistiers from "./pages/Colistiers";
import Idees from "./pages/Idees";
import Bilan from "./pages/Bilan";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import "./index.css";
import logo from "./Images/logo.png";
/**
 * Barre de navigation principale
 * - Conserve l'onglet Accueil
 * - Remplace les anciens onglets par : Contrat municipal, Propositions à venir,
 * Événement (galerie), Agenda, Liste des colistiers, Boîte à idées
 * - Le logo (en haut à gauche) renvoie à la page d'accueil
 * - Ajout d'un menu hamburger pour le responsive mobile
 */
function NavBar() {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // Fonction pour fermer le menu (utilisée lors d'un clic sur un lien)
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <nav className="nav">
      {/* La classe "container" a été retirée ici */}
      <div className="nav-inner">
        <div className="brand">
          {/* Le clic sur le logo ferme aussi le menu */}
          <NavLink
            to="/"
            className="brand-link"
            title="Retour à l'accueil"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Bernay Ville d’Avenir - logo"
              className="brand-logo"
            />
            <span className="brand-title">BERNAY VILLE D’AVENIR</span>
          </NavLink>
        </div>

        {/* Bouton Hamburger */}
        <button
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Menu principal"
          aria-controls="main-menu"
        >
          {/* Les 3 barres du hamburger */}
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu principal */}
        <div
          id="main-menu"
          className={`menu ${isMenuOpen ? "is-open" : ""}`}
          role="navigation"
          aria-label="Navigation principale"
        >
          {/* Chaque lien ferme le menu lors du clic */}
          <NavLink to="/" end onClick={closeMenu}>
            Accueil
          </NavLink>
          <NavLink to="/contrat-municipal" onClick={closeMenu}>
            Contrat municipal
          </NavLink>
          <NavLink to="/propositions" onClick={closeMenu}>
            Propositions à venir
          </NavLink>
          <NavLink to="/evenements" onClick={closeMenu}>
            Événement
          </NavLink>
          <NavLink to="/agenda" onClick={closeMenu}>
            Agenda
          </NavLink>
          <NavLink to="/colistiers" onClick={closeMenu}>
            Liste des colistiers
          </NavLink>
          <NavLink to="/boite-a-idees" onClick={closeMenu}>
            Boîte à idées
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

/**
 * Pied de page
 * - Ajoute "Nous contacter" et "Mentions légales"
 */
function Footer() {
  return (
    <footer className="section">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>© {new Date().getFullYear()} Bernay Ville d’Avenir</div>
        <div className="links">
          <NavLink to="/contact" title="Nous contacter">
            Nous contacter
          </NavLink>
          <NavLink to="/mentions-legales" title="Mentions légales">
            Mentions légales
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

/**
 * Application principale
 */
export default function App() {
  React.useEffect(() => {
    document.title = "Bernay Ville d’Avenir";
  }, []);
  return (
    <HashRouter>
      {/* Wrapper pour le sticky footer */}
      <div className="app-layout-container">
        <NavBar />
        {/* Wrapper pour le contenu principal (qui s'étendra) */}
        <div className="app-content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Nouveaux onglets */}
            <Route path="/contrat-municipal" element={<Bilan />} />
            <Route path="/propositions" element={<Propositions />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/colistiers" element={<Colistiers />} />
            <Route path="/boite-a-idees" element={<Idees />} />
            {/* Footer */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Mentions />} />
            {/* Sécurité : route inconnue → Accueil */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}