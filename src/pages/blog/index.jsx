import React, { useEffect, useState, useContext } from 'react';
import './blog.css';
import { LanguageContext } from '../../context/context';
import CardBlog from '../../components/cardBlog';
import { jsonBlog } from '../../constants/constants';

export function Blog() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <h2 className="visitanos-hero-title">BLOG</h2>
            <div style={{ color: 'white' }}>Disfruta nuestra sección de artículos y blogs.</div>
          </div>
        </div>
      </section>

      <div className="container contenido__posventa">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="title-line">
              <span className="line"></span>
              <h5 style={{ fontFamily: '"Oswald", Sans-serif; !important' }}>Articulos</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12" style={{ color: 'white' }}>
            <h2>ARTÍCULOS Y NOTICIAS</h2>
          </div>
        </div>
        <div className="col-12" style={{ paddingTop: '30px' }}>
          {jsonBlog.map((item, index) => (
            <CardBlog key={index} titulo={item.titulo} fecha={item.fecha} imagen={item.imagen} objecto={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
