/**
 * Tanahun Tourism Site - Main JavaScript
 * Handles carousel, modals, passport, mood filtering, and localStorage persistence
 */

class TanahunApp {
  constructor() {
    this.visited = new Set(this.loadVisited());
    this.activeMood = null;
    this.activeTab = "overview";
    this.cardWidth = 322; // 300 + 22px gap
    this.autoTimer = null;
    this.offset = 0;
    this.playing = true;
    this.track = null;

    this.init();
  }

  init() {
    this.buildFlags();
    this.renderCarousel();
    this.renderCulture();
    this.renderMoods();
    this.updatePassportUI();
    this.setupEventListeners();
    this.startAuto();
    this.setupScrollListener();
  }

  // ========== FLAG BUNTING ==========
  buildFlags() {
    const el = document.getElementById("bunting");
    let html = "";
    for (let i = 0; i < 24; i++) {
      html += `<div class="flag" style="background:${FLAG_COLORS[i % FLAG_COLORS.length]}"></div>`;
    }
    el.innerHTML = html;
  }

  // ========== CAROUSEL ==========
  cardHTML(p) {
    return `
      <div class="place-card" data-id="${p.id}" role="listitem">
        <div class="place-img" style="background:${p.grad}"></div>
        <img src="${p.img}" alt="${p.name}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'">
        <div class="place-grad"></div>
        <div class="stamped-badge ${this.visited.has(p.id) ? 'show' : ''}" data-badge="${p.id}" aria-hidden="true">✓</div>
        <div class="place-info">
          <span class="place-tag">${p.tag}</span>
          <h3>${p.name}</h3>
          <p>${p.desc.slice(0, 58)}…</p>
        </div>
      </div>
    `;
  }

