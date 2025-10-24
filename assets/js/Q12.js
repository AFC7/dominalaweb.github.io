document.addEventListener("DOMContentLoaded", () => {
  const checkButton = document.getElementById("checkQuiz");
  const result = document.getElementById("quizResult");

  if (checkButton) {
    checkButton.addEventListener("click", () => {
      let score = 0;

      // ✅ Respuestas correctas para la Lección: Intro a CSS Avanzado
      const answers = {
        q1: "c",
        q2: "a",
        q3: "b"
      };

      Object.keys(answers).forEach(q => {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
          score++;
        }
      });

      const total = Object.keys(answers).length;
      result.textContent = `Tu puntaje: ${score} de ${total}`;

      if (score === total) {
        result.style.color = "green";
        result.textContent += " ¡Excelente!";
      } else if (score > 0) {
        result.style.color = "orange";
        result.textContent += " ¡Casi lo logras!";
      } else {
        result.style.color = "red";
        result.textContent += " ¡Repasa la lección!";
      }
    });
  }
});