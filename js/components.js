// Component Rendering Functions

// Header Component
function renderHeader(logo = 'Econome', gradientColors = ["#5B0311", "#647981"]) {
  const gradientStyle = `linear-gradient(135deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`;

  return `
    <header class="header" style="background: ${gradientStyle};">
      <div class="header-container">
        <div class="logo">${logo}</div>
        
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav" id="nav">
          <a class="nav-link" href="#" data-page="home">Home</a>
          <a class="nav-link" href="#info" data-page="info">Info</a>
          <a class="nav-link" href="#quiz" data-page="quiz">Quiz</a>
          <a class="nav-link" href="#quellen" data-page="quellen">Quellen</a>
        </nav>
      </div>
    </header>

    <script>
      const hamburger = document.getElementById('hamburger');
      const nav = document.getElementById('nav');
      const navLinks = document.querySelectorAll('.nav-link');

      if (hamburger) {
        hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          nav.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
          });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.header-container')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
          }
        });
      }
    </script>
  `;
}

// Sticky Note Component
function renderStickyNote(note) {
  const gradientStyle = `linear-gradient(145deg, ${note.colors[0]} 10%, ${note.colors[1]} 100%)`;
  const textContent = (note.text || '').replace(/\n/g, '\n');

  return `
    <div
      class="sticky-note"
      style="
        background: ${gradientStyle};
        left: ${note.x}px;
        top: ${note.y}px;
        width: ${note.width}px;
        height: ${note.height}px;
        transform: rotate(${note.rotation}deg);
      "
    >
      ${note.header ? `<div class="sticky-note-header">${note.header}</div>` : ''}
      <div class="sticky-note-content">
        ${note.text ? `<div class="sticky-note-text">${textContent}</div>` : ''}
      </div>
    </div>
  `;
}

// Homepage Renderer
function renderHomepage() {
  const colorArray = ["#5B0311", "#647981"];
  const gradientStyle = `linear-gradient(135deg, ${colorArray[0]} 0%, ${colorArray[1]} 100%)`;

  let content = renderHeader("Homepage", colorArray);
  content += `
    <main style="padding-bottom: 2rem; min-height: 100vh; overflow-y: auto; position: relative; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
      <div class="homepage-header">
        <h1>Willkommen bei Econome</h1>
        <p>Entdecken Sie die Welt der Zölle und internationalen Handelsbeziehungen</p>
      </div>
  `;

  // Group sticky notes by row
  const rows = {
    1: stickyNotesData.filter(n => !n.row || n.row === 1),
    2: stickyNotesData.filter(n => n.row === 2),
    3: stickyNotesData.filter(n => n.row === 3)
  };

  // Render each row
  for (let rowNum = 1; rowNum <= 3; rowNum++) {
    const rowNotes = rows[rowNum];
    if (rowNotes.length > 0) {
      const height = rowNum === 1 ? 550 : rowNum === 2 ? 520 : 450;
      const marginLeft = rowNum === 3 ? '20rem' : '14rem';
      
      content += `
        <div style="position: relative; height: ${height}px; margin-bottom: 1rem; margin-left: ${marginLeft};">
          ${rowNotes.map(note => renderStickyNote(note)).join('')}
        </div>
      `;
    }
  }

  content += `</main>`;
  
  return content;
}

