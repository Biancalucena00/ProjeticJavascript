const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/agendar", (req, res) => {
  const dados = req.body;

  const stmt = db.prepare(`
    INSERT INTO agendamentos 
    (nome, sobrenome, cpf, dataNascimento, telefone, cep, endereco, clinica, especialidade, dataHora, observacao)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    dados.nome,
    dados.sobrenome,
    dados.cpf,
    dados.dataNascimento,
    dados.telefone,
    dados.cep,
    dados.endereco,
    dados.clinica,
    dados.especialidade,
    dados.dataHora,
    dados.observacao || ""
  );

  stmt.finalize();
  res.json({ message: "Consulta agendada com sucesso!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
