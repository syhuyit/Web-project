document.querySelectorAll(".question").forEach((question) => {
  const answers = question.querySelectorAll("input[type='radio']");

  answers.forEach((answer) => {
    answer.addEventListener("change", () => {
      // Nếu đã có đáp án bị disable thì không làm gì nữa
      if (answer.disabled) return;

      // reset màu trước
      answers.forEach((a) => {
        a.parentElement.classList.remove("correct", "wrong");
      });

      if (answer.dataset.correct === "true") {
        answer.parentElement.classList.add("correct");
      } else {
        answer.parentElement.classList.add("wrong");

        answers.forEach((a) => {
          if (a.dataset.correct === "true") {
            a.parentElement.classList.add("correct");
          }
        });
      }

      // khóa toàn bộ đáp án
      answers.forEach((a) => {
        a.disabled = true;
      });
    });
  });
});

const form = document.querySelector(".quiz-form");
form.addEventListener("reset", () => {
  document.querySelectorAll(".question").forEach((question) => {
    const answers = question.querySelectorAll("input[type='radio']");

    answers.forEach((a) => {
      a.disabled = false; // mở lại
      a.parentElement.classList.remove("correct", "wrong");
    });
  });
});
