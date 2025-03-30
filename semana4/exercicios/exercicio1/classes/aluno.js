class Aluno extends Pessoa {
  constructor(nome, email, date, homePhone, cellPhone, matricula, curso) {
    super(nome, email, date, homePhone, cellPhone, matricula);
    this.curso = curso;
  }
}
