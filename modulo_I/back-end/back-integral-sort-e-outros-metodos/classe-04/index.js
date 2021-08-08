const palavras = ['livro', 'sol', 'carro'];

console.log(`${palavras.some(x => x.length > 5) ? "existe palavra inválida" : "array validado"}`);