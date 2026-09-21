const language = document.documentElement.lang;
const welcomeBanner = document.querySelector("#welcome-banner");

const messages =
  language === "fr"
    ? [
        "Bienvenue à Rue Des Jardins !",
        "Rejoignez-nous ce samedi pour le culte et la communion fraternelle.",
        "Vous êtes toujours les bienvenus dans notre famille d'église.",
      ]
    : [
        "Welcome to Rue Des Jardins!",
        "Join us this Saturday for worship and fellowship.",
        "You are always welcome in our church family.",
      ];

let currentMessage = 0;

welcomeBanner.textContent = messages[currentMessage];

welcomeBanner.style.backgroundColor = "#1f2937";
welcomeBanner.style.color = "#ffffff";
welcomeBanner.style.padding = "16px";
welcomeBanner.style.textAlign = "center";
welcomeBanner.style.fontSize = "18px";
welcomeBanner.style.fontWeight = "bold";

setInterval(() => {
  currentMessage++;

  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }

  welcomeBanner.textContent = messages[currentMessage];
}, 4000);

const heroButton = document.querySelector(".hero-btn");
heroButton.addEventListener("click", () => {
  alert("We'd love to see you this Saturday!");
});

heroButton.addEventListener("click", () => {
  document.querySelector("#service-info").scrollIntoView({
    behavior: "smooth",
  });
});

const registerButton = document.querySelector(".cta-btn");
const registrationForm = document.querySelector(".registration-form");
const registrationMessage = document.querySelector(".registration-message");

registerButton.addEventListener("click", () => {
  registrationForm.style.display = "block";
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector(".name-input").value;

  registrationMessage.textContent = `Thank you for registering, ${name}!`;

  registrationForm.style.display = "none";
});
