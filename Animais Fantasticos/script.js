// // Retorne no console todas as imagens do site

// const imgsSite = document.getElementsByTagName('img');
// console.log(imgsSite);

// // Retorne no console apenas as imagens que começaram com a palavra imagem

// const imgNameImagem = document.querySelectorAll('img[src^="img/imagem"]');
// console.log(imgNameImagem)

// // Selecione todos os links interno (onde o href começa com #)
// const selectHref = document.querySelectorAll('a[href^="#"]');
// console.log(selectHref)


// // Selecione o primeiro h2 dentro de .animais-descricao
// const selectH2 = document.querySelector('h2');
// console.log(selectH2)

// // Selecione o último p do site

// const selectLastP = document.querySelectorAll('p');
// console.log(selectLastP[6]);

// Mostre no console cada parágrafo do site

// const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos);

// paragrafos.forEach((item) => {
//   console.log(item);
// });

// // Mostre o texto dos parágrafos no console

// paragrafos.forEach ((item) => {
//   console.log(item.innerText);
// });

// // Como corrigir os erros abaixo:

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;

// imgs.forEach(() => {console.log(i++)});

// imgs.forEach(() => i++);

// const menu = document.querySelector('.menu');

// menu.classList.add('ativo');
// menu.classList.remove('azul');
// menu.classList.toggle('azul'); 




// Adicione a classe ativo a todos os itens do menu

// const menuAtivos = document.querySelectorAll('.menu a');
// menuAtivos.forEach((item) => {
//     item.classList.add('ativo');
//   });

// // // Remova a classe ativo de todos os itens do menu e matenha apenas no primeiro
// // menuAtivos.forEach((item) => {
// //   item.classList.remove('ativo');
// // });

// // menuAtivos[0].classList.add('ativo');

// // // Verifique se as imagens possuem o atributo alt

// // const altImgs = document.querySelectorAll('img');

// // altImgs.forEach((img) => {
// //   const possuiAlt = img.hasAttribute('alt');
// //   console.log(img, possuiAlt);
// // });

// // Modifique o href do link esterno do menu

// const link = document.querySelector('a[href^="https"]');
// link.setAttribute('href', 'https://www.google.com');


