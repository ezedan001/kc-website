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
const properties = {
    property1: {
        title: "Luxury Apartment",
        location: "New York, Manhattan",
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
            "serene image/serene lake 14.webp",
            "serene image/serene lake 15.webp",
            "serene image/serene lake 16.webp",
            "serene image/serene lake 17.webp",
            "serene image/serene lake 18.webp",
            "serene image/serene lake 19.webp",
            "serene image/serene lake 20.webp",
            "serene image/serene lake 21.webp",
            "serene image/serene lake 22.webp",
            "serene image/serene lake 23.webp",
            "serene image/serene lake 24.webp",
            "serene image/serene lake 25.webp",
            "serene image/serene lake 26.webp",
            "serene image/serene lake 27.webp",
            "serene image/serene lake 28.webp",
            "serene image/serene lake 29.webp"
        ],
        description: "A luxurious apartment with modern design, 4 bedrooms, 4 bathrooms, amazing city views, and balcony.",
        facts: { Bedrooms: 4, Bathrooms: 4, Stories: 2, "Interior Area": "2,730 sqft", "Total Structure": "4,219 sqft" },
        interior: { Heating: "Electric", Cooling: "Central Air", Appliances: ["Dishwasher", "Dryer", "Microwave", "Electric Range", "Refrigerator", "Washer"], Flooring: "Other", Doors: "High Impact Doors" },
        bedsBaths: { Full: 3, Half: 1, Rooms: ["Family Room", "Florida Room"] },
        parkingPool: { Garage: 2, ParkingSpaces: 2, Pool: "Yes, In Ground", View: "Lake, Pool", WaterView: "Yes" },
        lotConstruction: { LotSize: "0.69 Acres", YearBuilt: 1986, Construction: "CBS Construction", Roof: "Barrel Roof", Zoning: "0100" },
        agent: "John Doe | +123456789",
        agentImg: "serene image/agent 1.jpg",
        mapEmbed: "<iframe src='https://maps.google.com/maps?q=New%20York%20Manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed' width='100%' height='300' style='border:0;' allowfullscreen='' loading='lazy'></iframe>"
    }
};

// Modal Elements
const modal = document.querySelector(".premium-modal");
const mainImg = modal.querySelector(".main-img img");
const thumbsContainer = modal.querySelector(".thumbs");
const closeBtn = modal.querySelector(".close-btn");
const modalTitle = modal.querySelector("#modalTitle");
const modalLocation = modal.querySelector("#modalLocation");
const modalDescription = modal.querySelector("#modalDescription");
const modalFacts = modal.querySelector("#modalFacts");
const modalInterior = modal.querySelector("#modalInterior");
const modalBedsBaths = modal.querySelector("#modalBedsBaths");
const modalParking = modal.querySelector("#modalParking");
const modalLot = modal.querySelector("#modalLot");
const modalAgent = modal.querySelector("#modalAgent");
const modalAgentImg = modal.querySelector("#modalAgentImg");
const modalMap = modal.querySelector("#modalMap");
const prevBtn = modal.querySelector(".prev-btn");
const nextBtn = modal.querySelector(".next-btn");

// Mortgage
const mortgageAmount = modal.querySelector("#mortgageAmount");
const mortgageYears = modal.querySelector("#mortgageYears");
const mortgageRate = modal.querySelector("#mortgageRate");
const calculateMortgageBtn = modal.querySelector("#calculateMortgage");
const mortgageResult = modal.querySelector("#mortgageResult");

let currentIndex = 0;
let currentImages = [];

document.querySelectorAll(".property-card").forEach(card => {
    card.addEventListener("click", () => {
        const prop = properties[card.dataset.property];
        modal.style.display = "block";

        modalTitle.textContent = prop.title;
        modalLocation.textContent = prop.location;
        modalDescription.textContent = prop.description;
        modalFacts.innerHTML = Object.entries(prop.facts).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('');
        modalInterior.innerHTML = Object.entries(prop.interior).map(([k, v]) => `<li><strong>${k}:</strong> ${Array.isArray(v) ? v.join(', ') : v}</li>`).join('');
        modalBedsBaths.innerHTML = Object.entries(prop.bedsBaths).map(([k, v]) => `<li><strong>${k}:</strong> ${Array.isArray(v) ? v.join(', ') : v}</li>`).join('');
        modalParking.innerHTML = Object.entries(prop.parkingPool).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('');
        modalLot.innerHTML = Object.entries(prop.lotConstruction).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('');
        modalAgent.textContent = prop.agent;
        modalAgentImg.src = prop.agentImg;
        modalMap.innerHTML = prop.mapEmbed;

        currentImages = prop.images;
        currentIndex = 0;
        mainImg.src = currentImages[currentIndex];
        thumbsContainer.innerHTML = "";
        currentImages.forEach((img, i) => {
            const thumb = document.createElement("img"); thumb.src = img;
            if (i === 0) thumb.classList.add("active");
            thumb.addEventListener("click", () => {
                currentIndex = i;
                mainImg.src = currentImages[i];
                thumbsContainer.querySelectorAll("img").forEach(el => el.classList.remove("active"));
                thumb.classList.add("active");
            });
            thumbsContainer.appendChild(thumb);
        });
    });
});

// Carousel Buttons
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    mainImg.src = currentImages[currentIndex];
    thumbsContainer.querySelectorAll("img").forEach(el => el.classList.remove("active"));
    thumbsContainer.querySelectorAll("img")[currentIndex].classList.add("active");
});
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    mainImg.src = currentImages[currentIndex];
    thumbsContainer.querySelectorAll("img").forEach(el => el.classList.remove("active"));
    thumbsContainer.querySelectorAll("img")[currentIndex].classList.add("active");
});

// Close Modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

// Mortgage
calculateMortgageBtn.addEventListener("click", () => {
    const P = parseFloat(mortgageAmount.value);
    const Y = parseFloat(mortgageYears.value);
    const R = parseFloat(mortgageRate.value) / 100 / 12;
    const N = Y * 12;
    if (!P || !Y || !R) { mortgageResult.textContent = "Enter valid numbers"; return; }
    const x = Math.pow(1 + R, N);
    const monthly = (P * x * R) / (x - 1);
    mortgageResult.textContent = `Estimated Monthly Payment: $${monthly.toFixed(2)}`;
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
















