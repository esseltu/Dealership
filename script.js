// DOM Elements
const searchInput = document.getElementById("searchInput")
const filterButtons = document.querySelectorAll(".filter-btn")
const vehicleGrid = document.getElementById("vehicleGrid")

// State
let currentFilter = "all"
let currentSearch = ""

// Vehicle data - Initialize with sample data
const vehicleData = [
  {
    id: "tesla-model-s",
    name: "Tesla Model S",
    year: 2024,
    price: 89990,
    mileage: 0,
    category: "luxury",
    fuelType: "Electric",
    transmission: "Automatic",
    rating: 4.8,
    location: "Main Dealership",
    image: "Tesla model S.webp",
    images: [
      "Tesla model S.webp",
      "Tesla model S.webp",
      "Tesla model S.webp",
    ],
    description:
      "Experience the pinnacle of electric luxury with the Tesla Model S. This revolutionary sedan combines cutting-edge technology with unparalleled performance.",
    highlights: [
      "Autopilot Advanced Safety Features",
      "405-mile EPA estimated range",
      "0-60 mph in 3.1 seconds",
      '17" Cinematic Display',
      "Premium Interior Materials",
      "Over-the-air Software Updates",
    ],
    specs: {
      engine: {
        "Motor Type": "Dual Motor All-Wheel Drive",
        Horsepower: "670 hp",
        Torque: "713 lb-ft",
        "Top Speed": "149 mph",
      },
      dimensions: {
        Length: "196.0 in",
        Width: "77.3 in",
        Height: "56.9 in",
        Wheelbase: "116.5 in",
      },
      features: [
        "Autopilot",
        "Premium Audio System",
        "Glass Roof",
        "Heated Seats",
        "Navigation System",
        "Wireless Phone Charging",
      ],
    },
  },
  {
    id: "mercedes-c-class",
    name: "Mercedes C-Class",
    year: 2024,
    price: 48990,
    mileage: 5100,
    category: "luxury",
    fuelType: "Gasoline",
    transmission: "Automatic",
    rating: 4.8,
    location: "North Location",
    image: "Mercedes-Benz C-Class.webp",
    images: ["Mercedes-Benz C-Class.webp", "Mercedes-Benz C-Class.webp"],
    description:
      "The Mercedes-Benz C-Class represents the perfect balance of luxury, performance, and technology in a compact executive sedan.",
    highlights: [
      "MBUX Infotainment System",
      "Active Brake Assist",
      "LED High Performance Headlamps",
      "Live Traffic Information",
      "Mercedes me connect",
      "Attention Assist",
    ],
    specs: {
      engine: {
        Engine: "2.0L Turbo 4-Cylinder",
        Horsepower: "255 hp",
        Torque: "273 lb-ft",
        "Fuel Economy": "23/34 mpg",
      },
      dimensions: {
        Length: "185.7 in",
        Width: "71.3 in",
        Height: "56.8 in",
        Wheelbase: "111.8 in",
      },
      features: [
        "MBUX Multimedia System",
        "Active Brake Assist",
        "Blind Spot Assist",
        "Attention Assist",
        "LED Headlamps",
        "Dual-Zone Climate Control",
      ],
    },
  },
  {
    id: "bmw-x5",
    name: "BMW X5",
    year: 2023,
    price: 65990,
    mileage: 12500,
    category: "suv",
    fuelType: "Gasoline",
    transmission: "Automatic",
    rating: 4.8,
    location: "Main Dealership",
    image: "Bmw X5.webp",
    images: ["Bmw X5.webp", "Bmw X5.webp"],
    description:
      "The BMW X5 delivers the perfect combination of luxury, versatility, and driving dynamics in a premium SUV package.",
    highlights: [
      "xDrive All-Wheel Drive",
      "Panoramic Moonroof",
      "Harman Kardon Sound System",
      "Gesture Control",
      "Wireless Apple CarPlay",
      "Active Protection System",
    ],
    specs: {
      engine: {
        Engine: "3.0L TwinPower Turbo I6",
        Horsepower: "335 hp",
        Torque: "330 lb-ft",
        "Fuel Economy": "21/26 mpg",
      },
      dimensions: {
        Length: "194.3 in",
        Width: "78.9 in",
        Height: "69.4 in",
        Wheelbase: "117.1 in",
      },
      features: [
        "iDrive 7.0",
        "Panoramic Moonroof",
        "Harman Kardon Audio",
        "Gesture Control",
        "Wireless Charging",
        "Active Protection",
      ],
    },
  },
  {
    id: "audi-a4",
    name: "Audi A4",
    year: 2023,
    price: 42990,
    mileage: 8200,
    category: "sedan",
    fuelType: "Gasoline",
    transmission: "Automatic",
    rating: 4.8,
    location: "South Location",
    image: "Audi A4.webp", 
    images: ["Audi A4.webp", "Audi A4.webp"],
    description:
      "The Audi A4 combines sophisticated design with advanced technology and exceptional performance in a premium compact sedan.",
    highlights: [
      "Quattro All-Wheel Drive",
      "Virtual Cockpit Plus",
      "Bang & Olufsen Sound System",
      "Audi Pre Sense",
      "MMI Navigation Plus",
      "LED Matrix Headlights",
    ],
    specs: {
      engine: {
        Engine: "2.0L TFSI Turbo 4-Cylinder",
        Horsepower: "261 hp",
        Torque: "273 lb-ft",
        "Fuel Economy": "24/31 mpg",
      },
      dimensions: {
        Length: "185.5 in",
        Width: "72.7 in",
        Height: "56.2 in",
        Wheelbase: "111.0 in",
      },
      features: [
        "Virtual Cockpit Plus",
        "MMI Navigation Plus",
        "Bang & Olufsen Audio",
        "Audi Pre Sense",
        "LED Matrix Headlights",
        "Quattro AWD",
      ],
    },
  },
  {
    id: "honda-cr-v",
    name: "Honda CR-V",
    year: 2023,
    price: 32990,
    mileage: 15800,
    category: "suv",
    fuelType: "Gasoline",
    transmission: "CVT",
    rating: 4.8,
    location: "North Location",
    image: "Honda CR-V.jpg",
    images: ["Honda CR-V.jpg", "Honda CR-V.jpg"],
    description:
      "The Honda CR-V offers exceptional reliability, fuel efficiency, and versatility in a compact SUV that's perfect for families.",
    highlights: [
      "Honda Sensing Safety Suite",
      "All-Wheel Drive Available",
      "Spacious Interior",
      "Excellent Fuel Economy",
      "Honda Reliability",
      "Advanced Safety Features",
    ],
    specs: {
      engine: {
        Engine: "1.5L Turbo 4-Cylinder",
        Horsepower: "190 hp",
        Torque: "179 lb-ft",
        "Fuel Economy": "28/34 mpg",
      },
      dimensions: {
        Length: "182.1 in",
        Width: "73.0 in",
        Height: "66.1 in",
        Wheelbase: "104.7 in",
      },
      features: [
        "Honda Sensing",
        "Apple CarPlay/Android Auto",
        "Multi-Angle Rearview Camera",
        "Dual-Zone Climate Control",
        "Power Tailgate",
        "Remote Engine Start",
      ],
    },
  },
  {
    id: "toyota-camry",
    name: "Toyota Camry",
    year: 2023,
    price: 28990,
    mileage: 22100,
    category: "sedan",
    fuelType: "Gasoline",
    transmission: "Automatic",
    rating: 4.8,
    location: "Main Dealership",
    image: "Toyota Camry.jpg",
    images: ["Toyota Camry.jpg", "Toyota Camry.jpg"],
    description:
      "The Toyota Camry delivers outstanding reliability, fuel efficiency, and value in a midsize sedan that's built to last.",
    highlights: [
      "Toyota Safety Sense 2.0",
      "Excellent Fuel Economy",
      "Spacious Interior",
      "Advanced Infotainment",
      "Toyota Reliability",
      "Comprehensive Warranty",
    ],
    specs: {
      engine: {
        Engine: "2.5L 4-Cylinder",
        Horsepower: "203 hp",
        Torque: "184 lb-ft",
        "Fuel Economy": "28/39 mpg",
      },
      dimensions: {
        Length: "192.7 in",
        Width: "72.4 in",
        Height: "56.9 in",
        Wheelbase: "111.2 in",
      },
      features: [
        "Toyota Safety Sense 2.0",
        "Apple CarPlay/Android Auto",
        "Wireless Phone Charging",
        "Dual-Zone Climate Control",
        "Smart Key System",
        "Push Button Start",
      ],
    },
  },
]

