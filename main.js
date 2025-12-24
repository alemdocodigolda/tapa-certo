const animals = [
    { name: 'Leão', emoji: '🦁', color: '#FFB347' }, { name: 'Girafa', emoji: '🦒', color: '#FDFD96' }, { name: 'Tigre', emoji: '🐯', color: '#FF8647' },
    { name: 'Elefante', emoji: '🐘', color: '#B2B2B2' }, { name: 'Zebra', emoji: '🦓', color: '#E0E0E0' }, { name: 'Macaco', emoji: '🐒', color: '#A67B5B' },
    { name: 'Onça', emoji: '🐆', color: '#FFB90F' },
    { name: 'Jacaré', emoji: '🐊', color: '#77DD77' }, { name: 'Hipopótamo', emoji: '🦛', color: '#AEC6CF' }, { name: 'Rinoceronte', emoji: '🦏', color: '#CFCFC4' },
    { name: 'Canguru', emoji: '🦘', color: '#DEA5A4' }, { name: 'Urso', emoji: '🐻', color: '#836953' }, { name: 'Lobo', emoji: '🐺', color: '#BDBDBD' },
    { name: 'Raposa', emoji: '🦊', color: '#FF914D' }, { name: 'Coelho', emoji: '🐰', color: '#F2F2F2' }, { name: 'Esquilo', emoji: '🐿️', color: '#D2B48C' },
    { name: 'Castor', emoji: '🦫', color: '#7B3F00' }, { name: 'Veado', emoji: '🦌', color: '#C19A6B' }, { name: 'Alce', emoji: '🫎', color: '#5C4033' },
    { name: 'Porco-espunho', emoji: '🦔', color: '#E5D3B3' }, { name: 'Gambá', emoji: '🦨', color: '#4F4F4F' }, { name: 'Panda', emoji: '🐼', color: '#FFFFFF' },
    { name: 'Coala', emoji: '🐨', color: '#D3D3D3' }, { name: 'Preguiça', emoji: '🦥', color: '#966919' }, { name: 'Tatu', emoji: '🛡️', color: '#9B8E7D' },
    { name: 'Camaleão', emoji: '🦎', color: '#32CD32' }, { name: 'Iguana', emoji: '🦎', color: '#90EE90' }, { name: 'Cobra', emoji: '🐍', color: '#228B22' },
    { name: 'Tartaruga', emoji: '🐢', color: '#6B8E23' }, { name: 'Sapo', emoji: '🐸', color: '#98FB98' }, { name: 'Salamandra', emoji: '🦎', color: '#FFD700' },
    { name: 'Águia', emoji: '🦅', color: '#B87333' }, { name: 'Falcão', emoji: '🦅', color: '#A0522D' }, { name: 'Coruja', emoji: '🦉', color: '#DEB887' },
    { name: 'Papagaio', emoji: '🦜', color: '#FF0000' }, { name: 'Tucano', emoji: '🐦', color: '#FFD700' }, { name: 'Flamingo', emoji: '🦩', color: '#FFB6C1' },
    { name: 'Pinguim', emoji: '🐧', color: '#000000' }, { name: 'Pato', emoji: '🦆', color: '#FFDB58' }, { name: 'Cisne', emoji: '🦢', color: '#FFFFFF' },
    { name: 'Pavão', emoji: '🦚', color: '#000080' }, { name: 'Baleia', emoji: '🐋', color: '#708090' }, { name: 'Golfinho', emoji: '🐬', color: '#00BFFF' },
    { name: 'Tubarão', emoji: '🦈', color: '#B0C4DE' }, { name: 'Polvo', emoji: '🐙', color: '#FF69B4' }, { name: 'Estrela-do-mar', emoji: '⭐', color: '#FF6347' },
    { name: 'Cavalo-marinho', emoji: '🦄', color: '#D8BFD8' },
    { name: 'Caranguejo', emoji: '🦀', color: '#FF4500' }, { name: 'Lagosta', emoji: '🦞', color: '#DC143C' }, { name: 'Água-viva', emoji: '🪼', color: '#E6E6FA' },
    { name: 'Tartaruga-marinha', emoji: '🐢', color: '#556B2F' }, { name: 'Gato', emoji: '🐱', color: '#F5DEB3' }, { name: 'Cachorro', emoji: '🐶', color: '#8B4513' },
    { name: 'Cavalo', emoji: '🐴', color: '#C0C0C0' }, { name: 'Vaca', emoji: '🐮', color: '#FFFFFF' },
    { name: 'Ovelha', emoji: '🐑', color: '#F0F0F0' }, { name: 'Porco', emoji: '🐷', color: '#FFC0CB' }, { name: 'Galinha', emoji: '🐔', color: '#FFFFFF' },
    { name: 'Pinto', emoji: '🐥', color: '#FFFF00' }, { name: 'Rato', emoji: '🐁', color: '#D3D3D3' }, { name: 'Peixe', emoji: '🐟', color: '#87CEEB' },
    { name: 'Abelha', emoji: '🐝', color: '#FFD700' }, { name: 'Borboleta', emoji: '🦋', color: '#87CEFA' }, { name: 'Aranha', emoji: '🕷️', color: '#333333' },
    { name: 'Joaninha', emoji: '🐞', color: '#FF0000' }, { name: 'Formiga', emoji: '🐜', color: '#555555' }, { name: 'Caracol', emoji: '🐌', color: '#DEB887' }
];

