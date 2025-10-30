const colors = [
      '#E74C3C', '#E74C3C',
      '#F1C40F', '#F1C40F',
      '#3498DB', '#3498DB',
      '#9B59B6', '#9B59B6',
      '#1ABC9C', '#1ABC9C',
      '#E67E22', '#E67E22'
    ];

    const board = document.getElementById('gameBoard');
    const resetBtn = document.getElementById('resetBtn');
    const winMessage = document.getElementById('winMessage');
    const playAgainBtn = document.getElementById('playAgainBtn');

    let flippedCards = [];
    let lockBoard = false;
    let matchedCount = 0;

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function createBoard() {
      board.innerHTML = '';
      matchedCount = 0;
      flippedCards = [];
      lockBoard = false;
      winMessage.classList.remove('active');

      const shuffledColors = shuffle([...colors]);
      shuffledColors.forEach(color => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.setProperty('--color', color);
        card.innerHTML = '<div class="hidden-color"></div>';
        card.addEventListener('click', () => flipCard(card));
        board.appendChild(card);
      });
    }

    function flipCard(card) {
      if (lockBoard || card.classList.contains('flipped') || card.classList.contains('revealed')) return;

      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        checkForMatch();
      }
    }

    function checkForMatch() {
      lockBoard = true;
      const [card1, card2] = flippedCards;
      const color1 = card1.style.getPropertyValue('--color');
      const color2 = card2.style.getPropertyValue('--color');

      if (color1 === color2) {
        card1.classList.add('revealed');
        card2.classList.add('revealed');
        flippedCards = [];
        lockBoard = false;
        matchedCount += 2;

        //  win message 
        if (matchedCount === colors.length) {
          setTimeout(() => {
            winMessage.classList.add('active');
          }, 400);
        }
      } else {
        setTimeout(() => {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
          flippedCards = [];
          lockBoard = false;
        }, 800);
      }
    }

    resetBtn.addEventListener('click', createBoard);
    playAgainBtn.addEventListener('click', createBoard);

    createBoard();