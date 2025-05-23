const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./agendamentos.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS agendamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      sobrenome TEXT,
      cpf TEXT,
      dataNascimento TEXT,
      telefone TEXT,
      cep TEXT,
      endereco TEXT,
      clinica TEXT,
      especialidade TEXT,
      dataHora TEXT,
      observacao TEXT
    )
  `);
});

module.exports = db;
