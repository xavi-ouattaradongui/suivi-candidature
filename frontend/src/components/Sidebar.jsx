import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="ザビ21_3" />
        <span>Suivi Candidatures</span>
      </div>
      <nav className="sidebar-links">
        <Link to="/">
          <i className="fas fa-home"></i> Accueil
        </Link>
        <Link to="/candidatures">
          <i className="fas fa-list"></i> Candidatures
        </Link>
        <Link to="/relances">
          <i className="fas fa-bell"></i> Relances
        </Link>
        <Link to="/statistiques">
          <i className="fas fa-chart-bar"></i> Statistiques
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
