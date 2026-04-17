import React, { useState } from "react";
import "./MotoDescripcion.css";

const MotoDescripcion = ({data, op = '1', urlimag}) => {


  const [activo, setActivo] = useState(data[0]);

  return (
    <div className="container-fluid tech-section">
      <div className="row g-0">

        {/* Sidebar izquierda */}
        <div className="col-md-4 tech-sidebar">
          <h4 className="tech-title">Tecnologías</h4>

          <ul className="tech-list">
            {data.map((item, index) => (
              <li
                key={index}
                // className={activo.titulo === item.titulo ? "active" : ""}
                // onClick={() => setActivo(item)}
              >
                {item.titulo}
              </li>
            ))}
          </ul>
        </div>

        {/* Contenido derecha */}
        <div className="col-md-8 tech-content">
          <div className="tech-image">
          <img 
                src={urlimag} 
                alt="" 
                style={{ height: op === '1' ? '400px' : '550px' }} 
                />
          </div>

          <div className="tech-info">
            {/* <h2>{activo.titulo}</h2> */}
            
            {op === '1' ? (
    <>
      <p>Domina cualquier camino con control total.</p>
      <p>Hecha para el trabajo, lista para la aventura.</p>
      <p>Más seguridad, más confianza, más DR.</p>
    </>
  ) : op === '2' ? (
    <>
      <p>Explora más allá de la ciudad con comodidad y control.</p>
      <p>
        Una sport adventure diseñada para combinar rendimiento en carretera y
        versatilidad en terrenos mixtos.
      </p>
    </>
  ) : null}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MotoDescripcion;