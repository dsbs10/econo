// Simple Router using Hash-based routing
class Router {
  constructor() {
    this.currentPage = 'home';
    this.init();
  }

  init() {
    // Handle hash changes
    window.addEventListener('hashchange', () => {
      this.navigateTo(this.getPageFromHash());
    });

    // Initial route
    const initialPage = this.getPageFromHash();
    this.navigateTo(initialPage, false);
  }

  getPageFromHash() {
    const hash = window.location.hash.replace('#', '').replace('/', '') || 'home';
    return hash === '' ? 'home' : hash;
  }

  navigateTo(page, updateHash = true) {
    if (this.currentPage === page && updateHash) return;
    
    this.currentPage = page;
    
    if (updateHash) {
      window.location.hash = page === 'home' ? '#' : `#${page}`;
    }

    this.render();
  }

  render() {
    const app = document.getElementById('app');
    
    switch (this.currentPage) {
      case 'home':
        app.innerHTML = renderHomepage();
        break;
      case 'info':
        app.innerHTML = renderInfo();
        this.initInfoHandlers();
        break;
      case 'quiz':
        app.innerHTML = renderQuiz();
        this.initQuizHandlers();
        quizState.init();
        break;
      case 'quellen':
        app.innerHTML = renderQuellen();
        break;
      default:
        app.innerHTML = renderHomepage();
        this.currentPage = 'home';
    }

    // Update header active state
    this.updateHeaderActive();
  }

  updateHeaderActive() {
    setTimeout(() => {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const linkPage = link.dataset.page;
        if (linkPage === this.currentPage) {
          link.classList.add('active');
        }
      });
    }, 0);
  }

  initInfoHandlers() {
    document.querySelectorAll('.info-card').forEach((card, index) => {
      card.addEventListener('click', () => {
        const content = card.querySelector('.info-card-content');
        const expanded = card.classList.toggle('expanded');
        // show or hide the inner content element
        if (content) {
          content.style.display = expanded ? 'block' : 'none';
        }
      });
    });
  }

  initQuizHandlers() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const submitBtn = document.querySelector('.quiz-submit-button:not(:disabled)');
        if (submitBtn) submitBtn.click();
      }
    });
  }
}

// Global router instance
let router;

// Initialize router on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  router = new Router();
});
