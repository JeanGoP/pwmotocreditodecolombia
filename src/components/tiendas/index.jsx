import React from 'react';
import './tiendasGrid.css';

export default function TiendasGrid({ sucursales }) {
  console.log(sucursales);

  return (
    <section className="tiendas-section">
      <h2 className="tiendas-title">
        <span className="linea"></span>
        NUESTRAS TIENDAS
      </h2>

      <div className="tiendas-grid">
        {sucursales[0].map((item, index) => (
          <div className="tienda-card" key={index}>
            <img src={item.imagen} alt={item.sede} className="tienda-img" />

            <div className="tienda-info">
              <h3>{item.sede}</h3>

              <p className="direccion">📍 {item.direccion}</p>

              <p className="telefono">📞 (+57) {item.telefono}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
