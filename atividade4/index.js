const express = require('express');
const app = express();
const port = 3000;

let estoque = [];

// Página inicial
app.get('/', (req, res) => {
  res.send(`
    <h2>Bem-vindo ao sistema de estoque!</h2>
    <p>Use as rotas abaixo:</p>
    <ul>
      <li><strong>/adicionar/:id/:nome/:qtd</strong> - Adiciona um produto</li>
      <li><strong>/listar</strong> - Lista todos os produtos</li>
      <li><strong>/remover/:id</strong> - Remove um produto</li>
      <li><strong>/editar/:id/:qtd</strong> - Edita a quantidade</li>
    </ul>
  `);
});

// Adicionar produto
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;
  if (estoque.find(p => p.id === id)) {
    return res.send('Produto já existe.');
  }
  estoque.push({ id, nome, qtd: parseInt(qtd) });
  res.send(`Produto ${nome} adicionado com sucesso.`);
});

// Listar produt
