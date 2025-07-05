// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Typing effect for heading text
const typeText = "Hi, I'm Gedela Divya";
const spanTarget = document.querySelector(".content h1");
let charIndex = 0;

function typeEffect() {
  if (charIndex < typeText.length) {
    spanTarget.textContent += typeText.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  }
}

spanTarget.textContent = "";
typeEffect();

// Floating emoji animation
const emojis = ["✨", "💻", "🌸", "🎯", "🧠"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("floating-emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 4000);
}

setInterval(createEmoji, 1000);
