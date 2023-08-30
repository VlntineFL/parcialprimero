import React, { useState } from 'react';

function Saludo() {
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');
  const [mensaje, setMensaje] = useState('');

  const saludar = (evt) => {
    evt.preventDefault();
    let saludo = '';
    const horaInt = parseInt(hora);
    if (horaInt >= 6 && horaInt < 12) {
      saludo = 'Buenos días';
    } else if (horaInt >= 12 && horaInt < 20) {
      saludo = 'Buenas tardes';
    } else {
      saludo = 'Buenas noches';
    }
    setMensaje(`${saludo}, ${nombre}!`);
  };

  return (
    <form onSubmit={saludar}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(evt) => setNombre(evt.target.value)} />
      </label>
      <br />
      <label>
        Hora:
        <input type="number" value={hora} onChange={(evt) => setHora(evt.target.value)} />
      </label>
      <br />
      <button type="submit">Saludar</button>
      <p>{mensaje}</p>
    </form>
  );
}

export default Saludo;