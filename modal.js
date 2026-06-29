const modal = document.querySelector(".modal");
const openBtn = document.querySelector("#openModal");
const closeBtn = document.querySelector("#closeModal");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});