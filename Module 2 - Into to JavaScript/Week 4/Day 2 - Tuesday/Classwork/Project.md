# Classwork - Finale for Modules 1 and 2

You will be working on several projects today and over the next week depending on what all you accomplish today. First off would be to finish any work you haven't completed so far. From there, you have three options that you can choose from. You are expected to complete one, but given time, try your hand at others as well.

Once you complete the project, send the Github link to the repository on Slack, so I can start writing code reviews.

This is due Monday, June 10.

## First Option - Building a Calculator

- Have a div that functions as the input for the calculator.
- Set up number buttons for 0-9
- Set up action buttons for +, -, \*, /, power, C, CE, and =
- When a user clicks a number, add that to the screen (like a calculator!).
- When a user clicks an action button, check for the following:
  - If there's nothing in memory and they didn't press =, store the current value in memory and then clear the screen to allow them to input the next number.
  - If something is in memory, perform the previous action and display that value on the screen. When they press a new button, clear the screen to allow them to start typing a new number.
  - If '=' is pressed, show the value of the last action pressed.
  - If 'CE' is pressed, clear out the div but keep the chain of actions in memory.
  - If 'C' is pressed, clear out memory and start from scratch.
- BONUS - Allow a user to push either the numpad or the actual numbers on the keyboard to use the calculator if they don't want to click buttons. [This Site](https://keycode.info/) will help with this.

## Second Option - A Blackjack Game

This can be done solo or with a partner as you prefer. For those of you unfamiliar with blackjack, it is a card game played with 2+ people. The goal of the game is to get as close to 21 points as possible without going over. In a normal deck of cards there are 3 face cards (King, Queen, and Jack) of each suit, and 1 Ace of each suit. The way scoring works is as follows:

- Numbered Cards (2,3,4 etc) are worth their face value
- Face Cards are worth 10
- Aces are worth either 1 point or 11 points. The player can choose whichever works better for them at that time.
  Each player (in this case, the computer and the player) gets two cards to start off with. Then in order they each decide if they want any more cards until they're both happy with their cards or one person goes over 21 (and thereby losing). If both players are happy with their cards and under 21 they show their cards and the closest to 21 wins. For these purposes, count a tie as a tie as opposed to letting you or the computer win on a tie. You will be playing against a computer opponent whose cards are hidden to you. Taking the above information do the following:
- Create a page that lets a user enter their name before they begin the game. Also ask them for their date of birth. If they don't enter a name/birthday, let them know there was an invalid entry (as appropriate for the error). If their age is under 16, redirect them away from the page to google.com or some other site.
- Once they enter the above information, show them the game table. This will include:
  - A deck of cards that will become smaller as you run out of cards
  - An area for your cards face up in front of you
  - An area for the computer's cards opposite the player's
- Using javascript, create a deck of cards, shuffle them and then begin dealing from the top starting with the computer.
- If the computer or user are dealt 21 with their first two cards (and Ace and a Face Card), end the game with the appropriate player winning.
- Allow for the player to select one of the following options:
  - No new cards - The player doesn't want any more cards
  - New Card - The player is then dealt the top card. if this brings them over 21 they lose immediately
- Regardless of the players choice, if the computer has fewer than 17 points in their hand they will take a new card.
- This continues until one of them goes over 21 or they are both happy with their cards. If they are both happy, show the computers cards and determine the outcome.
- There should be a counter at the top to show `wins`, `losses`, and `ties`.
- There should be a way to select the number of decks used. When all cards have been played, shuffle all cards not in the hands of a player.

ALL of the above should be done with mobile design in mind and with transitions and if possible animations. If you're in a group and one of you is design oriented, help the others figure out a design scheme as opposed to just taking over for yourself.

## Third Option - Your Call

Do you have an idea for a project or application you want to make? Something you want to play around with or practice with? Ask me and I'll clear you to work on it.