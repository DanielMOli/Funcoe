function mensagem() {
  console.log(`Este é a primeira função 1#`)
};
function bomDia(nome) {
  console.log(`Bom dia ${nome} ! 2#`)
};
function gostos(nome,idade,musica) {
  console.log(`${nome}, sua idade é ${idade} e seu tipo de música preferida é ${musica}, certo ? 3#`)
};
function outros(filme, musica) {
  console.log(`E você gosta do filme ${filme} e da música ${musica}, né ? 4#`)
};
function math(numero) {
  console.log(`O triplo de ${numero} é ${numero*3} 5#`)
};
function verdadeiroOuFalso(variavel) {
  if ( variavel === true) {
    console.log(`Essa variável é verdadeira 6#`)
  } else {
    console.log(`Essa variável é falsa 6#`)
  }
};
 mensagem();
 bomDia("Daniel");
 gostos("Daniel", "17", "Synthpop");
 outros("Zatura", "After Darck");
 math(7);
 verdadeiroOuFalso(true);