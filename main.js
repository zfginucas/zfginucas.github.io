'use strict';

(() => {
  const byId = id => document.getElementById(id);
  let language = 'en';
  try { if (localStorage.getItem('thomas-academic-language') === 'zh') language = 'zh'; } catch (_) {}
  let filter = 'all';
  let expanded = false;
  const openDetails = new Set();
  let copyTimer;

  // These schematics illustrate each project's workflow, not benchmark results.
  const diagrams = {
    agents: `<path d="M80 39v14M80 53H35v14M80 53v14M80 53h45v14"/><rect x="43" y="16" width="74" height="23" rx="3"/><text x="80" y="31">Supervisor</text><rect x="16" y="67" width="38" height="22" rx="3"/><rect x="61" y="67" width="38" height="22" rx="3"/><rect x="106" y="67" width="38" height="22" rx="3"/><text x="35" y="81">Tool</text><text x="80" y="81">Tool</text><text x="125" y="81">Tool</text><path d="M35 89v11h90V89"/><text x="80" y="116" class="diagram-caption">Shared state</text>`,
    alignment: `<rect x="15" y="16" width="130" height="23" rx="3"/><text x="80" y="31">Omics knowledge</text><path d="M80 39v12"/><rect x="38" y="51" width="84" height="24" rx="3"/><text x="80" y="67">Qwen3-8B</text><path d="M80 75v12"/><rect x="15" y="87" width="130" height="23" rx="3"/><text x="80" y="102">SFT → DPO → RLVR</text>`,
    operator: `<rect x="18" y="18" width="53" height="26" rx="3"/><text x="44.5" y="35">Generate</text><path d="M71 31h19"/><path d="m85 27 5 4-5 4"/><rect x="91" y="18" width="51" height="26" rx="3"/><text x="116.5" y="35">Compile</text><path d="M116 44v29"/><path d="m112 68 4 5 4-5"/><rect x="88" y="74" width="58" height="26" rx="3"/><text x="117" y="91">Evaluate</text><path d="M88 87H71"/><path d="m76 83-5 4 5 4"/><rect x="17" y="74" width="54" height="26" rx="3"/><text x="44" y="91">Reflect</text><path d="M44 74V44"/><path d="m40 49 4-5 4 5"/>`,
    robot: `<path d="M22 104h116"/><circle cx="71" cy="94" r="10"/><circle cx="93" cy="94" r="10"/><path d="M62 84h40l-7-38H69Z"/><rect x="72" y="30" width="18" height="16" rx="2"/><path d="M81 30V17M77 21l4-4 4 4M48 52l-13 14 13 14M113 52l13 14-13 14"/><text x="81" y="65">RL</text><text x="80" y="120" class="diagram-caption">Sim → real</text>`,
    risk: `<rect x="17" y="18" width="48" height="35" rx="3"/><path d="M25 28h31M25 35h23M25 42h27"/><path d="M65 36h21M81 32l5 4-5 4"/><path d="M114 17 138 25v18c0 12-24 24-24 24S90 55 90 43V25Z"/><path d="m104 40 7 7 13-14"/><path d="M114 67v14H44V53"/><rect x="28" y="82" width="103" height="24" rx="3"/><text x="80" y="98">On-chain evidence</text>`,
    web: `<rect x="14" y="19" width="132" height="90" rx="3"/><path d="M14 36h132"/><circle cx="24" cy="28" r="1"/><circle cx="31" cy="28" r="1"/><circle cx="38" cy="28" r="1"/><rect x="26" y="49" width="75" height="12" rx="2"/><rect x="26" y="69" width="75" height="12" rx="2"/><rect x="26" y="90" width="45" height="8" rx="2"/><path d="m112 62 19 13-10 3-4 10Z"/>`
  };

  function schematic(type) {
    return `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.15"><g>${diagrams[type]}</g></svg>`;
  }

  function renderProjects() {
    const copy = COPY[language];
    const projects = filter === 'all' ? (expanded ? PROJECTS : PROJECTS.slice(0, 3)) : PROJECTS.filter(project => project.category === filter);
    byId('project-list').innerHTML = projects.map(project => {
      const item = project[language];
      const isOpen = openDetails.has(project.id);
      return `<article class="project-row" id="project-${project.id}">
        <div class="project-figure">${schematic(project.diagram)}</div>
        <div class="project-copy"><p class="project-meta">${item.meta}</p><h3 class="project-title">${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">${item.title}</a>` : item.title}</h3>
        <p class="project-description">${item.description}</p>
        <div class="project-links">${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">${copy.code} <span aria-hidden="true">↗</span><span class="sr-only"> — ${item.title}</span></a>` : ''}<button class="project-detail-toggle" type="button" data-details="${project.id}" aria-expanded="${isOpen}" aria-controls="detail-${project.id}">${isOpen ? copy.closeDetails : copy.details}<span class="detail-symbol" aria-hidden="true">${isOpen ? '−' : '+'}</span><span class="sr-only"> — ${item.title}</span></button></div>
        <div class="project-details" id="detail-${project.id}" ${isOpen ? '' : 'hidden'}><p>${item.details}</p></div></div>
      </article>`;
    }).join('');
    byId('project-count').textContent = `${projects.length} ${projects.length === 1 ? copy.projectSingular : copy.projectPlural}`;
    const more = byId('more-projects');
    more.hidden = filter !== 'all';
    more.setAttribute('aria-expanded', String(expanded));
    more.innerHTML = `<span>${expanded ? copy.showLess : copy.showMore}</span><span aria-hidden="true">${expanded ? '↑' : '↓'}</span>`;
  }

  function applyLanguage() {
    const copy = COPY[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = copy[node.dataset.i18n];
      if (value !== undefined) node.innerHTML = value;
    });
    const toggle = byId('language-toggle');
    toggle.innerHTML = `${language === 'en' ? '中文' : 'EN'} <span aria-hidden="true">↔</span>`;
    toggle.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
    document.querySelector('.header-nav').setAttribute('aria-label', language === 'en' ? 'Main navigation' : '主导航');
    document.querySelector('.profile').setAttribute('aria-label', language === 'en' ? 'Profile' : '个人资料');
    document.querySelector('.portrait').alt = language === 'en' ? 'Illustrated portrait of Thomas Zhao' : 'Thomas Zhao 的插画头像';
    document.querySelector('.project-filters').setAttribute('aria-label', language === 'en' ? 'Filter projects' : '筛选项目');
    byId('copy-status').textContent = '';
    clearTimeout(copyTimer);
    renderProjects();
  }

  byId('language-toggle').addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    try { localStorage.setItem('thomas-academic-language', language); } catch (_) {}
    applyLanguage();
  });

  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderProjects();
  }));

  byId('more-projects').addEventListener('click', () => {
    expanded = !expanded;
    renderProjects();
    if (!expanded) byId('more-projects').scrollIntoView({ block: 'nearest' });
  });

  byId('project-list').addEventListener('click', event => {
    const button = event.target.closest('[data-details]');
    if (!button) return;
    const id = button.dataset.details;
    const isOpen = !openDetails.has(id);
    isOpen ? openDetails.add(id) : openDetails.delete(id);
    button.setAttribute('aria-expanded', String(isOpen));
    const title = PROJECTS.find(project => project.id === id)[language].title;
    button.innerHTML = `${isOpen ? COPY[language].closeDetails : COPY[language].details}<span class="detail-symbol" aria-hidden="true">${isOpen ? '−' : '+'}</span><span class="sr-only"> — ${title}</span>`;
    byId(`detail-${id}`).hidden = !isOpen;
  });

  byId('copy-email').addEventListener('click', async () => {
    clearTimeout(copyTimer);
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText('1872814140@qq.com');
      else {
        const field = document.createElement('textarea');
        field.value = '1872814140@qq.com';
        field.style.cssText = 'position:fixed;left:-9999px';
        document.body.appendChild(field);
        field.select();
        const result = document.execCommand('copy');
        field.remove();
        byId('copy-email').focus({ preventScroll: true });
        if (!result) throw new Error('copy failed');
      }
      byId('copy-email').textContent = COPY[language].copied;
      byId('copy-status').textContent = COPY[language].copied;
    } catch (_) {
      byId('copy-status').classList.remove('sr-only');
      byId('copy-status').textContent = COPY[language].copyFailed;
    }
    copyTimer = setTimeout(() => { byId('copy-email').textContent = COPY[language].copyEmail; byId('copy-status').textContent = ''; byId('copy-status').classList.add('sr-only'); }, 2200);
  });

  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.header-nav a')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-12% 0px -65% 0px' });
    links.forEach(link => observer.observe(document.querySelector(link.hash)));
  }
  applyLanguage();
})();
