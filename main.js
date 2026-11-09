/* Interactions: language switch, project rendering/filtering, nav, reveal. */

const LANG_KEY = "thomas-site-lang";
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

let lang = localStorage.getItem(LANG_KEY) || "zh";
let activeFilter = "all";
let revealObserver = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || key;
}

/* --------------------------------------------------------------------------
   Language
   -------------------------------------------------------------------------- */

function applyLanguage(nextLang, options = {}) {
  lang = nextLang === "en" ? "en" : "zh";
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(key);
    if (value !== undefined) el.textContent = value;
  });

  document.title = t("page_title");
  const description = $('meta[name="description"]');
  if (description) description.setAttribute("content", t("meta_description"));

  const toggle = $("#lang-toggle");
  if (toggle) {
    toggle.textContent = lang === "zh" ? "EN" : "中";
    toggle.setAttribute(
      "aria-label",
      lang === "zh" ? "Switch to English" : "切换为中文"
    );
    toggle.setAttribute("title", lang === "zh" ? "Switch to English" : "切换为中文");
  }

  renderProjects(options.animateProjects !== false);
}

/* --------------------------------------------------------------------------
   Projects
   -------------------------------------------------------------------------- */

function projectCard(project, index) {
  const link = project.link
    ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">GitHub <span aria-hidden="true">↗</span></a>`
    : "";

  const status = project.status.en.toLowerCase();
  const statusClass = status.includes("award")
    ? "is-award"
    : status.includes("open")
    ? "is-open"
    : status.includes("course")
    ? "is-course"
    : "is-ongoing";

  return `
    <article class="card project-card reveal" data-category="${project.category}" data-project="${project.id}">
      <div class="project-top">
        <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="project-status ${statusClass}">${project.status[lang]}</span>
      </div>
      <h3>${project.title[lang]}</h3>
      <p class="project-subtitle">${project.subtitle[lang]}</p>
      <p class="project-desc">${project.desc[lang]}</p>
      <div class="tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="project-foot">
        <span class="project-metric">${project.metric[lang]}</span>
        ${link}
      </div>
    </article>
  `;
}

function renderProjects(animate = true) {
  const grid = $("#project-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(projectCard).join("");
  applyFilter(activeFilter);

  if (animate) {
    observeReveals();
  } else {
    // Language switch: show the cards immediately, don't replay the reveal.
    $$(".project-card").forEach((card) => card.classList.add("in"));
  }
}

function applyFilter(filter) {
  activeFilter = filter || "all";

  $$(".filter").forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  $$(".project-card").forEach((card) => {
    const show =
      activeFilter === "all" || card.dataset.category === activeFilter;
    card.classList.toggle("is-hidden", !show);
  });
}

/* --------------------------------------------------------------------------
   Reveal on scroll
   -------------------------------------------------------------------------- */

function observeReveals() {
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    $$(".reveal").forEach((el) => el.classList.add("in"));
    return;
  }

  // Safety net: never leave content invisible if the observer misses. For a
  // full-page screenshot or a very short viewport, this guarantees content.
  window.setTimeout(() => {
    $$(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
  }, 1500);

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
  }

  $$(".reveal").forEach((el) => {
    if (el.dataset.revealObserved === "1") return;
    el.dataset.revealObserved = "1";
    revealObserver.observe(el);
  });
}

/* --------------------------------------------------------------------------
   Nav / scroll
   -------------------------------------------------------------------------- */

function initNav() {
  const header = $("#site-header");
  const menuButton = $("#menu-toggle");
  const progress = $("#progress-bar");
  const links = $$(".nav-links a");
  const sections = $$("main section[id]");

  const updateActive = () => {
    if (!sections.length) return;
    const marker = window.scrollY + window.innerHeight * 0.34;
    let current = sections[0].id;
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= marker) current = section.id;
    });
    links.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${current}`
      );
    });
  };

  const onScroll = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    if (progress) {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    }
    updateActive();
  };

  window.addEventListener("resize", updateActive, { passive: true });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      const open = header.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  $$(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      if (menuButton) menuButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      header.classList.remove("is-open");
      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
      }
    }
  });

}

/* --------------------------------------------------------------------------
   Copy email
   -------------------------------------------------------------------------- */

function initCopyEmail() {
  const button = $("#copy-email");
  if (!button) return;

  button.addEventListener("click", async () => {
    const email = button.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    const original = t("contact_copy");
    button.textContent = t("contact_copied");
    window.setTimeout(() => {
      button.textContent = original;
    }, 1600);
  });
}

/* --------------------------------------------------------------------------
   Boot
   -------------------------------------------------------------------------- */

function init() {
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    document.documentElement.classList.add("js-anim");
  }
  applyLanguage(lang);
  initNav();
  initCopyEmail();
  observeReveals();

  $$(".filter").forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  const langToggle = $("#lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(lang === "zh" ? "en" : "zh", {
        animateProjects: false,
      });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
