# Tapa Certo

Um jogo interativo de cartas construído com **Vite**, **HTML**, **JavaScript** e **CSS**. O projeto demonstra um jogo simples de combinação de cartas e está configurado para ser implantado gratuitamente no **GitHub Pages**.

---

## ✨ Funcionalidades
- Interface responsiva com design moderno (com suporte a dark mode)
- Lógica de jogo simples escrita em JavaScript vanilla
- Desenvolvimento local fácil com o servidor de desenvolvimento do Vite
- Implantação com um clique no GitHub Pages via `npm run deploy` ou automaticamente através do GitHub Actions

---

## 🚀 Começando

### Pré-requisitos
- **Node.js** (v20 ou superior recomendado)
- **Git**

### Instalação
```bash
# Clone o repositório
git clone https://github.com/alemdocodigolda/tapa-certo.git
cd tapa-certo

# Instale as dependências
npm install
```

### Desenvolvimento
```bash
npm run dev   # Inicia o servidor de desenvolvimento Vite
```
Abra a URL exibida no seu navegador e comece a jogar!

### Build para Produção
```bash
npm run build   # Gera o site estático na pasta ./dist
```

---

## 📦 Deploy no GitHub Pages
Existem duas formas de publicar o site:

1. **Deploy manual único**
   ```bash
   npm run deploy   # Faz build e envia ./dist para a branch gh-pages
   ```
   Após o comando terminar, o site estará disponível em:
   `https://alemdocodigolda.github.io/tapa-certo/`

2. **CI/CD Automático**
   O repositório contém um workflow do GitHub Actions (`.github/workflows/gh-pages.yml`). Cada push para a branch `main` aciona o workflow, que faz o build do projeto e publica a pasta `dist` na branch `gh-pages` automaticamente.

---

## 📂 Estrutura do Projeto
```
├─ index.html          # Ponto de entrada
├─ main.js             # Lógica do jogo
├─ style.css           # Estilos (incluindo o sistema de design customizado)
├─ vite.config.js      # Configuração do Vite com base path para GitHub Pages
├─ package.json        # Scripts e dependências (vite, gh-pages)
└─ .github/workflows/gh-pages.yml   # Workflow de CI/CD
```

---

## 🛠️ Personalização
- **Design** – Edite `style.css` para ajustar cores, fontes ou animações
- **Lógica do jogo** – Modifique `main.js` para alterar regras, tempo ou adicionar novos recursos
- **URL base** – Se renomear o repositório, atualize o campo `homepage` em `package.json` e a opção `base` em `vite.config.js`

---

## 📄 Licença
Este projeto está licenciado sob a **Licença MIT** – sinta-se livre para fazer fork, modificar e compartilhar!

---

## 🙋‍♂️ Autor
**Hugo Castro** – [Perfil GitHub](https://github.com/alemdocodigolda)

---

*Divirta-se jogando e bom desenvolvimento!*
