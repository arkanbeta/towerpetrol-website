/*
  Tower Petrol main interactions.
  Handles language switching, mobile menu, WhatsApp link, service rendering, gallery rendering, and scroll reveal animation.
*/

"use strict";

    let currentLang = "ar";

    function updateWhatsAppLinks(lang){
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(messages[lang])}`;
      document.querySelectorAll("#heroWhatsApp,#contactWhatsApp,#floatWhatsApp").forEach(a => a.href = url);
    }

    function renderServices(lang){
      const list = document.getElementById("serviceList");
      list.innerHTML = services[lang].map((item,index)=>`
        <article class="service-card" data-reveal>
          <div class="service-photo"><img src="assets/images/${item.img}" alt="${item.title}"></div>
          <div class="service-body">
            <div class="service-index">0${index+1}</div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <div class="tags">${item.tags.map(tag=>`<span class="tag">${tag}</span>`).join("")}</div>
          </div>
        </article>
      `).join("");
    }

    function renderGallery(lang){
      const grid = document.getElementById("galleryGrid");
      grid.innerHTML = gallery[lang].map(item=>`
        <figure class="gallery-item ${item.cls}" data-reveal>
          <img src="assets/images/${item.img}" alt="${item.label}">
          <figcaption class="gallery-label">${item.label}</figcaption>
        </figure>
      `).join("");
    }

    function applyLanguage(lang){
      currentLang = lang;
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
      document.title = lang === "en" ? "Tower Petrol" : (lang === "ku" ? "تاوەر پێترۆل" : "تاور بترول");

      document.querySelectorAll("[data-i18n]").forEach(el=>{
        const key = el.getAttribute("data-i18n");
        if(text[lang][key]) el.textContent = text[lang][key];
      });
      document.querySelectorAll("[data-i18n-html]").forEach(el=>{
        const key = el.getAttribute("data-i18n-html");
        if(text[lang][key]) el.innerHTML = text[lang][key];
      });
      document.querySelectorAll("[data-lang]").forEach(btn=>btn.classList.toggle("active", btn.dataset.lang === lang));
      updateWhatsAppLinks(lang);
      renderServices(lang);
      renderGallery(lang);
      initReveal(true);
    }

const menuBtn = document.querySelector(".menu-btn");
const mobilePanel = document.querySelector(".mobile-panel");

let menuOpenedAtY = window.scrollY;
let ignoreScrollUntil = 0;

function isMobileMenuOpen(){
  return mobilePanel && mobilePanel.classList.contains("open");
}

function openMobileMenu(){
  if(!mobilePanel || !menuBtn) return;

  mobilePanel.classList.add("open");
  menuBtn.setAttribute("aria-expanded", "true");

  // Remember where the user was when the menu opened.
  menuOpenedAtY = window.scrollY;

  // Prevent instant close caused by tiny layout/browser scroll events.
  ignoreScrollUntil = Date.now() + 250;
}

function closeMobileMenu(){
  if(!mobilePanel || !menuBtn) return;
  if(!isMobileMenuOpen()) return;

  mobilePanel.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu(){
  if(isMobileMenuOpen()){
    closeMobileMenu();
  }else{
    openMobileMenu();
  }
}

// Language buttons
document.querySelectorAll("[data-lang]").forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    applyLanguage(btn.dataset.lang);

    // If language was selected from the mobile menu, close the menu.
    if(btn.closest(".mobile-panel")){
      closeMobileMenu();
    }
  });
});

// Menu button
if(menuBtn && mobilePanel){
  menuBtn.addEventListener("click", (event)=>{
    event.stopPropagation();
    toggleMobileMenu();
  });

  // Close mobile menu when clicking navigation links.
  mobilePanel.querySelectorAll("a").forEach((link)=>{
    link.addEventListener("click", closeMobileMenu);
  });

  // Close menu when the user actually scrolls away from the opening position.
  window.addEventListener("scroll", ()=>{
    if(!isMobileMenuOpen()) return;
    if(Date.now() < ignoreScrollUntil) return;

    const scrollDistance = Math.abs(window.scrollY - menuOpenedAtY);

    if(scrollDistance > 8){
      closeMobileMenu();
    }
  }, { passive:true });

  // Desktop/laptop wheel scroll.
  window.addEventListener("wheel", ()=>{
    if(!isMobileMenuOpen()) return;
    if(Date.now() < ignoreScrollUntil) return;

    closeMobileMenu();
  }, { passive:true });

  // Mobile finger scroll.
  window.addEventListener("touchmove", ()=>{
    if(!isMobileMenuOpen()) return;
    if(Date.now() < ignoreScrollUntil) return;

    closeMobileMenu();
  }, { passive:true });
}

    let revealObserver;
    function initReveal(reconnect=false){
      if(revealObserver && reconnect) revealObserver.disconnect();
      const items = document.querySelectorAll("[data-reveal]");
      revealObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, {threshold:.12, rootMargin:"0px 0px -40px 0px"});
      items.forEach((item,index)=>{
        item.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
        revealObserver.observe(item);
      });
    }

    applyLanguage("ar");
  
