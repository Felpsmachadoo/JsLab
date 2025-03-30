document.getElementById("carForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ano = parseInt(document.getElementById("ano").value);
  const cor = document.getElementById("cor").value;
  const km = parseInt(document.getElementById("km").value);
  const valor_fipe = parseFloat(document.getElementById("valor_fipe").value);

  const carro = {
    marca,
    modelo,
    ano,
    cor,
    km,
    valor_fipe,
    possui: function () {
      return `O carro ${this.marca} ${this.modelo} é de ${this.ano}`;
    },
    anosUtilizacao: function () {
      const currentYear = new Date().getFullYear();
      return currentYear - this.ano;
    },
    valorMercado: function () {
      const anosRodando = this.anosUtilizacao();
      let valor = this.valor_fipe;

      if (this.km / anosRodando <= 30000) {
        valor *= 1.1; // 110% do valor Fipe
      } else if (this.km / anosRodando <= 50000) {
        valor *= 1; // 100% do valor Fipe
      } else {
        valor *= 0.9; // 90% do valor Fipe
      }
      return valor.toFixed(2);
    },
  };

  const resultado = `
    <p>${carro.possui()}</p>
    <p>Este carro tem ${carro.anosUtilizacao()} anos de utilização.</p>
    <p>O valor de mercado do carro é: <br> R$ ${carro.valorMercado()}</p>
  `;

  document.getElementById("result").innerHTML = resultado;
});
