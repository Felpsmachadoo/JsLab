function updateForm() {
  const alunoRadio = document.querySelector("#inputStudant");
  const teacherRadio = document.querySelector("#inputTeacher");
  const campoArea = document.querySelector(".area-container");
  const campoLattes = document.querySelector(".lattes-container");
  const campoCurso = document.querySelector(".curso-container");

  if (!alunoRadio.checked && !teacherRadio.checked) {
    campoArea.style.display = "none";
    campoLattes.style.display = "none";
    campoCurso.style.display = "none";
  } else if (alunoRadio.checked) {
    campoCurso.style.display = "block";
    campoArea.style.display = "none";
    campoLattes.style.display = "none";
  } else if (teacherRadio.checked) {
    campoArea.style.display = "block";
    campoLattes.style.display = "block";
    campoCurso.style.display = "none";
  }
}

function resetForm() {
  const form = document.querySelector(".form");

  form.reset();

  const campoArea = document.querySelector(".area-container");
  const campoLattes = document.querySelector(".lattes-container");
  const campoCurso = document.querySelector(".curso-container");

  campoArea.style.display = "none";
  campoLattes.style.display = "none";
  campoCurso.style.display = "none";

  const radioButtons = document.querySelectorAll('input[name="role"]');
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateForm();

  const alunoRadio = document.querySelector("#inputStudant");
  const teacherRadio = document.querySelector("#inputTeacher");

  alunoRadio.addEventListener("change", updateForm);
  teacherRadio.addEventListener("change", updateForm);

  const resetButton = document.querySelector("#reset-form");
  resetButton.addEventListener("click", resetForm);
});
