const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

/* Scroll Effect: navbar becomes solid */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});





// <!-- .... about-agency..... -->//

const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
// <!-- .... about-agency..... -->//










// <!-- ...... why-choose-us...... -->//

const cards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));



// <!-- ...... why-choose-us...... -->//






// Social icon hover glow effect
const socialIcons = document.querySelectorAll('.footer-social .social-icons a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.boxShadow = "0 0 15px #ff6b00";
    });
    icon.addEventListener('mouseout', () => {
        icon.style.boxShadow = "none";
    });
});

// Dynamic current year in footer
const yearSpan = document.querySelector('.footer-bottom p');
const currentYear = new Date().getFullYear();
yearSpan.innerHTML = yearSpan.innerHTML.replace("2026", currentYear);

















// Elements
const chatButton = document.getElementById("chat-button");
const widget = document.getElementById("widget");
const closeWidget = document.getElementById("close-widget");
const statusDot = document.getElementById("status-dot");
const statusText = document.getElementById("status-text");
const greeting = document.getElementById("greeting");
const templateSelect = document.getElementById("templateSelect");

let selectedTemplate = "";
let userCountry = "Unknown";
let whatsappNumber = "2348123456789"; // Default Nigeria

// Open widget
chatButton.addEventListener("click", () => {
    widget.style.display = "flex";
    chatButton.style.display = "none";
});

// Close widget
closeWidget.addEventListener("click", () => {
    widget.style.display = "none";
    chatButton.style.display = "block";
});

// Set availability (example: 9am–6pm online)
function setAvailability() {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 9 && hour < 18) {
        statusDot.style.background = "limegreen";
        statusText.innerText = "Online now";
    } else {
        statusDot.style.background = "gray";
        statusText.innerText = "We’ll reply soon";
    }
}
setAvailability();

// Greeting randomizer
const greetings = [
    "👋 Hi! Need help finding your dream home?",
    "🏡 Looking for properties in your area?",
    "📩 Send us a WhatsApp or Email — quick reply guaranteed.",
    "✨ Special deals available today! Ask us now.",
    "🔑 Ready to unlock your new property? Let’s chat!"
];
greeting.innerText = greetings[Math.floor(Math.random() * greetings.length)];

// Auto-open after delay (optional)
setTimeout(() => {
    widget.style.display = "flex";
    chatButton.style.display = "none";
}, 8000); // opens after 8s

// Message templates
const templates = [
    "I’m interested in buying a house in [Location].",
    "Can you send me property options under $100,000?",
    "Do you have rental apartments in [City]?",
    "What’s the process for buying property in [Country]?",
    "I’d like to schedule a property viewing this week.",
    "Do you offer mortgage or financing options?",
    "Can you share available commercial properties?",
    "I want to invest in land — what locations are best?"
];

// Populate dropdown dynamically
if (templateSelect) {
    templates.forEach(t => {
        const option = document.createElement("option");
        option.value = t;
        option.text = t;
        templateSelect.appendChild(option);
    });
}

function setTemplate() {
    selectedTemplate = templateSelect.value;
}

// Country detection (using free API)
async function detectCountry() {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        userCountry = data.country_name;
        setWhatsAppByCountry(userCountry);
    } catch (err) {
        console.log("Country detection failed:", err);
    }
}

// Map countries to WhatsApp numbers
function setWhatsAppByCountry(country) {
    const numbers = {
        "Nigeria": "2348123456789",
        "United States": "1234567890",
        "Brazil": "5511987654321",
        "United Kingdom": "447912345678",
        "India": "919876543210"
    };
    whatsappNumber = numbers[country] || "2348123456789"; // default Nigeria
}

detectCountry();

// WhatsApp open
function openWhatsApp() {
    let message =
        selectedTemplate ||
        `Hello, I’m contacting you from ${userCountry}. I’d like to know more about your properties.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

// Email open
function openEmail() {
    let email = "info@realestate.com";
    let subject = `Property Inquiry from ${userCountry}`;
    let body =
        selectedTemplate ||
        `Hello, I’m contacting you from ${userCountry}. I’d like to know more about your properties.`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
















