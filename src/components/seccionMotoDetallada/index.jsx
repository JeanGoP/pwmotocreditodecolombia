import React from 'react';
import { mix } from 'polished';
import './index.css';
function isValidHex(color) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

const SeccionMotoDetallada = ({ ImagenMoto, Titulo, Subtitulo, Descripcion_1, Descripcion_2, Motor, Cilindraje, Transmision, ColorTitulo, ColorCuerpo }) => {
  const gray = '#808080';
  let newColor = gray;
  // if (ColorCuerpo && isValidHex(ColorCuerpo)) {
  //   newColor = mix(0.5, gray, ColorCuerpo);
  // }
  return (
    <div className="row contenido__seccionMotoDetallada h-100">
      <div className="col-lg-5 col-md-7 col-sm-12 mb-4">
        <div className="card__SeccionMotoDetallada">
          <img src={ImagenMoto} className="card-img-top imagen__seccionMotoDetallada" alt="..." />
        </div>
      </div>
      <div className="col-lg-7 col-md-5 col-sm-12">
        <div className="descripcion__seccionMotoDetallada">
          <label className="titulo__seccionMotoDetallada" style={{ color: ColorCuerpo }}>
            {Titulo}
          </label>
          <br />
          <label className="subtitulo_seccionModoDetallada" style={{ color: ColorTitulo }}>
            {Subtitulo}
          </label>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <label className="_label_descripcion" style={{ color: ColorCuerpo }}>
              {Descripcion_1}
            </label>
          </div>
        </div>
        <div className="row footer__descripcion__seccionMotoDetallada div__detalle__border">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <label className="footer__label__seccionMotoDetallada" style={{ color: ColorCuerpo }}>
              POTENCIA
            </label>
            <p className="footer__p__seccionMotoDetallada" style={{ color: newColor }}>
              {Motor}
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <label className="footer__label__seccionMotoDetallada" style={{ color: ColorCuerpo }}>
              CILINDRAJE
            </label>
            <p className="footer__p__seccionMotoDetallada" style={{ color: newColor }}>
              {Cilindraje}
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <label className="footer__label__seccionMotoDetallada" style={{ color: ColorCuerpo }}>
              TRANSMISIÓN
            </label>
            <p className="footer__p__seccionMotoDetallada" style={{ color: newColor }}>
              {Transmision}
            </p>
          </div>
        </div>
        <div className="row footer__descripcion__seccionMotoDetallada">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="footer__div__seccionDetallada"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="footer__div__seccionDetallada"></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="footer__div__seccionDetallada"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccionMotoDetallada;
