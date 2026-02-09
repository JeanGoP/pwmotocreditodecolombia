import React, { useEffect, useState, useContext } from 'react';
import './visitanos.css';
import CardPuntosVentas from '../../components/cardPuntosVentas';
import { jsonPuntosVentas, jsonpuntosNuestor } from '../../constants/constants';
import { LanguageContext } from '../../context/context';
import TiendasGrid from '../../components/tiendas';
export function Visitanos() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  let sucursales = [];
  let sucursales2 = [];

  sucursales = jsonPuntosVentas;
  sucursales2 = jsonpuntosNuestor;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="fondoImmagen">
      <section
        className="visitanos-hero"
        style={{
          backgroundImage: `url('${configuracionData?.rutaPortadaVisitanos}')`,
        }}
      >
        <div className="visitanos-hero-overlay"></div>

        <div className="container h-100 d-flex align-items-center justify-content-center text-center">
          <div style={{ color: 'white', zIndex: '1' }}>
            <h2 className="visitanos-hero-title">Visita nuestras sedes</h2>
            <div style={{ color: 'white' }}>En el mapa encontraras nuestras sedes ¡VEN VISITANOS!</div>
          </div>
        </div>
      </section>

      {/* <TiendasGrid sucursales={sucursales2} /> */}
      <div className="row row__Visitanos__ubicacion">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="ratio ratio-4x3 custom-map">
            <iframe
              id="iframeMaps"
              src="https://www.google.com/maps/d/embed?mid=1K34MhcD86qEmIA613qweMKTw-IEMOQM&ehbc=2E312F"
              //  src={configuracionData?.rutaGoogleMaps}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 contenido__cardPuntosVentas__Visitanos">
          <div className="container">
            {sucursales.map((item, indice) => (
              <CardPuntosVentas
                key={indice}
                Nombre={item.nombre}
                Direccion={item.direccion}
                Telefono={item.telefono}
                // RutaGoogleMaps = {item.rutaSucursalGoogle}
                RutaGoogleMaps={item.ruta}
                // ColorCard={configuracionData?.colorCard}
                // ColorLetras={configuracionData?.colorLetras}
                ColorCard="#ffff"
                ColorLetras="#000000"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
