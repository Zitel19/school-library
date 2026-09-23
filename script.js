// Small enhancement for the reference-style page.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    if (nav) nav.classList.remove("open");
  });
});
