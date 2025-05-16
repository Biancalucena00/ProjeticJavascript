const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let linhas, colunas;
let matriz = [];
let linhaAtual = 0;

// Etapa 1: Perguntar número de linhas
rl.question('Quantas linhas terá a matriz? ', (respostaLinhas) => {
  linhas = parseInt(respostaLinhas);

  // Etapa 2: Perguntar número de colunas
  rl.question('Quantas colunas terá a matriz? ', (respostaColunas) => {
    colunas = parseInt(respostaColunas);

    console.log(`\nDigite os valores da matriz (${linhas}x${colunas}):`);

    // Iniciar leitura dos valores
    lerLinha();
  });
});

// Função para ler os valores de cada linha da matriz
function lerLinha() {
  if (linhaAtual < linhas) {
    rl.question(`Digite os ${colunas} valores da linha ${linhaAtual + 1}, separados por espaço: `, (entrada) => {
      let valores = entrada.split(' ').map(Number);

      if (valores.length !== colunas) {
        console.log(`⚠️  Você precisa digitar exatamente ${colunas} valores.`);
        lerLinha();
        return;
      }

      matriz.push(valores);
      linhaAtual++;
      lerLinha();
    });
  } else {
    rl.close(); // finaliza a leitura

    console.log("\n🟩 Matriz Original:");
    imprimirMatriz(matriz);

    let transposta = transporMatriz(matriz);

    console.log("\n🔄 Matriz Transposta:");
    imprimirMatriz(transposta);
  }
}

// Função para transpor a matriz
function transporMatriz(A) {
  let transposta = [];

  for (let i = 0; i < A[0].length; i++) {
    transposta[i] = [];
    for (let j = 0; j < A.length; j++) {
      transposta[i][j] = A[j][i];
    }
  }

  return transposta;
}

// Função para imprimir uma matriz no terminal
function imprimirMatriz(M) {
  for (let i = 0; i < M.length; i++) {
    console.log(M[i].join(' '));
  }
}
