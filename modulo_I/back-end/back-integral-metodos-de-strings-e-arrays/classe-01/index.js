const comentario = "Esse é muito perigoso!";

console.log(`${(comentario.toLocaleLowerCase().includes('covid') || comentario.toLocaleLowerCase().includes('pandemia')) ? 'Comentário bloqueado por conter palavras proibidas' : 'Comentário autorizado'}`);