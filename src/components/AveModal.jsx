import { useEffect, useState } from "react";

function AveModal({ ave, onClose }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Modal - Página Secundaria Profesional */}
      <div className="modal-box modal-secondary-page">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-content">
            <h2 className="modal-title">{ave.nombreComun}</h2>
            <p className="modal-subtitle">{ave.nombreCientifico}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Body - Two Column Layout */}
        <div className="modal-body modal-body-secondary">
          {/* Columna Izquierda - Imagen */}
          <div className="modal-column modal-column-image">
            <div className="modal-image-container">
              {ave.imagenUrl && !imageError ? (
                <img
                  src={ave.imagenUrl}
                  alt={ave.nombreComun}
                  className="modal-image modal-image-large"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="modal-image-placeholder modal-image-placeholder-large">
                  📷
                </div>
              )}
            </div>
            {(imageError || !ave.imagenUrl) && (
              <p className="image-note">
                No hay imagen disponible para esta especie
              </p>
            )}
          </div>

          {/* Columna Derecha - Información */}
          <div className="modal-column modal-column-info">
            {/* Sección 1 */}
            <div className="info-section">
              <h4 className="section-title">Identificación</h4>
              <div className="info-item-row">
                <div className="info-item-single">
                  <span className="info-label">Nombre Común</span>
                  <div className="info-value-large">{ave.nombreComun}</div>
                </div>
              </div>
              <div className="info-item-row">
                <div className="info-item-single">
                  <span className="info-label">Nombre Científico</span>
                  <div className="info-value-scientific">
                    {ave.nombreCientifico}
                  </div>
                </div>
              </div>
            </div>

            {/* Divisor */}
            <div className="info-divider"></div>

            {/* Sección 2 */}
            <div className="info-section">
              <h4 className="section-title">Clasificación Taxonómica</h4>
              <div className="info-grid-2">
                <div className="info-item">
                  <span className="info-label">Orden</span>
                  <div className="info-value">
                    {ave.orden || "No disponible"}
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-label">Familia Común</span>
                  <div className="info-value">
                    {ave.familiaComun || "No disponible"}
                  </div>
                </div>
              </div>
              <div className="info-grid-2">
                <div className="info-item">
                  <span className="info-label">Familia Científica</span>
                  <div className="info-value" style={{ fontStyle: "italic" }}>
                    {ave.familiaCientifica || "No disponible"}
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-label">Categoría</span>
                  <div className="info-value">
                    {ave.categoria || "No disponible"}
                  </div>
                </div>
              </div>
            </div>

            {/* Divisor */}
            <div className="info-divider"></div>

            {/* Sección 3 */}
            <div className="info-section">
              <h4 className="section-title">Código de Especie</h4>
              <div className="code-block">
                <code>{ave.codigoEspecie}</code>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer modal-footer-secondary">
          <button className="btn-modal btn-modal-close" onClick={onClose}>
            ✕ Cerrar
          </button>
          {ave.imagenUrl && (
            <a
              href={ave.imagenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modal btn-modal-link"
            >
              🔗 Ver en Wikimedia
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default AveModal;
