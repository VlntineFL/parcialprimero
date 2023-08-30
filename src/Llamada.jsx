import React, { useState } from 'react';

function CalculadorCostoLlamada() {
  const [minutos, setMinutos] = useState(0);
  const [costo, setCosto] = useState(0);

  const calcularCosto = (evt) => {
    const minutos = parseInt(evt.target.value, 10);
    let costo = minutos <= 3 ? 100 : 100 + (minutos - 3) * 50;
    setMinutos(minutos);
    setCosto(costo);
  };

  return (
    <div>
      <input type="number" onChange={calcularCosto} placeholder="Minutos" />
      <p>Costo total: {costo} pesos</p>
    </div>
  );
}

export default CalculadorCostoLlamada;

