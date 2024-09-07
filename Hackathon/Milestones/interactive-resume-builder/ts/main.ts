document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector<HTMLInputElement>(
    'input[type="checkbox"]'
  );
  const skillsSection = document.getElementById("skills");

  if (checkbox && skillsSection) {
    skillsSection.style.display = "none"; // Hide skills section by default

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        skillsSection.style.display = "block";
      } else {
        skillsSection.style.display = "none";
      }
    });
  }
});
