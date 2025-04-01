function counterApp() {
  const app = document.getElementById("App");

  // Criar container principal
  const container = document.createElement("div");
  container.classList.add("container");

  // Criar totalizador
  const totalLabel = document.createElement("div");
  totalLabel.classList.add("total");
  totalLabel.textContent = "Total";
  container.appendChild(totalLabel);

  const totalCount = document.createElement("input");
  totalCount.setAttribute("type", "text");
  totalCount.setAttribute("readonly", true);
  totalCount.value = 0;
  container.appendChild(totalCount);

  // Criar contadores individuais
  let menCount = 0;
  let womenCount = 0;

  function updateTotal() {
    totalCount.value = menCount + womenCount;
  }

  function createCounter(name, imageSrc, getCount, setCount) {
    const counterDiv = document.createElement("div");
    counterDiv.classList.add("counter");

    const img = document.createElement("img");
    img.src = imageSrc;
    counterDiv.appendChild(img);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "−";
    minusBtn.onclick = () => {
      if (getCount() > 0) {
        setCount(getCount() - 1);
        countDisplay.textContent = getCount();
        updateTotal();
      }
    };

    const countDisplay = document.createElement("span");
    countDisplay.textContent = "0";

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.onclick = () => {
      setCount(getCount() + 1);
      countDisplay.textContent = getCount();
      updateTotal();
    };

    buttonsDiv.appendChild(minusBtn);
    buttonsDiv.appendChild(countDisplay);
    buttonsDiv.appendChild(plusBtn);

    counterDiv.appendChild(buttonsDiv);

    const label = document.createElement("div");
    label.textContent = name;
    counterDiv.appendChild(label);

    container.appendChild(counterDiv);

    return countDisplay;
  }

  const menDisplay = createCounter(
    "Homens",
    "https://cdn-icons-png.flaticon.com/512/1995/1995579.png",
    () => menCount,
    (val) => (menCount = val)
  );

  const womenDisplay = createCounter(
    "Mulheres",
    "https://cdn-icons-png.flaticon.com/512/1995/1995577.png",
    () => womenCount,
    (val) => (womenCount = val)
  );

  // Criar botão de reset
  const resetButton = document.createElement("button");
  resetButton.classList.add("reset");
  resetButton.innerHTML = "🔄";
  resetButton.onclick = () => {
    menCount = 0;
    womenCount = 0;
    menDisplay.textContent = "0";
    womenDisplay.textContent = "0";
    updateTotal();
  };

  container.appendChild(resetButton);
  app.appendChild(container);
}

counterApp();
