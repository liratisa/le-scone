function verificaHorario() {
  const data = Date.now();
  const date = new Date(data);
  const dia = date.getDay();
  const hora = date.getHours();
  console.log(`data: ${data}`, date, dia, hora);

  if (dia >= 1 && 7 > dia && hora >= 7 && hora < 18) {
    alert("Estamos abertos!");
  } else {
    alert("Infelizmente, já encerramos nosso expediente.");
  }
}

verificaHorario();
