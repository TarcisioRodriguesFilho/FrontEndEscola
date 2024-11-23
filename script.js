// Cadastro de Alunos
const formAluno = document.getElementById('formAluno');
formAluno?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nomeAluno').value;
  const dataNascimento = document.getElementById('dataNascimentoAluno').value;
  const turma = document.getElementById('turmaAluno').value;

  alert(`Aluno cadastrado com sucesso!\nNome: ${nome}\nData de Nascimento: ${dataNascimento}\nTurma: ${turma}`);
  formAluno.reset();
});

// Cadastro de Funcionários
const formFuncionario = document.getElementById('formFuncionario');
formFuncionario?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nomeFuncionario').value;
  const cargo = document.getElementById('cargoFuncionario').value;
  const nif = document.getElementById('nifFuncionario').value;

  alert(`Funcionário cadastrado com sucesso!\nNome: ${nome}\nCargo: ${cargo}\nNIF: ${nif}`);
  formFuncionario.reset();
});

// Cadastro de Materiais
const formMaterial = document.getElementById('formMaterial');
formMaterial?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nomeMaterial').value;
  const tipo = document.getElementById('tipoMaterial').value;
  const quantidade = document.getElementById('quantidadeMaterial').value;

  alert(`Material cadastrado com sucesso!\nNome: ${nome}\nTipo: ${tipo}\nQuantidade: ${quantidade}`);
  formMaterial.reset();
});

// Cadastro de Patrimônios
const formPatrimonio = document.getElementById('formPatrimonio');
formPatrimonio?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nomePatrimonio').value;
  const codigo = document.getElementById('codigoPatrimonio').value;
  const localizacao = document.getElementById('localizacaoPatrimonio').value;

  alert(`Patrimônio cadastrado com sucesso!\nNome: ${nome}\nCódigo: ${codigo}\nLocalização: ${localizacao}`);
  formPatrimonio.reset();
});
