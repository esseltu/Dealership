// Mobile Menu Functionality
class MobileMenu {
  constructor() {
    this.hamburgerBtn = document.querySelector(".hamburger-btn")
    this.mobileMenu = document.querySelector(".mobile-menu")
    this.menuOverlay = document.querySelector(".menu-overlay")
    this.body = document.body
    this.isOpen = false

    this.init()
  }

  init() {
    if (!this.hamburgerBtn || !this.mobileMenu) {
      console.warn("Mobile menu elements not found")
      return
    }

    // Create overlay if it doesn't exist
    if (!this.menuOverlay) {
      this.createOverlay()
    }

    this.bindEvents()
    this.handleResize()
  }

  createOverlay() {
    this.menuOverlay = document.createElement("div")
    this.menuOverlay.className = "menu-overlay"
    document.body.appendChild(this.menuOverlay)
  }

  bindEvents() {
    // Hamburger button click
    this.hamburgerBtn.addEventListener("click", (e) => {
      e.preventDefault()
      this.toggle()
    })

    // Overlay click
    if (this.menuOverlay) {
      this.menuOverlay.addEventListener("click", () => {
        this.close()
      })
    }

    // Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close()
      }
    })

    // Mobile nav links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.close()
      })
    })

    // Window resize
    window.addEventListener("resize", () => {
      this.handleResize()
    })
  }

  toggle() {
    if (this.isOpen) {
      this.close()
    } else {
      this.open()
    }
  }

  open() {
    this.isOpen = true
    this.hamburgerBtn.classList.add("active")
    this.mobileMenu.classList.add("active")
    if (this.menuOverlay) {
      this.menuOverlay.classList.add("active")
    }
    this.body.style.overflow = "hidden"

    // Focus management
    this.trapFocus()
  }

  close() {
    this.isOpen = false
    this.hamburgerBtn.classList.remove("active")
    this.mobileMenu.classList.remove("active")
    if (this.menuOverlay) {
      this.menuOverlay.classList.remove("active")
    }
    this.body.style.overflow = ""

    // Return focus to hamburger button
    this.hamburgerBtn.focus()
  }

  handleResize() {
    // Close menu on desktop
    if (window.innerWidth > 768 && this.isOpen) {
      this.close()
    }
  }

  trapFocus() {
    const focusableElements = this.mobileMenu.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus first element
    firstElement.focus()

    // Handle tab navigation
    this.mobileMenu.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    })
  }
}

// Search Functionality
class SearchHandler {
  constructor() {
    this.searchInputs = document.querySelectorAll(".search-input")
    this.init()
  }

  init() {
    this.searchInputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        this.handleSearch(e.target.value)
      })

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault()
          this.performSearch(e.target.value)
        }
      })
    })
  }

  handleSearch(query) {
    // Debounce search
    clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(() => {
      if (query.length >= 2) {
        this.performSearch(query)
      }
    }, 300)
  }

  performSearch(query) {
    console.log("Searching for:", query)
    // Implement search logic here
    // This could filter vehicles, redirect to search results, etc.
  }
}

// Smooth Scrolling
class SmoothScroll {
  constructor() {
    this.init()
  }

  init() {
    // Handle anchor links
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (link) {
        e.preventDefault()
        const targetId = link.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          this.scrollToElement(targetElement)
        }
      }
    })
  }

  scrollToElement(element) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const elementPosition = element.offsetTop - headerHeight - 20

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

// Intersection Observer for Animations
class ScrollAnimations {
  constructor() {
    this.observer = null
    this.init()
  }

  init() {
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in")
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      // Observe elements
      const animateElements = document.querySelectorAll(".vehicle-card, .option-card, .service-card, .section-header")

      animateElements.forEach((el) => {
        this.observer.observe(el)
      })
    }
  }
}

// Form Enhancements
class FormEnhancements {
  constructor() {
    this.init()
  }

  init() {
    // Add floating labels
    this.addFloatingLabels()

    // Add form validation
    this.addValidation()

    // Add loading states
    this.addLoadingStates()
  }

  addFloatingLabels() {
    const formGroups = document.querySelectorAll(".form-group")

    formGroups.forEach((group) => {
      const input = group.querySelector(".form-input, .form-textarea")
      const label = group.querySelector(".form-label")

      if (input && label) {
        input.addEventListener("focus", () => {
          group.classList.add("focused")
        })

        input.addEventListener("blur", () => {
          if (!input.value) {
            group.classList.remove("focused")
          }
        })

        // Check initial state
        if (input.value) {
          group.classList.add("focused")
        }
      }
    })
  }

  addValidation() {
    const forms = document.querySelectorAll("form")

    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        if (!this.validateForm(form)) {
          e.preventDefault()
        }
      })
    })
  }

  validateForm(form) {
    let isValid = true
    const inputs = form.querySelectorAll(".form-input, .form-select, .form-textarea")

    inputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        this.showError(input, "This field is required")
        isValid = false
      } else if (input.type === "email" && input.value && !this.isValidEmail(input.value)) {
        this.showError(input, "Please enter a valid email address")
        isValid = false
      } else {
        this.clearError(input)
      }
    })

    return isValid
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  showError(input, message) {
    this.clearError(input)

    input.classList.add("error")
    const errorElement = document.createElement("div")
    errorElement.className = "form-error"
    errorElement.textContent = message

    input.parentNode.appendChild(errorElement)
  }

  clearError(input) {
    input.classList.remove("error")
    const existingError = input.parentNode.querySelector(".form-error")
    if (existingError) {
      existingError.remove()
    }
  }

  addLoadingStates() {
    const submitButtons = document.querySelectorAll('button[type="submit"]')

    submitButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.add("loading")
        button.disabled = true

        // Remove loading state after form submission
        setTimeout(() => {
          button.classList.remove("loading")
          button.disabled = false
        }, 2000)
      })
    })
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new MobileMenu()
  new SearchHandler()
  new SmoothScroll()
  new ScrollAnimations()
  new FormEnhancements()

  // Add scroll header effect
  let lastScrollY = window.scrollY
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    // Hide/show header on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      header.style.transform = "translateY(-100%)"
    } else {
      header.style.transform = "translateY(0)"
    }

    lastScrollY = currentScrollY
  })
})

// Utility functions
function scrollToInventory() {
  const inventorySection = document.getElementById("inventory")
  if (inventorySection) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const elementPosition = inventorySection.offsetTop - headerHeight - 20

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }
}

// Export for global use
window.scrollToInventory = scrollToInventory
