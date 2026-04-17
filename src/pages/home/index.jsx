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
import MotoDescripcion from '../../components/descripcionmoto';

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
      titulo: 'Cilindraje',
      descripcion: '149 cc',
    },
    {
      titulo: 'Potencia',
      descripcion: '11.8 HP @ 8000 rpm',
    },
    {
      titulo: 'Torque',
      descripcion:  '11.6 Nm @ 6000 rpm',
    },
    {
      titulo: 'Transmisión',
      descripcion: '5 velocidades',
    },
    {
      titulo: 'Peso',
      descripcion:  '139 kg',
    },
    {
      titulo: 'Altura al suelo',
      descripcion:  '244 mm',
    },
    {
      titulo: 'Freno delantero',
      descripcion:  'Disco con ABS',
    },
    {
      titulo: 'Freno trasero',
      descripcion:  'Tambor',
    },
  ];
  const jsonItemsTecnicos_2 = [
    {
      titulo: 'Cilindraje',
      descripcion: '162 cc',
    },
    {
      titulo: 'Potencia',
      descripcion: '14.75 HP @ 8000 rpm',
    },
    {
      titulo: 'Torque',
      descripcion:  '14 Nm @ 6500 rpm',
    },
    {
      titulo: 'Transmisión',
      descripcion: '5 velocidades',
    },
    {
      titulo: 'Peso',
      descripcion:  '148 kg',
    },
    {
      titulo: 'Capacidad tanque',
      descripcion:  '13 L',
    },
    {
      titulo: 'Frenos',
      descripcion:  'Disco delantero y trasero con ABS',
    },
    {
      titulo: 'Altura al suelo',
      descripcion:  '160 mm',
    },
  ];
  const data = [
    {
      titulo: "Sistema de frenos ABS delantero",
      descripcion: "",
      imagen: "/images/Suzukidr.png"
    },
    { titulo: "Motor confiable y eficiente" },
    { titulo: "Ideal para ciudad y caminos rurales" },
    { titulo: "Puerto de carga USB" },
    { titulo: "Tablero digital" },
    { titulo: "Gran altura al suelo (perfecta para terrenos difíciles)" },
    { titulo: "Posición de manejo cómoda para trayectos largos" }
  ];

  const data_2 = [
    {
      titulo: "Sistema ABS doble canal",
      descripcion: "",
      imagen: "/images/suzukivst.png"
    },
    { titulo: "Diseño tipo adventure touring" },
    { titulo: "Iluminación full LED" },
    { titulo: "Tablero digital" },
    { titulo: "Puerto de carga USB" },
    { titulo: "Llantas doble propósito" },
    { titulo: "Ergonomía cómoda para viajes" }
  ];
  const descripcion1 = textoCompleto.slice(0, puntoDivision).trim();
  const descripcion2 = textoCompleto.slice(puntoDivision).trim();
  return (
    <div style={{ background: '#000' }}>
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
                {/* <p className="pioneros__home" style={{ color: configuracionData?.colorCuerpo }}>
                  Pioneros en
                </p> */}
                <p className="tecnologia__home" style={{ color: configuracionData?.colorTituloHome }}>
                 Tecnologías Suzuki Motocicletas
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
                  ImagenMoto="/images/Suzukidr.png"
                  Titulo='Desde $10.590.000 (financiada) / $10.990.000 contado'
                  Subtitulo='SUZUKI DR 150 ABS'
                  Descripcion_1='Desafía cualquier terreno con seguridad y confianza. Una doble propósito diseñada para rendir tanto en la ciudad como fuera del asfalto, combinando resistencia, comodidad y tecnología ABS.'
                  Descripcion_2=''
                  Transmision='5 velocidades'
                  Cilindraje='149 CC'
                  Motor='11.8 HP @ 8000 rpm'
                  ColorTitulo={configuracionData?.colorTituloHome || ''}
                  ColorCuerpo={configuracionData?.colorCuerpo || ''}
                />
                {/* ))} */}
              </div>
              <section className="row contenido__label__Especificacion text-center my-5">
          <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: 'white' }}>
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
        <div style={{paddingBottom:'50px'}}>
      <MotoDescripcion data={data} urlimag='/images/Suzukidr.png'/>
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
        <div style={{ background: '#000' }}>
          <div className="container">
            <div style={{paddingBottom:'50px'}}>
            <MotoDescripcion data={data_2} urlimag='/images/suzukivst.png' op='2'/>
          </div>

            <section className="row contenido__label__Especificacion text-center my-5">
              <label className="EspecificacionesTecnicas__Titulo__Home" style={{ color: 'white' }}>
                ESPECIFICACIONES TÉCNICAS
              </label>
            </section>

            <div className="row g-4 mb-5">
              {jsonItemsTecnicos_2.map((item, idx) => (
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
