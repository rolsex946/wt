/**
 * WEB TRENDS - PREMIUM SPA ROUTER & INTERACTIVITY
 * Developed with robust routing logic that works both as SPA and separate HTML pages.
 */

document.addEventListener("DOMContentLoaded", () => {
  // ===== GLOBAL STATE =====
  const App = {
    currentPage: "home",
    isSPA: true, // Determined by presence of multiple page sections
    //koushik
    // services: [
    //   {
    //     category: "registration",
    //     title: "GST Registration",
    //     icon: "file-text",
    //     desc: "New GSTIN registration for businesses and individuals.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "Firm Registration",
    //     icon: "building-2",
    //     desc: "Partnership and proprietorship firm registration.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "Company Registration",
    //     icon: "building-2",
    //     desc: "Pvt Ltd, LLP, and OPC incorporation services.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "MSME / Udyog Aadhar",
    //     icon: "briefcase",
    //     desc: "Small business registration benefits and subsidies.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "Trade Licence",
    //     icon: "stamp",
    //     desc: "Municipal trade licence application & renewal.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "FSSAI Registration",
    //     icon: "check-circle",
    //     desc: "Food safety license for food businesses.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "Society Registration",
    //     icon: "building-2",
    //     desc: "Registration for NGOs, clubs, and societies.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "Shop & Establishment",
    //     icon: "building-2",
    //     desc: "Commercial establishment registration act.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "Import & Export Code",
    //     icon: "globe",
    //     desc: "IEC for international trade businesses.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "Professional Tax",
    //     icon: "calculator",
    //     desc: "P-Tax enrollment and registration.",
    //     color: "blue",
    //   },
    //   {
    //     category: "registration",
    //     title: "ESI & PF Registration",
    //     icon: "shield-check",
    //     desc: "Employee state insurance & provident fund setup.",
    //     color: "blue",
    //   },
    //   {
    //     category: "tax",
    //     title: "Income Tax Return",
    //     icon: "calculator",
    //     desc: "ITR filing for individuals and businesses.",
    //     color: "orange",
    //   },
    //   {
    //     category: "tax",
    //     title: "GST Return",
    //     icon: "file-text",
    //     desc: "Monthly/Quarterly GST return filing services.",
    //     color: "orange",
    //   },
    //   {
    //     category: "tax",
    //     title: "TDS Return",
    //     icon: "file-text",
    //     desc: "Tax Deducted at Source return filing.",
    //     color: "orange",
    //   },
    //   {
    //     category: "tax",
    //     title: "ESI & PF Return",
    //     icon: "shield-check",
    //     desc: "Monthly compliance for ESI and PF.",
    //     color: "orange",
    //   },
    //   {
    //     category: "finance",
    //     title: "Accounting Service",
    //     icon: "calculator",
    //     desc: "Bookkeeping and daily accounting management.",
    //     color: "blue",
    //   },
    //   {
    //     category: "finance",
    //     title: "Tally Accounting",
    //     icon: "calculator",
    //     desc: "Professional accounting in Tally software.",
    //     color: "blue",
    //   },
    //   {
    //     category: "finance",
    //     title: "Balance Sheet & P/L",
    //     icon: "trending-up",
    //     desc: "Preparation of financial statements.",
    //     color: "blue",
    //   },
    //   {
    //     category: "finance",
    //     title: "Financial Consultancy",
    //     icon: "trending-up",
    //     desc: "Expert advice on loans and finance.",
    //     color: "blue",
    //   },
    //   {
    //     category: "finance",
    //     title: "Life Insurance Advice",
    //     icon: "shield-check",
    //     desc: "Consultation for life insurance policies.",
    //     color: "blue",
    //   },
    //   {
    //     category: "finance",
    //     title: "Health Insurance Advice",
    //     icon: "shield-check",
    //     desc: "Best health plans for you and family.",
    //     color: "blue",
    //   },
    //   {
    //     category: "legal",
    //     title: "Legal Consultancy",
    //     icon: "scale",
    //     desc: "Expert legal advice for business matters.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "legal",
    //     title: "Digital Signature (DSC)",
    //     icon: "pen-tool",
    //     desc: "Class 3 DSC for e-tendering and filing.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "legal",
    //     title: "PAN Card Services",
    //     icon: "file-text",
    //     desc: "New Application and Correction services.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "legal",
    //     title: "TAN Application",
    //     icon: "file-text",
    //     desc: "Tax Deduction Account Number allocation.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "legal",
    //     title: "Trust / NGO / 12A & 80G",
    //     icon: "building-2",
    //     desc: "Trust registration and tax exemption.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "legal",
    //     title: "Partnership Deed",
    //     icon: "file-text",
    //     desc: "Drafting of partnership agreements.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "legal",
    //     title: "Rent Agreement",
    //     icon: "file-text",
    //     desc: "Legal rent agreements for properties.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "legal",
    //     title: "Affidavit - Gift Deed",
    //     icon: "stamp",
    //     desc: "Notary affidavits and gift deeds.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "legal",
    //     title: "Factory Licence",
    //     icon: "building-2",
    //     desc: "Licensing for manufacturing units.",
    //     color: "indigo",
    //   },
    //   {
    //     category: "other",
    //     title: "Cable Operator PNT",
    //     icon: "smartphone",
    //     desc: "PNT registration for cable operators.",
    //     color: "blue",
    //   },
    //   {
    //     category: "other",
    //     title: "Other Online Services",
    //     icon: "globe",
    //     desc: "Various digital and internet services.",
    //     color: "blue",
    //   },
    //],

    services: [
      {
        category: "registration",
        title: "GST Registration",
        icon: "fa-solid fa-file-lines",
        desc: "New GSTIN registration for businesses and individuals.",
        color: "blue",
      },
      {
        category: "registration",
        title: "Firm Registration",
        icon: "fa-solid fa-building",
        desc: "Partnership and proprietorship firm registration.",
        color: "blue",
      },
      {
        category: "registration",
        title: "Company Registration",
        icon: "fa-solid fa-building-columns",
        desc: "Pvt Ltd, LLP, and OPC incorporation services.",
        color: "blue",
      },
      {
        category: "registration",
        title: "MSME / Udyog Aadhar",
        icon: "fa-solid fa-briefcase",
        desc: "Small business registration benefits and subsidies.",
        color: "blue",
      },
      {
        category: "registration",
        title: "Trade Licence",
        icon: "fa-solid fa-stamp",
        desc: "Municipal trade licence application & renewal.",
        color: "blue",
      },
      {
        category: "registration",
        title: "FSSAI Registration",
        icon: "fa-solid fa-circle-check",
        desc: "Food safety license for food businesses.",
        color: "blue",
      },
      {
        category: "registration",
        title: "Society Registration",
        icon: "fa-solid fa-people-group",
        desc: "Registration for NGOs, clubs, and societies.",
        color: "blue",
      },
      {
        category: "registration",
        title: "Shop & Establishment",
        icon: "fa-solid fa-shop",
        desc: "Commercial establishment registration act.",
        color: "blue",
      },
      {
        category: "registration",
        title: "Import & Export Code",
        icon: "fa-solid fa-globe",
        desc: "IEC for international trade businesses.",
        color: "blue",
      },
      {
        category: "registration",
        title: "Professional Tax",
        icon: "fa-solid fa-calculator",
        desc: "P-Tax enrollment and registration.",
        color: "blue",
      },
      {
        category: "registration",
        title: "ESI & PF Registration",
        icon: "fa-solid fa-shield-halved",
        desc: "Employee state insurance & provident fund setup.",
        color: "blue",
      },
      {
        category: "tax",
        title: "Income Tax Return",
        icon: "fa-solid fa-calculator",
        desc: "ITR filing for individuals and businesses.",
        color: "orange",
      },
      {
        category: "tax",
        title: "GST Return",
        icon: "fa-solid fa-file-invoice",
        desc: "Monthly/Quarterly GST return filing services.",
        color: "orange",
      },
      {
        category: "tax",
        title: "TDS Return",
        icon: "fa-solid fa-file-contract",
        desc: "Tax Deducted at Source return filing.",
        color: "orange",
      },
      {
        category: "tax",
        title: "ESI & PF Return",
        icon: "fa-solid fa-shield-halved",
        desc: "Monthly compliance for ESI and PF.",
        color: "orange",
      },
      {
        category: "finance",
        title: "Accounting Service",
        icon: "fa-solid fa-book",
        desc: "Bookkeeping and daily accounting management.",
        color: "blue",
      },
      {
        category: "finance",
        title: "Tally Accounting",
        icon: "fa-solid fa-computer",
        desc: "Professional accounting in Tally software.",
        color: "blue",
      },
      {
        category: "finance",
        title: "Balance Sheet & P/L",
        icon: "fa-solid fa-arrow-trend-up",
        desc: "Preparation of financial statements.",
        color: "blue",
      },
      {
        category: "finance",
        title: "Financial Consultancy",
        icon: "fa-solid fa-hand-holding-dollar",
        desc: "Expert advice on loans and finance.",
        color: "blue",
      },
      {
        category: "finance",
        title: "Life Insurance Advice",
        icon: "fa-solid fa-shield-heart",
        desc: "Consultation for life insurance policies.",
        color: "blue",
      },
      {
        category: "finance",
        title: "Health Insurance Advice",
        icon: "fa-solid fa-heart-pulse",
        desc: "Best health plans for you and family.",
        color: "blue",
      },
      {
        category: "legal",
        title: "Legal Consultancy",
        icon: "fa-solid fa-scale-balanced",
        desc: "Expert legal advice for business matters.",
        color: "indigo",
      },
      {
        category: "legal",
        title: "Digital Signature (DSC)",
        icon: "fa-solid fa-pen-nib",
        desc: "Class 3 DSC for e-tendering and filing.",
        color: "indigo",
      },
      {
        category: "legal",
        title: "PAN Card Services",
        icon: "fa-solid fa-id-card",
        desc: "New Application and Correction services.",
        color: "indigo",
      },
      {
        category: "legal",
        title: "TAN Application",
        icon: "fa-solid fa-file-lines",
        desc: "Tax Deduction Account Number allocation.",
        color: "indigo",
      },
      {
        category: "legal",
        title: "Trust / NGO / 12A & 80G",
        icon: "fa-solid fa-hand-holding-heart",
        desc: "Trust registration and tax exemption.",
        color: "indigo",
      },
      {
        category: "legal",
        title: "Partnership Deed",
        icon: "fa-solid fa-file-signature",
        desc: "Drafting of partnership agreements.",
        color: "indigo",
      },
      {
        category: "legal",
        title: "Rent Agreement",
        icon: "fa-solid fa-file-contract",
        desc: "Legal rent agreements for properties.",
        color: "indigo",
      },
      {
        category: "legal",
        title: "Affidavit - Gift Deed",
        icon: "fa-solid fa-stamp",
        desc: "Notary affidavits and gift deeds.",
        color: "indigo",
      },
      {
        category: "legal",
        title: "Factory Licence",
        icon: "fa-solid fa-industry",
        desc: "Licensing for manufacturing units.",
        color: "indigo",
      },
      {
        category: "other",
        title: "Cable Operator PNT",
        icon: "fa-solid fa-tower-broadcast",
        desc: "PNT registration for cable operators.",
        color: "blue",
      },
      {
        category: "other",
        title: "Other Online Services",
        icon: "fa-solid fa-globe",
        desc: "Various digital and internet services.",
        color: "blue",
      },
    ],
  };

  // ===== PRELOADER =====
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 800);
    });
    // Fallback
    setTimeout(() => {
      preloader.classList.add("loaded");
    }, 3000);
  }

  // ===== UTILITY: Re-initialize Lucide Icons  KOUSHIK=====
  // const refreshIcons = () => {
  //   if (typeof lucide !== "undefined") {
  //     lucide.createIcons();
  //   }
  // };

  // ===== SPA ROUTER =====
  const pageSections = document.querySelectorAll("[data-page]");
  const navLinks = document.querySelectorAll("[data-route]");

  // Determine if we are running in SPA mode (multiple pages exist in DOM)
  if (pageSections.length <= 1) {
    App.isSPA = false;
  }

  const navigateTo = (routeName) => {
    if (!App.isSPA) {
      // Fallback for separate HTML files
      window.location.href = routeName + ".html";
      return;
    }

    // Hide all pages
    pageSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Show target page
    const targetPage = document.querySelector(`[data-page="${routeName}"]`);
    if (targetPage) {
      targetPage.classList.add("active");
      App.currentPage = routeName;

      // Update URL Hash
      window.location.hash = routeName;

      // Update active nav link
      updateActiveNavLink();

      // Scroll to top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Close mobile menu if open
      closeMobileMenu();

      // Re-init icons for the new page
      // refreshIcons();  koushik

      // Trigger scroll animations for new content
      setTimeout(checkAnimations, 100);
    }
  };

  const updateActiveNavLink = () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (
        link.getAttribute("data-route") === App.currentPage ||
        link.getAttribute("href") === `#${App.currentPage}`
      ) {
        link.classList.add("active");
      }
    });
  };

  // Handle Link Clicks
  document.body.addEventListener("click", (e) => {
    const routeLink = e.target.closest("[data-route]");
    if (routeLink) {
      e.preventDefault();
      const route = routeLink.getAttribute("data-route");
      navigateTo(route);
    }
  });

  // Handle Browser Back/Forward
  window.addEventListener("hashchange", () => {
    if (!App.isSPA) return;
    const hash = window.location.hash.substring(1);
    if (hash && hash !== App.currentPage) {
      navigateTo(hash);
    } else if (!hash) {
      navigateTo("home");
    }
  });

  // Initial Route Setup
  if (App.isSPA) {
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
      navigateTo(initialHash);
    } else {
      // Ensure home is active by default
      const homePage = document.querySelector('[data-page="home"]');
      if (homePage) homePage.classList.add("active");
      updateActiveNavLink();
    }
  }

  // ===== NAVIGATION SCROLL EFFECT =====
  const mainNav = document.getElementById("main-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      mainNav.classList.add("scrolled");
    } else {
      mainNav.classList.remove("scrolled");
    }
  });

  // ===== MOBILE MENU =====
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuClose = document.getElementById("mobile-menu-close");

  const openMobileMenu = () => {
    mobileMenu.classList.add("open");
    mobileMenuBtn.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove("open");
    mobileMenuBtn.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMobileMenu);
  if (mobileMenuClose)
    mobileMenuClose.addEventListener("click", closeMobileMenu);

  // ===== TYPEWRITER EFFECT =====
  const typewriterEl = document.getElementById("typewriter-text");
  if (typewriterEl) {
    const words = [
      "Tax Solutions",
      "GST Consultation",
      "Legal Support",
      "Business Growth",
      "ITR Filing",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 80 : 150;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before new word
      }

      setTimeout(type, typeSpeed);
    }

    // Start typewriter
    setTimeout(type, 1000);
  }

  // ===== SERVICE TABS & RENDERING =====
  const renderServices = (targetGridId, filter = "all") => {
    const grid = document.getElementById(targetGridId);
    if (!grid) return;

    grid.innerHTML = "";
    const filtered =
      filter === "all"
        ? App.services
        : App.services.filter((s) => s.category === filter);

    filtered.forEach((service, index) => {
      // Create slug for routing
      const slug = service.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/\//g, "-")
        .replace(/[^a-z0-9-]/g, "");
      const routeName = `service-${slug}`;

      // Check if dedicated page exists, else fallback to services page
      const pageExists =
        document.querySelector(`[data-page="${routeName}"]`) !== null;
      const targetRoute = pageExists ? routeName : "services";

      const card = document.createElement("a");
      card.href = `#${targetRoute}`;
      card.setAttribute("data-route", targetRoute);
      card.className = "service-card";
      card.style.animationDelay = `${index * 50}ms`;

      card.innerHTML = `
                <div class="service-card-accent"></div>
                <div class="service-card-content">
                    <div class="service-card-icon service-card-icon-${service.color}">
                        // <i data-lucide="${service.icon}"></i>
                        <i class="${service.icon}"></i>
                    </div>
                    <h3 class="service-card-title">${service.title}</h3>
                    <p class="service-card-text">${service.desc}</p>
                </div>
            `;
      grid.appendChild(card);
    });

    // refreshIcons();  koushik
  };

  // Init Service Grids
  renderServices("services-grid", "all");
  renderServices("services-grid-full", "all");

  // Tab Click Handler
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-btn")) {
      const tab = e.target;
      const tabGroup = tab.closest(".service-tabs");
      const filter = tab.getAttribute("data-tab");

      // Update active tab
      tabGroup
        .querySelectorAll(".tab-btn")
        .forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");

      // Determine which grid to update
      const gridId = tabGroup.nextElementSibling
        ? tabGroup.nextElementSibling.id
        : "services-grid";
      renderServices(gridId, filter);
    }
  });

  // ===== FAQ ACCORDION =====
  document.body.addEventListener("click", (e) => {
    const question = e.target.closest(".faq-question");
    if (!question) return;

    const faqItem = question.closest(".faq-item");
    const answer = faqItem.querySelector(".faq-answer");
    const isActive = faqItem.classList.contains("active");

    // Close all in same container
    const container = faqItem.closest(".faq-container");
    container.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".faq-answer").style.maxHeight = "0";
    });

    // Open clicked (if was closed)
    if (!isActive) {
      faqItem.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });

  // ===== MODAL LOGIC =====
  const modal = document.getElementById("consult-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const consultTriggers = document.querySelectorAll(
    ".consult-trigger, #hero-consult-btn, #cta-consult-btn",
  );

  const openModal = () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    // refreshIcons(); koushik
  };

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  consultTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ===== TOAST NOTIFICATION =====
  const showToast = (message) => {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add("active");

    setTimeout(() => {
      toast.classList.remove("active");
    }, 3000);
  };

  // ===== WHATSAPP FORM SUBMISSION =====
  const formatWhatsAppMessage = (data) => {
    let message = `🌟 *New Consultation Request* 🌟\n\n`;
    message += `*Name:* ${data.name}\n`;
    message += `*Phone:* ${data.phone}\n`;
    if (data.email) message += `*Email:* ${data.email}\n`;
    if (data.service) message += `*Service Required:* ${data.service}\n`;
    if (data.preferred_time)
      message += `*Preferred Time:* ${data.preferred_time}\n`;
    if (data.message) message += `*Message:* ${data.message}\n`;
    message += `\n---\nSent from Web Trends Website`;
    return encodeURIComponent(message);
  };

  const sendToWhatsApp = (data) => {
    const phone = "919903575757"; // WhatsApp number with country code
    const message = formatWhatsAppMessage(data);
    const waURL = `https://wa.me/${phone}?text=${message}`;

    window.open(waURL, "_blank");
    showToast("Redirecting to WhatsApp...");
  };

  // Consultation Form Submit
  const consultForm = document.getElementById("consult-form");
  if (consultForm) {
    consultForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(consultForm);
      const data = Object.fromEntries(formData.entries());

      sendToWhatsApp(data);
      consultForm.reset();
      closeModal();
    });
  }

  // Contact Form Submit
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      sendToWhatsApp(data);
      contactForm.reset();
    });
  }

  // ===== FOOTER YEAR =====
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== SCROLL ANIMATIONS (Intersection Observer) =====
  const animElements = document.querySelectorAll(".anim-fade-up");

  const checkAnimations = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    animElements.forEach((el) => observer.observe(el));
  };

  checkAnimations();

  // ===== INITIALIZE LUCIDE ICONS =====
  // refreshIcons(); koushik
});
