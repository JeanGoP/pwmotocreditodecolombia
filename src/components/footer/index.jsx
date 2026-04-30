import React, { useContext } from 'react';
import { FaFacebook, FaAngleRight } from 'react-icons/fa';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/context';
import './footer.css';

function Footer() {
  const rutalogin = useNavigate();
  const { empresa } = useContext(LanguageContext);
  const { configuracionData = {} } = useContext(LanguageContext);

  const handlePagina = (ruta, seccionId = null) => {
    localStorage.setItem('producto', '');
    if (ruta === '/' && seccionId) {
      rutalogin(ruta);
      setTimeout(() => {
        const elemento = document.getElementById(seccionId);
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        rutalogin(ruta);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400);
      }, 300);
    }
  };
  const handleClickWhatsapp = () => {
    const telefono = '57' + configuracionData?.whatsapp;
    const mensaje = 'Hola, quiero más información';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  };
  const url_logo = '/images/logoSabanamotos.png';
  return (
    <footer className="contenido__Footer" style={{ backgroundColor: 'black' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 contenido__logo__footer">
            <div className="row contenido__logo__footer">
              <img src={url_logo} alt={configuracionData?.empresa || 'Logotipo'} className="logo__Footer" />
            </div>

            <div className="row">
              <p className="TitulosFooter">REDES SOCIALES</p>
              <div className="col-lg-12 col-md-12 col-sm-12 d-flex gap-4 contenido__logo__footer">
                <a className="clickable icono_footer" target="_blank" rel="noreferrer" href={configuracionData?.rutaFacebook || ''}>
                  <FaFacebook size={25} />
                </a>{' '}
                <a className="clickable icono_footer" target="_blank" rel="noreferrer" href={configuracionData?.rutaInstagram || ''}>
                  <FaInstagram size={25} />
                </a>{' '}
                <a className="clickable icono_footer" target="_blank" rel="noreferrer" onClick={handleClickWhatsapp}>
                  <FaWhatsapp size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="row">
              <p className="TitulosFooter">EXPLORA</p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/')}>
                {' '}
                INICIO
              </p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/', 'catalogo-motos')}>
                {' '}
                MOTOS
              </p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/cotizacion')}>
                {' '}
                COTIZAR MOTO
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="row">
              <p className="TitulosFooter">NOSOTROS</p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/visitanos')}>
                {' '}
                PUNTOS DE VENTA
              </p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/postventa')}>
                POSTVENTE
              </p>
            </div>
            <div className="row">
              <p className="clickable" onClick={() => handlePagina('/tratamientoDatos')}>
                {' '}
                TRATAMIENTO DE DATOS
              </p>
            </div>
            <div className="row">
              <a
                className="clickable icono_footer"
                style={{ textDecoration: 'none' }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSftlDgsSffN3TV2fwDkugxy_JDzegCGVwlQTR2WrUvoXDxv2Q/viewform?usp=pp_url"
                target="_blank"
              >
                PQRSF
              </a>
            </div>
            <div className="row" style={{ paddingTop: '13px' }}>
              <a
                className="clickable icono_footer"
                href="https://lineaetica.onrender.com/?empresa=Motocredito"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                LÍNEA ÉTICA
              </a>
            </div>
          </div>
        </div>
        <div className="row" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="col-12" style={{ paddingTop: '30px' }}>
            <p style={{ fontSize: '15px' }}>Copyright © 2024. MOTOCREDITO DE COLOMBIA S.A.S, All rights reserved | Develop By @Sidecil SAS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
