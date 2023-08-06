// SliderContenido.js

import  { useRef, useState } from 'react';
import SliderContenidoHome from "../SliderContenidoHome/SliderContenidoHome"; // Asegúrate de importar SliderContenidoHome correctamente

export const SliderContenido = ({ categoria,descripcion, imgData }) => {
  return (
    <div className='bloqueContenido'>
        <h3 className='tituloContenido'>
            {categoria}
        </h3>

        <p className='descripcionContenido'>
          {descripcion}
        </p>

        <SliderContenidoHome 
        imgData={imgData}
        />
    </div>
  )
}
