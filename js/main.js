const elAnswer = document.querySelector(".faq-answer");
const elBtnFaq = document.querySelector(".btn-faq");

elBtnFaq.addEventListener("click", function () {
  elAnswer.classList.toggle("show");
});