// State management
let deck = [];
let activeAnimals = []; // Store selected animals for refill
let history = [];
let currentTimer = 30; // Time between cards (closed)
let visibilityTimer = 10; // Time card stays open
let timeLeft = 30;
let isPaused = false;
let isCardVisible = false; // Phase tracker
let gameInterval = null;

// DOM Elements
const setupView = document.getElementById('setup-view');
const gameView = document.getElementById('game-view');
const timerInput = document.getElementById('timer-input');
const timerValueDisplay = document.getElementById('timer-value');
const visibilityInput = document.getElementById('visibility-input');
const visibilityValueDisplay = document.getElementById('visibility-value');
const startBtn = document.getElementById('start-btn');
const countdownDisplay = document.getElementById('countdown');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');
const resetBtn = document.getElementById('reset-btn');
const animalCard = document.getElementById('animal-card');
const animalImageDisplay = document.getElementById('animal-image');
const animalNameDisplay = document.getElementById('animal-name');
const historyList = document.getElementById('history-list');

// Selection Elements
const animalSelectionGrid = document.getElementById('animal-selection-grid');
const selectAllBtn = document.getElementById('select-all-btn');
const deselectAllBtn = document.getElementById('deselect-all-btn');
// Sound effects
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type, duration) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
}

// Utils
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Game Logic
function initGame() {
    const selectedAnimals = getSelectedAnimals();

    if (selectedAnimals.length < 2) {
        alert("Selecione pelo menos 2 animais para jogar!");
        return;
    }

    currentTimer = parseInt(timerInput.value);
    visibilityTimer = parseInt(visibilityInput.value);
    activeAnimals = [...selectedAnimals]; // Store for refill
    deck = shuffle([...activeAnimals]);
    history = [];
    updateHistoryUI();

    setupView.classList.remove('active');
    gameView.classList.add('active');

    startNextPhase(false); // Start with cards closed
}

function startNextPhase(showCard) {
    isCardVisible = showCard;

    // Trigger "Drop" animation
    animalCard.classList.remove('dropping');
    void animalCard.offsetWidth; // Force reflow
    animalCard.classList.add('dropping');

    if (isCardVisible) {
        // Phase 1: Card is visible
        if (deck.length === 0) {
            alert("O baralho acabou! Reiniciando...");
            deck = shuffle([...activeAnimals]); // Refill from active selection
        }

        const next = deck.pop();
        if (history.length > 5) history.shift();
        history.push(next);
        updateHistoryUI();

        // Update content
        playTone(500, 'sine', 0.2);
        animalImageDisplay.textContent = next.emoji;
        animalNameDisplay.textContent = next.name;

        // Apply animal color with 20% opacity
        const content = animalCard.querySelector('.card-content');
        content.style.backgroundColor = `${next.color}33`;

        animalCard.classList.add('showing-animal');

        timeLeft = visibilityTimer;
        resetTimer();
    } else {
        // Phase 2: Card is hidden (waiting)
        animalCard.classList.remove('showing-animal');
        timeLeft = currentTimer;
        resetTimer();
    }
}

function nextCard() {
    // Manually skip to next card reveal
    startNextPhase(true);
}

function resetTimer() {
    clearInterval(gameInterval);
    updateTimerUI();

    if (!isPaused) {
        startCountdown();
    }
}

function startCountdown() {
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            updateTimerUI();

            if (timeLeft <= 0) {
                clearInterval(gameInterval);
                // Toggle phase
                startNextPhase(!isCardVisible);
            }
        }
    }, 1000);
}

