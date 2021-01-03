// function isTruthy(dado){
//   return !!dado;
// }


function perimetroQuadrado(lado) {
return lado * 4;
}

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

function isEven (numero) {
  const modulo = numero % 2;
  if (modulo === 0) {
    return true;
} else {
  return false;
}
