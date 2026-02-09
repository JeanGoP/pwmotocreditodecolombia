import React, { useContext } from 'react';
import './cotizador.css';
import { LanguageContext } from '../../context/context';
import { useEffect } from 'react';
export function Cotizador() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const rawProducto = localStorage.getItem('producto');

  const id_producto = rawProducto && rawProducto !== 'null' && rawProducto !== 'undefined' ? rawProducto : null;

  const rutaBase = configuracionData?.rutaCotizador;

  const rutaIframe = id_producto ? `${rutaBase}?producto=${id_producto}` : rutaBase;

  return (
    <div>
      {/* <div style={{background: "white"}}> */}
      <div className="FranjaClientes">
        <section
          className="visitanos-hero"
          style={{
            backgroundImage: `url('${configuracionData?.rutaPortadaVisitanos}')`,
          }}
        >
          <div className="visitanos-hero-overlay"></div>

          <div className="container h-100 d-flex align-items-center justify-content-center text-center">
            <div style={{ color: 'white', zIndex: '1' }}>
              <h2 className="visitanos-hero-title">Cotiza tu moto</h2>
              <div style={{ color: 'white' }}>Selecciona la moto que quieres comprar y llena los campos que encontrarás a continuación</div>
              <div style={{ color: 'white' }}>para que puedas recibir tu cotización y una atención más personalizada.</div>
            </div>
          </div>
        </section>
      </div>
      <div className="FondoCotizador">
        <div className="row" style={{ paddingTop: '20px' }}>
          <div className="col-md-12 coll-sm-12 row__iframe__Cotizador">
            <iframe
              id="cotizador"
              //   src="https://aburramotos.7-24.co/mercadeo/leads/iframe/2f4c07b6b8b5abfee7ed89cd0befe0dd/"
              src={rutaIframe}
              name="myIFrame"
              allow="geolocation"
              className="iframe__row__Cotizador"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
