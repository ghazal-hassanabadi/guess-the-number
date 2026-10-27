# Number Guess

A simple game with a big challenge. The game picks a hidden number, and you try to find it using as few guesses as possible. After every guess you get a hint telling you whether your number is too high or too low.

The interface is a dark, neon-styled design that is fully responsive and built mobile-first.

## Features

- Three difficulty levels, each with its own number range and guess limit
- A random hidden number is generated for every new game
- Instant hints after each guess: "Too high" or "Too low"
- Live counters for the current range and the guesses used
- Input validation for empty values, decimals, and numbers outside the range
- Win and lose states that lock the input and reveal the number when you lose
- Keyboard support: press Enter to submit a guess
- Responsive layout for mobile, tablet, and desktop

## Difficulty Levels

| Level  | Range  | Max guesses |
| ------ | ------ | ----------- |
| Easy   | 1 – 50  | 6           |
| Medium | 1 – 100 | 10          |
| Hard   | 1 – 500 | 12          |

## Tech Stack

- HTML5 with semantic elements
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (no frameworks or libraries)
- Inline SVG icons

## Project Structure

```
numberguess/
├── index.html
├── styles/
│   └── style.css
├── js/
│   └── index.js
└── images/
│   └── img-bg.png
└── READEME.md

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ghazal-hassanabadi/guess-the-number.git
   ```

2. Open the project folder.
3. Open `index.html` in your browser. No build step or dependencies are required.

## How to Play

1. Choose a difficulty level.
2. Type a number inside the shown range.
3. Press **Check** (or hit Enter).
4. Use the hint to narrow down your next guess.
5. Find the hidden number before you run out of guesses.

Changing the difficulty or pressing **Start Game** begins a new round.

## Responsive Design

The styles are written mobile-first and enhanced with media queries:

- **Mobile (default):** single column, centered content, navigation links hidden
- **Tablet (768px and up):** navigation links appear, larger spacing and decorative shapes
- **Desktop (1024px and up):** two-column layout with the intro on one side and the game card on the other


## AI Assistance

AI (Claude by Anthropic) was used as a helper in this project:

- **Background:** the decorative background shapes, such as the planets and the glowing orb, were created with AI assistance.
- **JavaScript:** AI helped me analyze and understand the game logic.
- **Debugging:** AI helped me find and fix bugs.

The visual design is based on a dark neon mockup.

## Author

Made by [ghazal-hassanabadi](https://github.com/ghazal-hassanabadi).