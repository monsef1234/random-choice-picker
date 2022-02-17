const text = document.querySelector("#text");
const choices = document.querySelector(".choices");
text.addEventListener("keyup", (eo) => {
  const arr = text.value
    .trim()
    .split(",")
    .map((item) => {
      return `<span>${item}</span>`;
    })
    .join("");
  choices.innerHTML = arr;
  const spans = document.querySelectorAll(".choices span");
  spans.forEach((span) => {
    if (span.textContent != "") {
      span.classList.add("choice");
    }
  });
  if (eo.key === "Enter") {
    text.value = "";
    const spans = document.querySelectorAll(".choices span");

    spans.forEach((span) => {
      const stopIt = setInterval(() => {
        const random = Math.floor(Math.random() * spans.length);
        spans[random].classList.add("bg");
      }, 100);
      const sds = setInterval(() => {
        const random = Math.floor(Math.random() * spans.length);
        console.log(random);
        spans[random].classList.remove("bg");
      }, 100);
      setTimeout(() => {
        clearInterval(stopIt);
      }, 2000);
      setTimeout(() => {
        clearInterval(sds);
      }, 2000);
      setTimeout(() => {
        spans.forEach((span) => {
          span.classList.remove("bg");
        });
        const random = Math.floor(Math.random() * spans.length);
        spans[random].classList.add("bg");
      }, 2000);
    });
  }
});