// Initialize favorites from localStorage
const favorites = JSON.parse(localStorage.getItem("favorites")) || []

// Save vehicle data to localStorage for other pages to use
localStorage.setItem("vehicles", JSON.stringify(vehicleData))

// ==============================================
// Core Functions
// ==============================================

// Filter vehicles based on category/search
function filterVehicles() {
  const filteredData = vehicleData.filter((vehicle) => {
    const matchesCategory = currentFilter === "all" || vehicle.category === currentFilter
    const matchesSearch = vehicle.name.toLowerCase().includes(currentSearch.toLowerCase())
    return matchesCategory && matchesSearch
  })

  renderVehicles(filteredData)
}

// Render vehicles to the grid
function renderVehicles(vehicles) {
  if (!vehicleGrid) return

  vehicleGrid.innerHTML = vehicles
    .map(
      (vehicle) => `
    <div class="vehicle-card" data-category="${vehicle.category}" data-id="${vehicle.id}">
      <div class="card-image-container">
        <img src="${vehicle.image}" alt="${vehicle.name}" class="card-image">
        <button class="favorite-btn ${favorites.includes(vehicle.id) ? "favorited" : ""}" title="Add to Favorites" data-vehicle-id="${vehicle.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      
      <div class="card-content">
        <div class="card-header">
          <div class="card-info">
            <h3 class="card-title">${vehicle.name}</h3>
            <p class="card-details">${vehicle.year} • ${vehicle.mileage.toLocaleString()} miles</p>
          </div>
          <div class="card-price">$${vehicle.price.toLocaleString()}</div>
        </div>
        
        <div class="card-specs">
          <span>${vehicle.fuelType}</span>
          <span>${vehicle.transmission}</span>
          <div class="rating">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#34C759" stroke="#34C759" stroke-width="2">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
            </svg>
            <span>${vehicle.rating}</span>
          </div>
        </div>
        
        <div class="card-actions">
          <button class="btn btn-primary flex-1" onclick="window.location.href='details.html?id=${vehicle.id}'">View Details</button>
          <button class="btn btn-outline icon-only" title="Contact Dealer" onclick="window.location.href='contact.html'">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("")

  // Add event listeners for favorite buttons
  setupFavoriteButtons()
}

// Setup favorite button functionality
function setupFavoriteButtons() {
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const vehicleId = btn.dataset.vehicleId

      btn.classList.toggle("favorited")

      // Update favorites in localStorage
      const index = favorites.indexOf(vehicleId)
      if (btn.classList.contains("favorited")) {
        if (index === -1) favorites.push(vehicleId)
      } else {
        if (index > -1) favorites.splice(index, 1)
      }

      localStorage.setItem("favorites", JSON.stringify(favorites))

      // Visual feedback
      btn.style.transform = "scale(1.2)"
      setTimeout(() => (btn.style.transform = ""), 200)
    })
  })
}

// Calculate loan payments (for financing page)
function calculatePayment() {
  const vehiclePrice = Number.parseFloat(document.getElementById("vehiclePrice")?.value) || 0
  const downPayment = Number.parseFloat(document.getElementById("downPayment")?.value) || 0
  const loanTerm = Number.parseInt(document.getElementById("loanTerm")?.value) || 60
  const interestRate = Number.parseFloat(document.getElementById("interestRate")?.value) || 0

  const loanAmount = vehiclePrice - downPayment
  const monthlyRate = interestRate / 100 / 12

  let monthlyPayment = 0
  if (monthlyRate > 0) {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) / (Math.pow(1 + monthlyRate, loanTerm) - 1)
  } else {
    monthlyPayment = loanAmount / loanTerm
  }

  const totalAmount = monthlyPayment * loanTerm
  const totalInterest = totalAmount - loanAmount

  const monthlyEl = document.getElementById("monthlyPayment")
  const interestEl = document.getElementById("totalInterest")
  const totalEl = document.getElementById("totalAmount")

  if (monthlyEl) monthlyEl.textContent = "$" + monthlyPayment.toFixed(0)
  if (interestEl) interestEl.textContent = "$" + totalInterest.toFixed(0)
  if (totalEl) totalEl.textContent = "$" + totalAmount.toFixed(0)
}

// Scroll to inventory section
function scrollToInventory() {
  const inventorySection = document.getElementById("inventory")
  if (inventorySection) {
    inventorySection.scrollIntoView({ behavior: "smooth" })
  }
}

// Toggle advanced filters (placeholder)
function toggleAdvancedFilters() {
  alert("Advanced filters coming soon!")
}

// ==============================================
// Event Listeners
// ==============================================

// Search functionality
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value
    filterVehicles()
  })
}

// Category filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")
    currentFilter = button.dataset.category
    filterVehicles()
  })
})

// CTA Buttons (Navigation + Ripple Effect)
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Ripple effect
    const ripple = document.createElement("span")
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `

    btn.style.position = "relative"
    btn.style.overflow = "hidden"
    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)

    // Navigation logic
    const buttonText = btn.textContent.trim()
    switch (buttonText) {
      case "View Details":
        const card = btn.closest(".vehicle-card")
        if (card) {
          window.location.href = `details.html?id=${card.dataset.id}`
        }
        break
      case "Browse Inventory":
        scrollToInventory()
        break
      case "Schedule Test Drive":
        window.location.href = "test-drive.html"
        break
      case "Apply for Financing":
      case "Get Pre-Approved":
        window.location.href = "financing.html"
        break
      case "Schedule Online":
        window.location.href = "service.html"
        break
    }
  })
})

