:root {
  --bg: #0a0b10;
  --bg-soft: #121722;
  --panel: rgba(255, 255, 255, 0.06);
  --panel-strong: rgba(255, 255, 255, 0.1);
  --line: rgba(255, 255, 255, 0.12);
  --text: #ebf0ff;
  --muted: #bcc7e6;
  --accent: #7dd3fc;
  --accent-2: #a78bfa;
  --accent-3: #fda4af;
  --success: #86efac;
  --warning: #fbbf24;
  --shadow: rgba(0, 0, 0, 0.28);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: radial-gradient(circle at top, #121a2e 0%, #0a0b10 40%, #05070b 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

button,
a {
  font: inherit;
}

.page-shell {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5rem 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(18px);
  background: rgba(10, 11, 16, 0.7);
  border-bottom: 1px solid var(--line);
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.65rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #07111d;
  font-weight: 900;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.nav-links a,
.site-footer a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.site-footer a:hover {
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0 3rem;
}

.eyebrow {
  margin: 0 0 0.9rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.76rem;
  font-weight: 700;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.lead {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
  max-width: 58ch;
  margin-top: 1.1rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn,
.quote-button {
  border: 1px solid transparent;
  border-radius: 999px;
  text-decoration: none;
  padding: 0.9rem 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.btn:hover,
.quote-button:hover {
  transform: translateY(-2px);
}

.btn-primary,
.quote-button.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #08131d;
  box-shadow: 0 12px 26px rgba(125, 211, 252, 0.3);
}

.btn-secondary,
.quote-button {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-color: var(--line);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 1rem;
  max-width: 560px;
  margin-top: 2.2rem;
}

.stats div {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 1rem 1.1rem;
}

.stats strong {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.stats span {
  color: var(--muted);
  font-size: 0.8rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.portrait-frame {
  position: relative;
  width: min(420px, 90%);
  border-radius: 2rem;
  padding: 0.8rem;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.2), rgba(167, 139, 250, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  animation: float 6s ease-in-out infinite;
}

.portrait-frame::before {
  content: "";
  position: absolute;
  inset: 12px;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.portrait-frame img {
  width: 100%;
  border-radius: 1.4rem;
  object-fit: cover;
  aspect-ratio: 4 / 5;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.about-grid,
.creation-grid {
  display: grid;
  gap: 1.3rem;
}

.about-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.about-card,
.creation-card,
.quiz-card,
.quote-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 1.2rem;
  box-shadow: 0 16px 30px var(--shadow);
}

.about-card,
.creation-card {
  padding: 1.4rem;
}

.about-card h3,
.creation-card h3 {
  margin-top: 0;
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
}

.about-card p,
.creation-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.creation-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.creation-card {
  position: relative;
  overflow: hidden;
  min-height: 220px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.creation-card:hover {
  transform: translateY(-6px) scale(1.01);
  border-color: rgba(125, 211, 252, 0.45);
}

.card-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.12);
  color: var(--accent);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.quotes-section {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00));
}

.quote-wrapper {
  max-width: 820px;
}

.quote-box {
  padding: 2rem 2rem 1.5rem;
  position: relative;
}

.quote-box::before {
  content: "“";
  position: absolute;
  top: 1rem;
  left: 1.2rem;
  font-size: 4rem;
  line-height: 1;
  color: rgba(125, 211, 252, 0.35);
}

.quote-text {
  margin: 0;
  padding-left: 2rem;
  font-size: clamp(1.3rem, 2vw, 2.1rem);
  line-height: 1.5;
}

.quote-author {
  margin: 1rem 0 0;
  text-align: right;
  color: var(--muted);
  font-weight: 600;
}

.quote-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.quiz-card {
  padding: 2rem;
}

.question-number {
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 1rem;
  font-size: 0.76rem;
}

.question-block h3 {
  margin-top: 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1.3;
}

.answer-list {
  display: grid;
  gap: 0.9rem;
  margin-top: 1.6rem;
}

.answer-option {
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.answer-option:hover {
  border-color: rgba(125, 211, 252, 0.45);
  transform: translateY(-1px);
}

.answer-option.correct {
  background: rgba(134, 239, 172, 0.12);
  border-color: rgba(134, 239, 172, 0.7);
}

.answer-option.wrong {
  background: rgba(251, 191, 36, 0.09);
  border-color: rgba(251, 191, 36, 0.7);
}

.answer-option.disabled {
  pointer-events: none;
}

.quiz-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.8rem;
}

.hidden {
  display: none;
}

.site-footer {
  padding: 1.5rem 0 2.5rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.22;
  z-index: 0;
  animation: float 12s ease-in-out infinite;
}

.shape-1 {
  width: 220px;
  height: 220px;
  background: var(--accent);
  top: 140px;
  left: 8%;
}

.shape-2 {
  width: 180px;
  height: 180px;
  background: var(--accent-2);
  top: 420px;
  right: 10%;
  animation-delay: 2s;
}

.shape-3 {
  width: 240px;
  height: 240px;
  background: var(--accent-3);
  bottom: 90px;
  left: 40%;
  animation-delay: 4s;
}

.hero,
.about,
.creation-section,
.quiz-card,
.quote-wrapper,
.site-footer {
  position: relative;
  z-index: 1;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  animation: revealIn 0.8s ease forwards;
}

.reveal:nth-child(2) {
  animation-delay: 0.15s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-16px);
  }
}

@keyframes revealIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 880px) {
  .hero,
  .about-grid,
  .creation-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 3rem;
  }

  .nav-links {
    gap: 0.8rem;
    font-size: 0.92rem;
  }
}

@media (max-width: 560px) {
  .nav-bar,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .btn,
  .quote-button {
    width: 100%;
  }

  .hero-actions,
  .quote-controls,
  .quiz-footer {
    width: 100%;
  }
}
