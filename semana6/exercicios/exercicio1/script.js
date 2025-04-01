document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
      * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
      }
      body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: hsl(0, 0%, 90%);
      }
      button {
          width: 100px;
          height: 100px;
          border-radius: 50px;
          border: none;
          background-color: rgb(77, 77, 77);
          color: white;
          font-size: 3rem;
          font-weight: bold;
          cursor: pointer;
      }
      button:hover {
          background-color: hsl(0, 0%, 40%);
      }
      button:active {
          background-color: hsl(0, 0%, 50%);
      }
      .calculator {
          background-color: hsl(0, 0%, 15%);
          border-radius: 15px;
          max-width: 500px;
          overflow: hidden;
      }
      .display {
          width: 100%;
          padding: 20px;
          font-size: 5rem;
          text-align: left;
          border: none;
          background-color: hsl(0, 0%, 20%);
          color: white;
      }
      .keys {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          padding: 25px;
      }
      .operator-btn {
          background-color: hsl(39, 100%, 55%);
      }
      .operator-btn:hover {
          background-color: hsl(39, 100%, 65%);
      }
      .operator-btn:active {
          background-color: hsl(39, 100%, 75%);
      }
  `;
  document.head.appendChild(style);

  const app = document.getElementById("app");

  const calculator = document.createElement("div");
  calculator.classList.add("calculator");

  const display = document.createElement("input");
  display.type = "text";
  display.classList.add("display");
  display.readOnly = true;
  calculator.appendChild(display);

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("keys");

  buttons.forEach((text) => {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.add("button");
    if (["/", "*", "-", "+", "="].includes(text)) {
      button.classList.add("operator-btn");
    }

    button.addEventListener("click", () => {
      if (text === "C") {
        display.value = "";
      } else if (text === "=") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Erro";
        }
      } else {
        display.value += text;
      }
    });

    buttonsContainer.appendChild(button);
  });

  calculator.appendChild(buttonsContainer);
  app.appendChild(calculator);
});
