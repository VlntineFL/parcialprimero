import React, { useState } from 'react';

const Componente = () => {

  const [numero, setNumero] = useState('');

  const cambiar = () => {
    var horas = Math.floor(numero / 3600);
    horas = (horas < 10)? '0' + horas : horas;
    var minutos = Math.floor((numero / 60) % 60);
    minutos = (minutos < 10)? '0' + minutos : minutos;
    var segundos = numero % 60;
    segundos = (segundos < 10)? '0' + segundos : segundos;

    console.log(`${horas} horas, ${minutos} minutos y ${segundos} segundos`);
  }

  const obtener = (evt) => {
    setNumero(evt.target.value)
  }

  return (
    <>
      <input type='number' placeholder='Ingrese los segundos' value={numero} onChange={(e) => obtener(e) } />
      <button onClick={cambiar}>cambiar</button>
    </>
  );
}

export default Componente;