// Header scroll effect
let lastScrollY = window.scrollY
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (header) {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      header.style.transform = "translateY(-100%)"
    } else {
      header.style.transform = "translateY(0)"
    }
  }
  lastScrollY = window.scrollY
})

// Intersection Observer for card animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
)

// ==============================================
// Initialize Page
// ==============================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize vehicle grid
  if (vehicleGrid) {
    renderVehicles(vehicleData)

    // Observe vehicle cards for animations
    document.querySelectorAll(".vehicle-card").forEach((card) => observer.observe(card))
  }

  // Activate default filter button
  const defaultFilter = document.querySelector('.filter-btn[data-category="all"]')
  if (defaultFilter) {
    defaultFilter.classList.add("active")
  }

  // Initialize calculator (financing page)
  if (document.getElementById("vehiclePrice")) {
    calculatePayment()
    document.getElementById("vehiclePrice").addEventListener("input", calculatePayment)
    document.getElementById("downPayment").addEventListener("input", calculatePayment)
    document.getElementById("loanTerm").addEventListener("change", calculatePayment)
    document.getElementById("interestRate").addEventListener("input", calculatePayment)
  }
})

// ==============================================
// Dynamic CSS
// ==============================================
const style = document.createElement("style")
style.textContent = `
  @keyframes ripple {
    to { transform: scale(2); opacity: 0; }
  }
  .favorited svg {
    fill: #FF3B30 !important;
    stroke: #FF3B30 !important;
  }
  .header {
    transition: transform 0.3s ease;
  }
  .confirmation-message {
    margin-top: 10px;
    padding: 8px;
    background: #34C759;
    color: white;
    border-radius: 4px;
    text-align: center;
  }
`
document.head.appendChild(style)
