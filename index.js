document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".plus-icon");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const dropdown = this.parentElement.nextElementSibling;
      dropdown.classList.toggle("show");
      this.classList.toggle("open");
    });
  });

  const q1Elements = document.querySelectorAll(".q");
  q1Elements.forEach((q1) => {
    q1.addEventListener("click", function () {
      const dropdown = this.parentElement.nextElementSibling;
      dropdown.classList.toggle("show");
      this.nextElementSibling.classList.toggle("open");
    });
  });
});
