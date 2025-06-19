const questions = document.querySelectorAll(".questionContainer");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answerContainer = question.nextElementSibling;
    const answer = answerContainer.querySelector(".answers");
    const icon = question.querySelector("img");
    const isOpen = answer.classList.contains("open");
    // ✅ Reset all icons to plus
    document.querySelectorAll(".questionContainer img").forEach((img) => {
      img.src = "images/icon-plus.svg";
    });
    // Close all answers and reset all icons
    document.querySelectorAll(".answers").forEach((answer) => {
      answer.classList.remove("open");
    });
    // Toggle just one
    if (!isOpen) {
      answer.classList.add("open");
      icon.src = "images/icon-minus.svg";
    }
  });
});
