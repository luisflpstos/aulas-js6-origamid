// for (let i = 0; i < 80; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }


// let videoGames = ['Switch', 'PS5', '3DS', 'Nintendo 64'];

// for (let i = 0; i < 4; i++) {
//   console.log(videoGames[i]);
//   if(videoGames[i] === 'PS5') {
//     break;
//   }
// }

// let videoGames = ['Switch', 'PS5', '3DS', 'Nintendo 64'];

// videoGames.forEach(function(item, index, array) {
//   console.log(item, index, array);
// })





//Retorne o rul da página atual utilizando o objetio window

const urlPagina = window.location.href;
console.log('Essa é a URL no momento', urlPagina);

// Selecione o primeiro elemento da página que possua a classe ativo

// const classSelected = document.getElementsByClassName('ativo');
// console.log(classSelected);

const classSelected2 = document.querySelector('.ativo');
console.log(classSelected2);


// retorne a linguagem do navegador

const navigatorLanguage = window.navigator.language;
console.log(navigatorLanguage);

// retorne a largura da janela

const windowsWidth = window.innerWidth;
console.log(windowsWidth);


 