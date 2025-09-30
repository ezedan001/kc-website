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









//    <!--.... featured-listings..... -->//

// ===============================
// Property Data
// ===============================
// Property dataconst properties = {
const properties = {
    property1: {
        title: "Modern Family Villa",
        location: "Los Angeles, California",
        description: "This villa combines comfort and luxury with 5 spacious bedrooms, landscaped garden, pool, and modern architecture.",
        images: [
           "serene image/serene lake 1.webp",
           "serene image/serene lake 2.webp",
           "serene image/serene lake 3.webp",
           "serene image/serene lake 4.webp",
           "serene image/serene lake 5.webp",
           "serene image/serene lake 6.webp",
           "serene image/serene lake 7.webp",
           "serene image/serene lake 8.webp",
           "serene image/serene lake 9.webp",
           "serene image/serene lake 10.webp",
           "serene image/serene lake 11.webp",
           "serene image/serene lake 12.webp",
           "serene image/serene lake 13.webp",
            "images/house1-2.jpg", "images/house1-3.jpg", "images/house1-4.jpg"
        ],
        facts: {
            Bedrooms: 5,
            Bathrooms: 4,
            Size: "3,800 sqft",
            Garage: "2 Cars",
            Pool: "Yes",
            Garden: "Yes",
            "Year Built": 2021,
            "Energy Rating": "A+"
        },
        agent: {
            img: "serene image/agent 1.jpg",
            name: "Daniel Kingston",
            phone: "+1 310 555 7890",
            email: "daniel@realestatepro.com"
        },
        mapEmbed: "<iframe src='https://maps.google.com/maps?q=Los%20Angeles&t=&z=13&ie=UTF8&iwloc=&output=embed' width='100%' height='300' style='border:0;' loading='lazy'></iframe>"
    }
};

// Modal Elements
const modal = document.querySelector(".premium-modal");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.querySelector("#modalTitle");
const modalLocation = document.querySelector("#modalLocation");
const modalDescription = document.querySelector("#modalDescription");
const modalFacts = document.querySelector("#modalFacts");
const modalMap = document.querySelector("#modalMap");
const modalTrack = document.querySelector(".modal-track");
const modalPrev = document.querySelector(".modal-prev");
const modalNext = document.querySelector(".modal-next");
const agentImg = document.querySelector("#agentImg");
const agentName = document.querySelector("#agentName");
const agentPhone = document.querySelector("#agentPhone");
const agentEmail = document.querySelector("#agentEmail");

// Carousel State
let currentIndex = 0;

// Open Modal
document.querySelectorAll(".property-card").forEach(card => {
    card.addEventListener("click", () => {
        const prop = properties[card.dataset.property];
        modal.style.display = "block";

        modalTitle.textContent = prop.title;
        modalLocation.textContent = prop.location;
        modalDescription.textContent = prop.description;
        modalFacts.innerHTML = Object.entries(prop.facts).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('');
        modalMap.innerHTML = prop.mapEmbed;

        agentImg.src = prop.agent.img;
        agentName.textContent = prop.agent.name;
        agentPhone.textContent = `📞 ${prop.agent.phone}`;
        agentEmail.textContent = `✉️ ${prop.agent.email}`;

        // Load images
        modalTrack.innerHTML = "";
        prop.images.forEach(img => {
            const image = document.createElement("img");
            image.src = img;
            modalTrack.appendChild(image);
        });
        currentIndex = 0;
        updateModalCarousel();
    });
});

// Modal Carousel
function updateModalCarousel() {
    modalTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}
modalPrev.addEventListener("click", () => { currentIndex = (currentIndex - 1 + modalTrack.children.length) % modalTrack.children.length; updateModalCarousel(); });
modalNext.addEventListener("click", () => { currentIndex = (currentIndex + 1) % modalTrack.children.length; updateModalCarousel(); });

// Close Modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

// Contact Agent Form
document.querySelector("#agentForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Your message has been sent to the agent!");
    e.target.reset();
});




//    <!--.... featured-listings..... -->//





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
















