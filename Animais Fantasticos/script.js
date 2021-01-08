// Retorne no console todas as imagens do site

const imgsSite = document.getElementsByTagName('img');
console.log(imgsSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgNameImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgNameImagem)

// Selecione todos os links interno (onde o href começa com #)
const selectHref = document.querySelectorAll('a[href^="#"]');
console.log(selectHref)


// Selecione o primeiro h2 dentro de .animais-descricao
const selectH2 = document.querySelector('h2');
console.log(selectH2)

// Selecione o último p do site