  renderCarousel() {
    this.track = document.getElementById("carousel");
    const all = [...PLACES, ...PLACES, ...PLACES];
    this.track.innerHTML = all.map(p => this.cardHTML(p)).join("");

    this.track.querySelectorAll(".place-card").forEach(el => {
      el.onclick = () => this.openModal(el.dataset.id);
      el.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.openModal(el.dataset.id);
        }
      });
    });

    this.offset = PLACES.length * this.cardWidth;
    this.track.style.transform = `translateX(${-this.offset}px)`;
  }

  refreshBadges() {
    document.querySelectorAll(".stamped-badge").forEach(b => {
      b.classList.toggle("show", this.visited.has(b.dataset.badge));
    });
  }

  autoStep() {
    this.offset += 0.6;
    const setWidth = PLACES.length * this.cardWidth;
    if (this.offset >= setWidth * 2) {
      this.offset -= setWidth;
    }
    this.track.style.transform = `translateX(${-this.offset}px)`;
    this.autoTimer = requestAnimationFrame(() => this.autoStep());
  }

  startAuto() {
    if (!this.playing) return;
    cancelAnimationFrame(this.autoTimer);
    this.autoTimer = requestAnimationFrame(() => this.autoStep());
  }

  stopAuto() {
    cancelAnimationFrame(this.autoTimer);
  }

  jump(dir) {
    this.offset += dir * this.cardWidth;
    const setWidth = PLACES.length * this.cardWidth;
    if (this.offset >= setWidth * 2) this.offset -= setWidth;
    if (this.offset < setWidth) this.offset += setWidth;

    this.track.style.transition = "transform 0.5s ease";
    this.track.style.transform = `translateX(${-this.offset}px)`;
    setTimeout(() => { this.track.style.transition = ""; }, 500);
  }

  // ========== CULTURE GRID ==========
  renderCulture() {
    const grid = document.getElementById("cultureGrid");
    grid.innerHTML = FESTIVALS.map(f => `
      <div class="culture-card" role="listitem">
        <div class="culture-thumb" style="background:linear-gradient(160deg, rgba(255,255,255,0.12), rgba(0,0,0,0.15))">${f.icon}</div>
        <div class="culture-body">
          <span class="ctag">${f.tag}</span>
          <h3>${f.name}</h3>
          <p>${f.desc}</p>
        </div>
      </div>
    `).join("");
  }

  // ========== MODAL / PLACE DETAIL ==========
  openModal(id) {
    const p = PLACES.find(x => x.id === id);
    if (!p) return;

    this.activeTab = "overview";
    this.renderModal(p);
    document.getElementById("modalBackdrop").classList.add("open");
    document.getElementById("modalBackdrop").focus();
    this.stopAuto();
    this.playing = false;
    document.getElementById("playPause").textContent = "▶ Play";
  }

  renderModal(p) {
    const isStamped = this.visited.has(p.id);
    const modal = document.getElementById("modalContent");

    const TABS = [
      { key: "overview", label: "Overview" },
      { key: "culture", label: "History & Culture" },
      { key: "visit", label: "Plan Your Visit" },
      { key: "stay", label: "Stay & Nearby" }
    ];

    modal.innerHTML = `
      <div class="modal-hero" style="background:${p.grad}">
        <img src="${p.img}" alt="${p.name}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'">
        <div class="place-grad"></div>
        <button class="modal-close" id="modalCloseBtn" aria-label="Close">✕</button>
        <div class="modal-hero-info">
          <span class="place-tag">${p.tag}</span>
          <h2 id="modalTitle">${p.name}</h2>
        </div>
      </div>
      <div class="modal-body">
        <div class="detail-nav" id="detailNav">
          ${TABS.map(t => `<button data-tab="${t.key}" class="${t.key === this.activeTab ? 'active' : ''}">${t.label}</button>`).join("")}
        </div>

        <div class="detail-panel ${this.activeTab === 'overview' ? 'active' : ''}" data-panel="overview">
          <p class="modal-desc">${p.desc}</p>
          <div class="modal-block">
            <h4>🎊 Festivals tied to this place</h4>
            <div class="chip-row">${p.festivals.map(f => `<span class="chip fest">${f}</span>`).join("")}</div>
          </div>
        </div>

        <div class="detail-panel ${this.activeTab === 'culture' ? 'active' : ''}" data-panel="culture">
          <p class="modal-desc">${p.history}</p>
        </div>

        <div class="detail-panel ${this.activeTab === 'visit' ? 'active' : ''}" data-panel="visit">
          <div class="info-row"><span class="ic">🗓️</span><span class="lbl">Best time</span><span class="val">${p.bestTime}</span></div>
          <div class="info-row"><span class="ic">🚙</span><span class="lbl">How to reach</span><span class="val">${p.reach}</span></div>
        </div>

        <div class="detail-panel ${this.activeTab === 'stay' ? 'active' : ''}" data-panel="stay">
          <div class="modal-grid">
            <div class="modal-block">
              <h4>🏨 Nearby stays</h4>
              <ul class="mini-list">${p.hotels.map(h => `<li><span class="name">${h[0]}</span><span class="meta">${h[1]}</span></li>`).join("")}</ul>
            </div>
            <div class="modal-block">
              <h4>📍 Nearby attractions</h4>
              <div class="chip-row">${p.nearby.map(n => `<span class="chip">${n}</span>`).join("")}</div>
            </div>
          </div>
        </div>

        <button class="stamp-cta ${isStamped ? 'done' : ''}" id="stampBtn">
          ${isStamped ? '🎉 Stamped ✓' : '📮 Stamp my passport'}
        </button>
      </div>
    `;

    document.getElementById("modalCloseBtn").onclick = () => this.closeModal();
    document.getElementById("stampBtn").onclick = () => this.stampPlace(p.id);

    document.getElementById("detailNav").querySelectorAll("button").forEach(btn => {
      btn.onclick = () => {
        this.activeTab = btn.dataset.tab;
        this.renderModal(p);
      };
    });
  }

  closeModal() {
    document.getElementById("modalBackdrop").classList.remove("open");
    this.playing = true;
    document.getElementById("playPause").textContent = "⏸ Pause";
    this.startAuto();
  }

  stampPlace(id) {
    if (!this.visited.has(id)) {
      this.visited.add(id);
      this.saveVisited();
    }
    const p = PLACES.find(x => x.id === id);
    this.renderModal(p);
    this.refreshBadges();
    this.updatePassportUI();

    const btn = document.getElementById("openPassport");
    btn.style.transform = "scale(1.15)";
    setTimeout(() => { btn.style.transform = "scale(1)"; }, 220);
  }

  // ========== PASSPORT ==========
  updatePassportUI() {
    document.getElementById("passportCount").textContent = this.visited.size;
    const grid = document.getElementById("stampGrid");
    grid.innerHTML = PLACES.map(p => {
      const filled = this.visited.has(p.id);
      return `<div class="stamp-slot ${filled ? 'filled' : ''}" role="listitem">${filled ? '✓' : ''}<span class="sname">${p.name}</span></div>`;
    }).join("");

    document.getElementById("progressFill").style.width = (this.visited.size / PLACES.length * 100) + "%";
    document.getElementById("progressFill").setAttribute("aria-valuenow", this.visited.size);
    document.getElementById("passportNote").style.display = this.visited.size === 0 ? "block" : "none";
  }

  saveVisited() {
    localStorage.setItem("tanahun_visited", JSON.stringify([...this.visited]));
  }

  loadVisited() {
    try {
      const stored = localStorage.getItem("tanahun_visited");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("Could not load visited places from localStorage", e);
      return [];
    }
  }

  // ========== MOOD FILTER ==========
  renderMoods() {
    const row = document.getElementById("moodRow");
    row.innerHTML = Object.keys(MOODS).map(key => `
      <button class="mood-chip ${this.activeMood === key ? 'active' : ''}" data-mood="${key}">
        ${MOODS[key]}
      </button>
    `).join("");

    row.querySelectorAll("button").forEach(btn => {
      btn.onclick = () => {
        this.activeMood = this.activeMood === btn.dataset.mood ? null : btn.dataset.mood;
        this.renderMoods();
        this.renderMoodResult();
      };
    });
  }

  renderMoodResult() {
    const box = document.getElementById("moodResult");
    if (!this.activeMood) {
      box.innerHTML = "";
      return;
    }

    const matches = PLACES.filter(p => p.mood.includes(this.activeMood));
    box.innerHTML = `<div class="mood-row">` + matches.map(p => `
      <div class="place-card" style="flex:0 0 260px; height:150px;" data-id="${p.id}">
        <div class="place-img" style="background:${p.grad}"></div>
        <img src="${p.img}" alt="${p.name}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'">
        <div class="place-grad"></div>
        <div class="place-info"><h3 style="font-size:1.1rem;">${p.name}</h3></div>
      </div>
    `).join("") + `</div>`;

    box.querySelectorAll(".place-card").forEach(el => {
      el.onclick = () => this.openModal(el.dataset.id);
    });
  }

  // ========== EVENT LISTENERS ==========
  setupEventListeners() {
    // Modal backdrop
    document.getElementById("modalBackdrop").addEventListener("click", (e) => {
      if (e.target.id === "modalBackdrop") this.closeModal();
    });

    // Passport
    document.getElementById("openPassport").onclick = () => {
      document.getElementById("passportBackdrop").classList.add("open");
      this.stopAuto();
    };

    document.getElementById("closePassport").onclick = () => {
      document.getElementById("passportBackdrop").classList.remove("open");
      this.startAuto();
    };

    document.getElementById("passportBackdrop").addEventListener("click", (e) => {
      if (e.target.id === "passportBackdrop") {
        e.currentTarget.classList.remove("open");
        this.startAuto();
      }
    });

    // Carousel controls
    document.getElementById("prevBtn").onclick = () => this.jump(-1);
    document.getElementById("nextBtn").onclick = () => this.jump(1);

    document.getElementById("playPause").onclick = (e) => {
      this.playing = !this.playing;
      e.target.textContent = this.playing ? "⏸ Pause" : "▶ Play";
      if (this.playing) this.startAuto();
      else this.stopAuto();
    };

    // Carousel hover
    document.getElementById("carouselWrap").addEventListener("mouseenter", () => {
      if (this.playing) this.stopAuto();
    });

    document.getElementById("carouselWrap").addEventListener("mouseleave", () => {
      if (this.playing) this.startAuto();
    });

    // Keyboard navigation for carousel
    document.addEventListener("keydown", (e) => {
      if (document.getElementById("modalBackdrop").classList.contains("open")) return;
      if (e.key === "ArrowLeft") this.jump(-1);
      if (e.key === "ArrowRight") this.jump(1);
    });
  }

  setupScrollListener() {
    window.addEventListener("scroll", () => {
      document.getElementById("topbar").classList.toggle("solid", window.scrollY > 60);
    });
  }
}

// ========== INITIALIZE APP ==========
document.addEventListener("DOMContentLoaded", () => {
  new TanahunApp();
});
