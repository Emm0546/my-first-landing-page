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

if (welcomeBanner) {
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
}

const heroButton = document.querySelector(".hero-btn");

if (heroButton) {
  heroButton.addEventListener("click", () => {
    document
      .querySelector("#service-info")
      .scrollIntoView({ behavior: "smooth" });
  });
}

const registerButton = document.querySelector(".register-btn");
const registrationForm = document.querySelector(".registration-form");
const registrationMessage = document.querySelector(".registration-message");

if (registerButton && registrationForm) {
  registerButton.addEventListener("click", () => {
    registrationForm.style.display = "flex";
  });

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector(".name-input").value;

    registrationMessage.textContent =
      language === "fr"
        ? `Merci pour votre inscription, ${name} !`
        : `Thank you for registering, ${name}!`;

    registrationForm.style.display = "none";
  });
}
const contactForm = document.querySelector(".contact-form");
const contactMessage = document.querySelector(".contact-message");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#contact-name").value;

    contactMessage.textContent =
      language === "fr"
        ? `Merci pour votre message, ${name} !`
        : `Thank you for your message, ${name}!`;

    contactForm.reset();
  });
}
const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
const nextServiceElement = document.querySelector("#next-service");

if (nextServiceElement) {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday ... 6 = Saturday
  let message;

  if (today === 6) {
    message =
      language === "fr"
        ? "Culte aujourd'hui : à partir de 8h00"
        : "Service today: from 8:00 AM";
  } else if (today === 5) {
    message =
      language === "fr"
        ? "Culte aujourd'hui : 19h00"
        : "Service today: 7:00 PM";
  } else if (today === 4) {
    message =
      language === "fr"
        ? "Prochain culte : demain vendredi à 19h00"
        : "Next service: tomorrow, Friday at 7:00 PM";
  } else if (today === 3) {
    message =
      language === "fr"
        ? "Culte aujourd'hui : 18h00"
        : "Service today: 6:00 PM";
  } else if (today === 2) {
    message =
      language === "fr"
        ? "Prochain culte : demain mercredi à 18h00"
        : "Next service: tomorrow, Wednesday at 6:00 PM";
  } else {
    message =
      language === "fr"
        ? "Prochain culte : mercredi à 18h00"
        : "Next service: Wednesday at 6:00 PM";
  }

  nextServiceElement.textContent = message;
}
