// Mobile Menu Functionality
class MobileMenu {
  constructor() {
    this.hamburgerBtn = document.querySelector(".hamburger-btn");
    this.mobileMenu = document.querySelector(".mobile-menu");
    this.menuOverlay = document.querySelector(".menu-overlay");
    this.body = document.body;
    this.isOpen = false;

    this.init();
  }

  init() {
    if (!this.hamburgerBtn || !this.mobileMenu) {
      console.warn("Mobile menu elements not found");
      return;
    }

    // Create overlay if it doesn't exist
    if (!this.menuOverlay) {
      this.createOverlay();
    }

    this.bindEvents();
    this.handleResize();
  }

  createOverlay() {
    this.menuOverlay = document.createElement("div");
    this.menuOverlay.className = "menu-overlay";
    document.body.appendChild(this.menuOverlay);
  }

  bindEvents() {
    // Hamburger button click
    this.hamburgerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggle();
    });

    // Overlay click
    if (this.menuOverlay) {
      this.menuOverlay.addEventListener("click", () => {
        this.close();
      });
    }

    // Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });

    // Mobile nav links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.close();
      });
    });

    // Window resize
    window.addEventListener("resize", () => {
      this.handleResize();
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.hamburgerBtn.classList.add("active");
    this.mobileMenu.classList.add("active");
    if (this.menuOverlay) {
      this.menuOverlay.classList.add("active");
    }
    this.body.style.overflow = "hidden";
    this.trapFocus();
  }

  close() {
    this.isOpen = false;
    this.hamburgerBtn.classList.remove("active");
    this.mobileMenu.classList.remove("active");
    if (this.menuOverlay) {
      this.menuOverlay.classList.remove("active");
    }
    this.body.style.overflow = "";
    this.hamburgerBtn.focus();
  }

  handleResize() {
    if (window.innerWidth > 768 && this.isOpen) {
      this.close();
    }
  }

  trapFocus() {
    const focusableElements = this.mobileMenu.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    this.mobileMenu.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new MobileMenu();
});