// Info Page Renderer
function renderInfo() {
  const colorArray = ["#5B0311", "#647981"];

  let content = renderHeader("Info", colorArray);
  content += `
    <div class="maincont">
      <div class="info-container">
        <div class="info-header">
          <h1>Ökonomische Konzepte</h1>
          <p>Klicken Sie auf eine Karte, um mehr zu erfahren</p>
        </div>
        
        <div class="info-grid">
  `;

  infoData.forEach((info, index) => {
    content += `
      <div class="info-card" data-index="${index}">
        <div class="info-card-header">
          <h2>${info.title}</h2>
          <span class="expand-icon">+</span>
        </div>
        
        <div class="info-card-content" style="display: none;">
          <p class="info-description">${info.content}</p>
          
          ${info.advantages && info.advantages.length > 0 ? `
            <div class="info-section">
              <h3>${info.advantagesLabel || "Typische Vorteile"}</h3>
              <ul>
                ${info.advantages.map(advantage => `<li>${advantage}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          
          ${info.examples && info.examples.length > 0 ? `
            <div class="info-section">
              <h3>${info.examplesLabel || "Beispiele"}</h3>
              <ul>
                ${info.examples.map(example => `<li>${example}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  });

  content += `
        </div>
      </div>
    </div>
  `;

  return content;
}

// Quiz Page Renderer
function renderQuiz() {
  const colorArray = ["#5B0311", "#647981"];

  let content = renderHeader("Quiz", colorArray);
  content += `
    <main style="padding: 2rem; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: calc(100vh - 100px);">
      <div class="quiz-container" id="quiz-container"></div>
    </main>
  `;

  return content;
}

// Quiz State Management
const quizState = {
  currentQuestion: 0,
  score: 0,
  answered: false,
  selectedAnswer: null,
  shortAnswer: '',
  isCorrect: false,

  init() {
    this.currentQuestion = 0;
    this.score = 0;
    this.answered = false;
    this.selectedAnswer = null;
    this.shortAnswer = '';
    this.isCorrect = false;
    this.render();
  },

  render() {
    const container = document.getElementById('quiz-container');
    
    if (this.currentQuestion >= quizQuestions.length && this.answered) {
      // Quiz Complete
      container.innerHTML = `
        <div class="quiz-complete">
          <h1>Quiz abgeschlossen!</h1>
          <p>Sie haben <strong>${this.score}</strong> von <strong>${quizQuestions.length}</strong> Fragen richtig beantwortet.</p>
          <button class="quiz-submit-button" onclick="quizState.restart()" style="margin-top: 2rem;">
            Quiz neu starten
          </button>
        </div>
      `;
      return;
    }

    const question = quizQuestions[this.currentQuestion];
    const progressPercent = ((this.currentQuestion + 1) / quizQuestions.length) * 100;

    let html = `
      <div class="quiz-progress">
        <div class="quiz-progress-label">Frage ${this.currentQuestion + 1} von ${quizQuestions.length}</div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%"></div>
        </div>
      </div>

      <div class="quiz-question-box">
        <h2>${question.text}</h2>
        <div class="quiz-difficulty">Schwierigkeit: ${question.difficulty}</div>
      </div>
    `;

    // Render question options
    if (question.type === 'multiple-choice') {
      html += `<div class="quiz-options">`;
      question.options.forEach((option, index) => {
        let buttonClass = 'quiz-option-button';
        if (this.answered && index === question.correctAnswer) {
          buttonClass += ' correct';
        } else if (this.answered && index === this.selectedAnswer && index !== question.correctAnswer) {
          buttonClass += ' incorrect';
        }

        html += `
          <button 
            class="${buttonClass}"
            onclick="quizState.handleAnswer(${index})"
            ${this.answered ? 'disabled' : ''}
          >
            ${option}
          </button>
        `;
      });
      html += `</div>`;
    } else if (question.type === 'true-false') {
      html += `<div class="quiz-options">`;
      question.options.forEach((option, index) => {
        let buttonClass = 'quiz-option-button';
        if (this.answered && index === question.correctAnswer) {
          buttonClass += ' correct';
        } else if (this.answered && index === this.selectedAnswer && index !== question.correctAnswer) {
          buttonClass += ' incorrect';
        }

        html += `
          <button 
            class="${buttonClass}"
            onclick="quizState.handleAnswer(${index})"
            ${this.answered ? 'disabled' : ''}
            style="flex: 1;"
          >
            ${option}
          </button>
        `;
      });
      html += `</div>`;
    } else if (question.type === 'short-answer') {
      html += `
        <div class="quiz-short-answer">
          <input
            type="text"
            id="short-answer-input"
            placeholder="Geben Sie Ihre Antwort ein..."
            value="${this.shortAnswer}"
            onchange="quizState.updateShortAnswer(this.value)"
            ${this.answered ? 'disabled' : ''}
          />
          ${!this.answered ? `
            <button class="quiz-submit-button" onclick="quizState.handleShortAnswer()">
              Antwort einreichen
            </button>
          ` : ''}
        </div>
      `;
    }

    // Feedback
    if (this.answered) {
      if (question.type === 'short-answer') {
        html += `
          <div class="quiz-feedback">
            <div class="quiz-answer-box">
              <p><strong>Ihre Antwort:</strong> ${this.shortAnswer}</p>
              <p style="margin-top: 0.5rem;"><strong>Mögliche Antwort:</strong></p>
              <p>${question.correctAnswer}</p>
            </div>
        `;
      }

      html += `
            <button class="quiz-submit-button" onclick="quizState.nextQuestion()">
              ${this.currentQuestion === quizQuestions.length - 1 ? 'Quiz beenden' : 'Nächste Frage'}
            </button>
          </div>
      `;
    }

    container.innerHTML = html;
  },

  handleAnswer(index) {
    if (this.answered) return;

    this.selectedAnswer = index;
    const question = quizQuestions[this.currentQuestion];

    if (index === question.correctAnswer) {
      this.score++;
      this.isCorrect = true;
    }

    this.answered = true;
    this.render();
  },

  updateShortAnswer(value) {
    this.shortAnswer = value;
  },

  handleShortAnswer() {
    const isCorrect = this.shortAnswer.toLowerCase().trim().length > 0;
    this.isCorrect = isCorrect;
    this.answered = true;

    if (isCorrect) {
      this.score++;
    }

    this.render();
  },

  nextQuestion() {
    if (this.currentQuestion < quizQuestions.length - 1) {
      this.currentQuestion++;
      this.answered = false;
      this.selectedAnswer = null;
      this.shortAnswer = '';
      this.isCorrect = false;
      this.render();
    } else {
      this.currentQuestion = quizQuestions.length;
      this.answered = true;
      this.render();
    }
  },

  restart() {
    this.init();
  }
};

// Quellen (Sources) Page Renderer
function renderQuellen() {
  const colorArray = ["#5B0311", "#647981"];
  const gradientStyle = `linear-gradient(135deg, ${colorArray[0]} 0%, ${colorArray[1]} 100%)`;

  let content = renderHeader("Quellen", colorArray);
  content += `
    <div class="maincont">
      <div class="sources-container">
        <div class="sources-header">
          <h2>Verwendete Quellen</h2>
        </div>
        <div class="sources-grid">
  `;

  sources.forEach(source => {
    content += `
      <a
        href="${source.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="source-card"
      >
        <span class="source-category">${source.category}</span>
        <h3>${source.title}</h3>
        <p class="source-url">${source.url}</p>
      </a>
    `;
  });

  content += `
        </div>
      </div>
    </div>
  `;

  return content;
}
