document.getElementById("agendamentoForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const requiredFields = [
    "nome", "sobrenome", "cpf", "dataNascimento",
    "telefone", "cep", "endereco", "clinica", "especialidade", "dataHora"
  ];

  for (let id of requiredFields) {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      field.focus();
      return;
    }
  }

  const dataHora = new Date(document.getElementById("dataHora").value);
  const agora = new Date();
  if (dataHora <= agora) {
    alert("A data e hora do agendamento deve ser futura.");
    return;
  }

  const dados = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    cpf: document.getElementById("cpf").value,
    dataNascimento: document.getElementById("dataNascimento").value,
    telefone: document.getElementById("telefone").value,
    cep: document.getElementById("cep").value,
    endereco: document.getElementById("endereco").value,
    clinica: document.getElementById("clinica").value,
    especialidade: document.getElementById("especialidade").value,
    dataHora: document.getElementById("dataHora").value,
    observacao: document.getElementById("observacao").value
  };

  fetch("/agendar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    document.getElementById("agendamentoForm").reset();
  })
  .catch(error => {
    console.error("Erro ao agendar:", error);
    alert("Erro ao agendar a consulta.");
  });
});
