import { useState } from "react";
import axios from "axios";
import AveModal from "./components/AveModal";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

function App() {
  const [aves, setAves] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAve, setSelectedAve] = useState(null);

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
    <div className="min-vh-100">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand">🦅 Aves de Chile</span>
        </div>
      </nav>

      {/* Contenedor Principal */}
      <div className="container-fluid">
        <div className="main-container">
          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="hero-title">Descubre las Aves de Chile</h1>
            <p className="hero-subtitle">
              Explora la biodiversidad de nuestro país con imágenes de alta
              calidad
            </p>
          </div>

          {/* Sección de Búsqueda */}
          <div className="search-card">
            <h5 className="search-title">🔍 Buscar Aves</h5>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por nombre común o científico..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="btn btn-primary btn-search"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? "Buscando..." : "Buscar"}
              </button>
            </div>

            <div className="btn-group-custom">
              <button
                className="btn btn-all"
                onClick={handleAllAves}
                disabled={loading}
              >
                📋 Todas (Rápido)
              </button>
              <button
                className="btn btn-images"
                onClick={handleWithImages}
                disabled={loading}
              >
                🖼️ Con Imágenes
              </button>
            </div>
          </div>

          {/* Estado de Carga */}
          {loading && (
            <div className="loading-container">
              <div className="spinner"></div>
              <p className="loading-text">Buscando aves...</p>
            </div>
          )}

          {/* Alerta de Error */}
          {error && (
            <div className="alert-custom">
              <span>⚠️ {error}</span>
              <button className="alert-close" onClick={() => setError(null)}>
                ×
              </button>
            </div>
          )}

          {/* Grid de Aves */}
          {!loading && aves.length > 0 && (
            <>
              <div className="row">
                {aves.map((ave) => (
                  <div key={ave.codigoEspecie} className="card">
                    <div className="card-image">
                      {ave.imagenUrl ? (
                        <img
                          src={ave.imagenUrl}
                          alt={ave.nombreComun}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="card-image-placeholder">📷</div>
                      )}
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">{ave.nombreComun}</h5>
                      <p className="card-scientific">{ave.nombreCientifico}</p>

                      <div className="card-info">
                        {ave.familiaComun && (
                          <div className="info-item">
                            <strong>Familia:</strong> {ave.familiaComun}
                          </div>
                        )}
                        {ave.orden && (
                          <div className="info-item">
                            <strong>Orden:</strong> {ave.orden}
                          </div>
                        )}
                      </div>

                      <div className="card-footer">
                        <button
                          className="btn-details"
                          onClick={() => setSelectedAve(ave)}
                        >
                          Ver Detalles →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="results-info">
                Se encontraron{" "}
                <span className="results-count">{aves.length}</span> ave
                {aves.length !== 1 ? "s" : ""}
              </div>
            </>
          )}

          {/* Mensaje Vacío */}
          {!loading && aves.length === 0 && !error && (
            <div className="empty-state">
              <div className="empty-icon">🦉</div>
              <h3 className="empty-title">Bienvenido a Aves de Chile</h3>
              <p className="empty-text">
                Usa los botones arriba para buscar o ver las aves disponibles
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Detalles */}
      {selectedAve && (
        <AveModal ave={selectedAve} onClose={() => setSelectedAve(null)} />
      )}
    </div>
  );
}

export default App;
