import React, { useContext } from 'react';
import Carousel from '../../components/carousel';
import CardTecnologia from '../../components/cardTecnologia';
import { jsonCardTecnologia, jsonBarraPorcentaje, jsonLinkMarcas } from '../../constants/constants';
import SeccionMotoDetallada from '../../components/seccionMotoDetallada';
import BarraPorcentaje from '../../components/barraPorcentaje';
import SeccionBarraPorcentaje from '../../components/seccionBarraPorcentaje';
import TituloSeccionBarraPorcentaje from '../../components/tituloSeccionBarraPorcentaje';
import DescripcionSeccionBarraPorcentaje from '../../components/descripcionSeccionBarraPorcentaje';
import VideoPublicitario from '../../components/videoPublicitario';
import MarcasPublicitarias from '../../components/marcasPublicitaria';
import CatalogoMoto from '../../components/catalogoMoto';
import './home.css';
import { LanguageContext } from '../../context/context';
import CarruselAliados from './carousel';
import AnimatedCounter from './animator';
import { useEffect } from 'react';
import CarouselPeque from '../../components/carouselpeque';
import TecnologiaHonda from '../../components/tecnoloogia';

export function Home() {
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  const textoCompleto = configuracionData?.descripcionMoto_1 || '';
  const mitad = Math.floor(textoCompleto.length / 2);
  let puntoDivision = textoCompleto.indexOf(' ', mitad);
  if (puntoDivision === -1) puntoDivision = mitad;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const jsonItemsTecnicos = [
    {
      titulo: 'Arranque',
      descripcion: configuracionData?.arranqueMoto_2 || '',
    },
    {
      titulo: 'Alimentación',
      descripcion: configuracionData?.alimentacionMoto_2 || '',
    },
    {
      titulo: 'Torque máximo',
      descripcion: configuracionData?.torqueMoto_2 || '',
    },
    {
      titulo: 'Batería',
      descripcion: configuracionData?.bateriaMoto_2 || '',
    },
    {
      titulo: 'Transmisión',
      descripcion: configuracionData?.transmisionMoto_2 || '',
    },
    {
      titulo: 'Capacidad del Tanque',
      descripcion: configuracionData?.tanqueMoto_2 || '',
    },
    {
      titulo: 'Peso',
      descripcion: configuracionData?.pesoMoto_2 || '',
    },
    {
      titulo: 'Ancho',
      descripcion: configuracionData?.anchoMoto_2 || '',
    },
  ];

  const descripcion1 = textoCompleto.slice(0, puntoDivision).trim();
  const descripcion2 = textoCompleto.slice(puntoDivision).trim();
  return (
    <div style={{ background: '' }}>
      <div className="container-fluid conte--carousel">
        <div className="row justify-content-center">
          <div className="col-12">
            <Carousel img={configuracionData?.rutaImgCarrousel || ''} />
          </div>
        </div>
      </div>
      <div className="container-fluid conte--carousel" style={{ backgroundColor: 'black', paddingTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-8">
            <CarouselPeque img={configuracionData?.rutaImgCarrousel || ''} />
          </div>
        </div>
      </div>
      <div className="container-fluid conte--carousel" style={{ backgroundColor: 'black', paddingTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-10">
            {/* <TecnologiaHonda /> */}
            <main className="container">
              <div className="row row__pioneros__home text-center my-5">
                <p className="pioneros__home" style={{ color: configuracionData?.colorCuerpo }}>
                  Pioneros en
                </p>
                <p className="tecnologia__home" style={{ color: configuracionData?.colorTituloHome }}>
                  TECNOLOGÍA EFICIENTE Y ACCESIBLE
                </p>
              </div>

              <div className="row g-4">
                {jsonCardTecnologia.map((item, idx) => (
                  <CardTecnologia
                    key={item.id || idx}
                    Titulo={item.titulo}
                    Texto={item.texto}
                    Imagen={item.imagen}
                    // Color={configuracionData?.colorCuerpo}
                    Color={'#0e60ad'}
                    // ColorFondo={configuracionData?.colorPagina}
                    ColorFondo={'#eeeeee'}
                  />
                ))}
              </div>
              <div className="row div__padding__centro my-5" style={{ position: 'relative' }}>
                {/* {jsonSeccionMotoDetallada.map((item, idx) => ( */}
                <SeccionMotoDetallada
                  key="UYTZ"
                  ImagenMoto="/images/motoSeccion.jpg"
                  Titulo={configuracionData?.tituloMoto_1 || ''}
                  Subtitulo={configuracionData?.subTituloMoto_1 || ''}
                  Descripcion_1={descripcion1}
                  Descripcion_2={descripcion2}
                  Transmision={configuracionData?.transmisionMoto_1 || ''}
                  Cilindraje={configuracionData?.cilindrajeMoto_1 || ''}
                  Motor={configuracionData?.motorMoto_1 || ''}
                  ColorTitulo={configuracionData?.colorTituloHome || ''}
                  ColorCuerpo={configuracionData?.colorCuerpo || ''}
                />
                {/* ))} */}
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  backgroundColor: configuracionData?.colorFranja || '#222',
                  color: 'white',
                  padding: '1rem',
                  zIndex: 999,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                  }}
                >
                  <AnimatedCounter target={configuracionData?.tiempoExperiencia || 0} suffix="+" label="Años de Experiencia" />
                  <AnimatedCounter target={configuracionData?.clientesFelices || 0} suffix="+" label="Clientes Felices" />
                  <AnimatedCounter target={configuracionData?.ventas || 0} suffix="+" label="Ventas" />
                  <AnimatedCounter target={configuracionData?.puntosVentas || 0} label="Puntos de Venta" />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div>
        <div style={{ background: '#000000' }}>
          <div className="container-fluid">
            <div className="row  justify-content-center " style={{ position: 'relative' }}>
              {/* {jsonSeccionMotoDetallada.map((item, idx) => ( */}
              <div className="col-9">{/* <SeccionMotoDetallada /> */}</div>
              {/* ))} */}
            </div>
          </div>
        </div>

        <div style={{ background: 'black' }}>
          <div className="container">
            <div className="row mb-0" id="contenidoMotocicleta">
              <CatalogoMoto ColorTitulo={configuracionData?.colorTituloHome || ''} ColorPagina={configuracionData?.colorPagina || ''} />
            </div>
          </div>
        </div>
        <div style={{ background: '#eeeeee' }}>
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                <img src="/images/pulsarns200.png" alt="Moto Pulsar NS200" className="img-fluid " style={{ width: '100%', height: 'auto' }} />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <TituloSeccionBarraPorcentaje
                  Titulo={configuracionData?.tituloMoto_2 || ''}
                  Subtitulo={configuracionData?.subTituloMoto_2}
                  ColorSubtiutlo={configuracionData?.colorTituloHome || ''}
                  ColorCuerpo={configuracionData?.colorCuerpo || ''}
                />

                <div className="row gy-3 my-3">
                  {jsonBarraPorcentaje.map((item, idx) => (
                    <BarraPorcentaje
                      key={item.id || idx}
                      porcentaje={item.porcentaje}
                      color={item.color}
                      titulo={item.titulo}
                      ColorCuerpo={configuracionData?.colorCuerpo || ''}
                    />
                  ))}
                </div>

                <div className="row gy-3">
                  {/* {jsonSeccionBarraPorcentaje.map((item, idx) => ( */}
                  <SeccionBarraPorcentaje
                    key="PNTY"
                    Motor={configuracionData?.motorMoto_2 || ''}
                    Cilindraje={configuracionData?.cilindrajeMoto_2 || ''}
                    potencia={configuracionData?.maximaPotencianMoto_2 || ''}
                    ColorCuerpo={configuracionData?.colorCuerpo || ''}
                  />
                  {/* ))} */}
                </div>
              </div>
            </div>

            <section className="row contenido__label__Especificacion text-center my-5">
              <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: configuracionData?.colorCuerpo }}>
                ESPECIFICACIONES TÉCNICAS
              </label>
            </section>

            <div className="row g-4 mb-5">
              {jsonItemsTecnicos.map((item, idx) => (
                <DescripcionSeccionBarraPorcentaje
                  key={item.titulo || idx}
                  Titulo={item.titulo}
                  Descripcion={item.descripcion}
                  ColorCuerpo={configuracionData?.colorCuerpo}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="conten--video--youtube">
          <div>
            <div className="row--video--youtube--">
              <VideoPublicitario Link={configuracionData?.rutaYoutube} />
            </div>
          </div>
        </div>
        {/* </main> */}

        {/* <div className="FranjaClientes">
          <main className="container" style={{ padding: '1px' }}>
            <section className="row contenido__label__Especificacion text-center my-5 m-3">
              <label className="NuestraAliado__Titulo__Home" style={{ color: '#000' }}>
                FINANCIERAS
              </label>
              <CarruselAliados colorTitulo={configuracionData?.colorTituloHome} />
            </section>
          </main>
        </div> */}
        {/* <div style={{ background: '#eeeeee' }}>
          <div className="contenido__NuestrasMarcas__Home" style={{ background: '#003f74', paddingTop: '40px' }}>
            <div className="container">
              <section className="row text-center" style={{ paddingBottom: '30px' }}>
                <label className="TituloNuestraMarca">NUESTRAS MARCAS</label>
              </section>

              <div className="row g-3 justify-content-center mb-1">
                {jsonLinkMarcas.map((item, idx) => (
                  <MarcasPublicitarias key={item.id || idx} Link={item.url} />
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
