import SliderContenidoHome from "../SliderContenidoHome/SliderContenidoHome"; 
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