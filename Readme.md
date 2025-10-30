# Memory Game

A simple web-based Memory / Concentration game. Flip cards to find matching pairs. Built with plain HTML, CSS and JavaScript so it runs in any modern browser.

## Features
- Click or tap cards to flip
- Match tracking and move counter
- Simple animation and responsive layout
- Easy to customize card faces and difficulty

## How to run
1. Clone or copy the project folder to your machine.
2. Open `index.html` in a browser OR serve the folder with a static server:
    - Python 3: `python -m http.server 8000`
    - Node (http-server): `npx http-server . -p 8000`
3. Visit `http://localhost:8000` (if using a server) and play.

## Gameplay
- Flip two cards per turn.
- If they match they stay revealed; otherwise they flip back.
- Goal: reveal all pairs with the fewest moves.

## Project structure (example)
- index.html — main markup
- css/
  - styles.css — layout and visuals
- js/
  - app.js — game logic
- assets/
  - images/ — card faces and icons
- README.md — this file

## Customization
- Change card faces in `assets/images/` and update the asset list in `js/app.js`.
- Adjust board size / difficulty by changing the number of card pairs in game config.

## Contributing
- Fork, create a feature branch, add tests/changes, and submit a pull request.
- Keep changes small and focused.

## License
MIT — see LICENSE file for details.

Enjoy the game!