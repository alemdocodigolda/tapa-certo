# Tapa Certo

A small web‑game built with **Vite**, plain **HTML**, **JavaScript**, and **CSS**. The project demonstrates a simple interactive card‑matching game ("Tapa Certo") and is configured to be deployed for free on **GitHub Pages**.

---

## ✨ Features
- Responsive UI with a modern design (dark‑mode ready).
- Simple game logic written in vanilla JavaScript.
- Easy local development with Vite's dev server.
- One‑click deployment to GitHub Pages via `npm run deploy` or automatically through GitHub Actions.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v20 or later recommended)
- **Git**

### Installation
```bash
# Clone the repository
git clone https://github.com/alemdocodigolda/tapa-certo.git
cd tapa-certo

# Install dependencies
npm ci
```

### Development
```bash
npm run dev   # Starts Vite dev server (http://localhost:5173)
```
Open the displayed URL in your browser and start playing!

### Build for Production
```bash
npm run build   # Generates the static site in the ./dist folder
```

---

## 📦 Deploy to GitHub Pages
There are two ways to publish the site:

1. **Manual one‑time deploy**
   ```bash
   npm run deploy   # Builds and pushes ./dist to the gh-pages branch
   ```
   After the command finishes, the site will be available at:
   `https://alemdocodigolda.github.io/tapa-certo/`

2. **Automatic CI/CD**
   The repository contains a GitHub Actions workflow (`.github/workflows/gh-pages.yml`). Every push to the `main` branch triggers the workflow, which builds the project and publishes the `dist` folder to the `gh-pages` branch automatically.

---

## 📂 Project Structure
```
├─ index.html          # Entry point
├─ main.js             # Game logic
├─ style.css           # Styles (including the custom design system)
├─ vite.config.js      # Vite configuration with base path for GitHub Pages
├─ package.json        # Scripts & dependencies (vite, gh-pages)
└─ .github/workflows/gh-pages.yml   # CI/CD workflow
```

---

## 🛠️ Customisation
- **Design** – Edit `style.css` to adjust colours, fonts, or animations.
- **Game logic** – Modify `main.js` to change rules, timing, or add new features.
- **Base URL** – If you rename the repository, update the `homepage` field in `package.json` and the `base` option in `vite.config.js`.

---

## 📄 License
This project is licensed under the **MIT License** – feel free to fork, modify, and share!

---

## 🙋‍♂️ Author
**Hugo Castro** – [GitHub profile](https://github.com/alemdocodigolda)

---

*Enjoy the game and happy hacking!*
