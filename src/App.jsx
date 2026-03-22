import { useState } from "react";
import axios from "axios";
import AveModal from "./components/AveModal";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

function App() {
  const [aves, setAves] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAve, setSelectedAve] = useState(null);
  const [showNav, setShowNav] = useState(true);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Por favor ingresa un término de búsqueda");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/aves/buscar`, {
        params: { nombre: searchTerm },
      });
      setAves(response.data);
      if (response.data.length === 0) {
        setError("No se encontraron aves con ese nombre");
      }
    } catch (err) {
      setError("Error al buscar aves: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWithImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/aves/con-imagenes`);
      setAves(response.data);
      setSearchTerm("");
    } catch (err) {
      setError("Error al cargar aves con imágenes: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAllAves = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/aves`);
      setAves(response.data);
      setSearchTerm("");
    } catch (err) {
      setError("Error al cargar aves: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar-new">
        <div className="navbar-content">
          <div className="navbar-brand">
            <img
              src="/bilibird-crema.png"
              alt="Bilibird Logo"
              className="brand-icon-img"
            />
          </div>
          <div className="navbar-links">
            <a href="#about" className="nav-link">
              Acerca de
            </a>
            <a href="#project" className="nav-link">
              Proyecto
            </a>
            <a href="#service" className="nav-link">
              Servicio
            </a>
            <a href="#team" className="nav-link">
              Equipo
            </a>
            <a href="#contact" className="nav-link">
              Contacto
            </a>
            <button
              className="btn-explore-nav"
              onClick={handleAllAves}
              disabled={loading}
            >
              Explorar Ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Container - Split Layout */}
      <div className="hero-container">
        {/* Top Section - Content */}
        <section className="hero-top-section">
          <div className="hero-top-content">
            <h1 className="hero-title-main">AVES EN CHILE</h1>
            <div className="hero-layout-bottom">
              <div className="hero-search-section">
                <div className="hero-buttons-group">
                  <input
                    type="text"
                    className="hero-search-input"
                    placeholder="Encuentra tu Especie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    className="btn-search-hero"
                    onClick={handleSearch}
                    disabled={loading}
                  >
                    {loading ? "Buscando..." : "Explorar Ahora"}
                  </button>
                </div>
              </div>
              <div className="hero-description-box">
                <p>
                  Descubre las Aves de Chile - Explora nuestra biodiversidad con
                  imágenes e información de alta calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section - Background Image */}
        <section className="hero-bottom-section"></section>
      </div>

      {/* Alert Messages */}
      {error && (
        <div className="alert-container">
          <div className="alert-box alert-error">
            <span className="alert-icon">⚠️</span>
            <span className="alert-message">{error}</span>
            <button className="alert-close-btn" onClick={() => setError(null)}>
              ×
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p className="loading-text">Buscando aves...</p>
        </div>
      )}

      {/* Results Grid */}
      {!loading && aves.length > 0 && (
        <section className="results-section">
          <div className="results-header">
            <h2>
              Se encontraron <span className="count-badge">{aves.length}</span>{" "}
              Ave
              {aves.length !== 1 ? "s" : ""}
            </h2>
          </div>
          <div className="birds-grid">
            {aves.map((ave) => (
              <div key={ave.codigoEspecie} className="bird-card">
                <div className="card-image-wrapper">
                  {ave.imagenUrl ? (
                    <img
                      src={ave.imagenUrl}
                      alt={ave.nombreComun}
                      className="card-bird-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="card-image-placeholder">📷</div>
                  )}
                </div>
                <div className="card-content">
                  <h3 className="card-bird-name">{ave.nombreComun}</h3>
                  <p className="card-scientific-name">{ave.nombreCientifico}</p>
                  <div className="card-meta">
                    {ave.familiaComun && (
                      <span className="meta-item">{ave.familiaComun}</span>
                    )}
                    {ave.orden && (
                      <span className="meta-item">{ave.orden}</span>
                    )}
                  </div>
                  <button
                    className="btn-view-details"
                    onClick={() => setSelectedAve(ave)}
                  >
                    Ver Detalles →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {!loading && aves.length === 0 && !error && (
        <section className="empty-state-section">
          <div className="empty-content">
            <div className="empty-icon">🦉</div>
            <h3 className="empty-title">Bienvenido a Aves Chile</h3>
            <p className="empty-description">
              Busca una especie de ave específica o explora nuestra colección
              completa
            </p>
          </div>
        </section>
      )}

      {/* Modal */}
      {selectedAve && (
        <AveModal ave={selectedAve} onClose={() => setSelectedAve(null)} />
      )}
    </div>
  );
}

export default App;
