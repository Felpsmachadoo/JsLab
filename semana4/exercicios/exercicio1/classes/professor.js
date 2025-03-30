class Professor extends Pessoa {
  constructor(
    nome,
    email,
    date,
    homePhone,
    cellPhone,
    matricula,
    area,
    lattes
  ) {
    super(nome, email, date, homePhone, cellPhone, matricula);

    this.area = area;
    this.lattes = lattes;
  }
}
