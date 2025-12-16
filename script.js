const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});

const search = document.getElementById("search");
const items = Array.from(document.querySelectorAll(".project-box"));
const noProjects = document.getElementById("noProjects");

search.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  let count = 0;

  items.forEach(item => {
    const title = (item.dataset.title || "").toLowerCase();
    const text = item.innerText.toLowerCase();
    const show = title.includes(q) || text.includes(q);
    item.style.display = show ? "block" : "none";
    if (show) count++;
  });

  noProjects.classList.toggle("hide", count !== 0);
});

const form = document.getElementById("form");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "Thanks. Your message is ready (demo form).";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