function updateTimerUI() {
    countdownDisplay.textContent = timeLeft;

    // Pulse effect when timer is low
    if (timeLeft <= 3 && timeLeft > 0) {
        playTone(300, 'square', 0.1);
        countdownDisplay.style.color = '#FFE66D'; // Accent color for warning
        countdownDisplay.style.transform = 'scale(1.2)';
    } else {
        countdownDisplay.style.color = 'white';
        countdownDisplay.style.transform = 'scale(1)';
    }
}

function togglePause() {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Retomar' : 'Pausar';
    gameView.classList.toggle('paused', isPaused);
    pauseBtn.classList.toggle('btn-secondary');
    pauseBtn.classList.toggle('btn-primary');

    if (!isPaused) {
        startCountdown();
    }
}

// Animal Selection Logic
function renderAnimalSelection() {
    animalSelectionGrid.innerHTML = '';

    // Check saved state or default to all
    const savedSelection = JSON.parse(localStorage.getItem('tapaCertoSelection') || '[]');
    const useSaved = savedSelection.length > 0;

    animals.forEach((animal, index) => {
        const label = document.createElement('label');
        label.className = 'animal-option';

        const isChecked = useSaved ? savedSelection.includes(animal.name) : true;

        label.innerHTML = `
            <input type="checkbox" name="animal-select" value="${animal.name}" ${isChecked ? 'checked' : ''}>
            <div class="option-card">
                <span class="option-emoji">${animal.emoji}</span>
                <span class="option-name">${animal.name}</span>
            </div>
        `;
        animalSelectionGrid.appendChild(label);
    });
}

function getSelectedAnimals() {
    const checkboxes = document.querySelectorAll('input[name="animal-select"]:checked');
    const selectedNames = Array.from(checkboxes).map(cb => cb.value);

    // Save to local storage
    localStorage.setItem('tapaCertoSelection', JSON.stringify(selectedNames));

    return animals.filter(a => selectedNames.includes(a.name));
}

function updateHistoryUI() {
    historyList.innerHTML = '';
    history.slice().reverse().forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';

        const emoji = document.createElement('span');
        emoji.textContent = item.emoji;
        emoji.style.fontSize = '1.8rem';

        const name = document.createElement('span');
        name.textContent = item.name;
        name.style.fontSize = '0.7rem';
        name.style.fontWeight = '700';
        name.style.textTransform = 'uppercase';

        div.appendChild(emoji);
        div.appendChild(name);
        div.title = item.name;
        historyList.appendChild(div);
    });
}

// Event Listeners
window.addEventListener('load', () => {
    renderAnimalSelection();

    const savedTimer = localStorage.getItem('tapaCertoTimer');
    if (savedTimer) {
        timerInput.value = savedTimer;
        timerValueDisplay.textContent = `${savedTimer}s`;
    }
    const savedVisibility = localStorage.getItem('tapaCertoVisibility');
    if (savedVisibility) {
        visibilityInput.value = savedVisibility;
        visibilityValueDisplay.textContent = `${savedVisibility}s`;
    }
});

timerInput.addEventListener('input', () => {
    timerValueDisplay.textContent = `${timerInput.value}s`;
});

visibilityInput.addEventListener('input', () => {
    visibilityValueDisplay.textContent = `${visibilityInput.value}s`;
});

startBtn.addEventListener('click', () => {
    localStorage.setItem('tapaCertoTimer', timerInput.value);
    localStorage.setItem('tapaCertoVisibility', visibilityInput.value);
    initGame();
});

pauseBtn.addEventListener('click', togglePause);

nextBtn.addEventListener('click', () => {
    nextCard();
});

animalCard.addEventListener('click', () => {
    if (!isPaused) nextCard();
});

resetBtn.addEventListener('click', () => {
    if (confirm("Deseja reiniciar o baralho?")) {
        gameView.classList.remove('active');
        setupView.classList.add('active');
        clearInterval(gameInterval);
    }
});

// Sound effects (optional/simple approach)
function playCardFlip() {
    // Web Audio API or small mp3 could go here
    // Keeping it "low resources" so no external assets for now
}

selectAllBtn.addEventListener('click', () => {
    document.querySelectorAll('input[name="animal-select"]').forEach(cb => cb.checked = true);
});

deselectAllBtn.addEventListener('click', () => {
    document.querySelectorAll('input[name="animal-select"]').forEach(cb => cb.checked = false);
});
