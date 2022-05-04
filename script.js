function verificaHorario() {
  const elemento = document.querySelector(".horario-funcionamento");
  const data = new Date();
  const dia = data.getDay();
  const hora = data.getHours();

  if (((dia) => 1 && dia < 7) && ((hora) => 7 && hora < 18)) {
    alert("Estamos abertos!");
  } else {
    alert("Infelizmente, já encerramos nosso expediente.");
  }
}

// verificaHorario();
