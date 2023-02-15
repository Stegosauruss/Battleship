# Battleship

Create a react app in which a player can play a game of battleships.
In battleships players set up a 10x10 board with ships in different coordinates and then attempt to hit each others
ships by taking turns to shoot at coordinates. Once all opposing ships are 'sunk' that player wins.
	
Type of ship	Length
Aircraft Carrier	5
Battleship	4
Submarine	3
Cruiser	3
Destroyer	2

## User stories

As a ***
So that ***
I would like ***

User Interface
As a player
So that I can see the state of the game
I would like to see my board of ships

As a player
So that I can see the state of the game
I would like to see which of my ships have been sunk

As a player
So that I can see the state of the game
I would like to see my opponents board with hits and misses

As a player
So that I can see the state of the game
I would like to see which of my opponents ships have been sunk

As a player
So that I can complete a game
I would like there to be a display of winning and losing

As a player
I would like somewhere to input my commands to shoot
So I can take a turn

As a player
So I can play another game
I would like a reset button

As a player
So I can tell the difference between my board and my opponents
I would like to see the names of players involved

Game
As a player
I would like to know if I have won or lost
So I can complete a game

As a player
I would like to have an AI opponent
So that I can play games on my own

As a player
I would like to play against another human opponent
So that my games are not boring

Set up

As a player
So that the game is more interesting
I would like a range of different sizes of ships

As a player
I would like to be able to place ships
So that I can set up my board

As a player
I would like to be able to place ships in two directions
So that I can set up my board

As a player
I would like my opponents board to be randomised
So that my games are not boring

## Priorities

I will skip the set up to start with and just use a placeholder board for the player and opponent.
This way I can get something displayed on the screen quicker and focus on the set up later.

I will leave playing against a human opponent until later as well as that could be quite complicated
especially if we are setting this up to play over the internet.

The first thing I will do is set up the logic for firing/hits/winning as I should be able to test that nicely.

Then I will build out the UI for the application

I will then consider set up

Finally if I have time I will add human opponents.

## Structure

State:

GameState: 'player turn'/'opponent turn'/'completed'/'set-up'
Players: {
  Player1: {
    Board: [
      A, A, A, A, Hit, null, Miss, ...
      ...
      ...
      ...
      ...
      ...
      ...
      ...
      ...
      ...
    ],
    CurrentShips: {
      A: true,
      B: true,
      S: true,
      C: true,
      D: true
    }
  }

  Player2: {
    Board: [
      A, A, A, A, A, null, Miss, ...
      ...
      ...
      ...
      ...
      ...
      ...
      ...
      ...
      ...
    ],
    CurrentShips: {
      A: true,
      B: true,
      S: true,
      C: true,
      D: true
    }
  }
}

PossibleAIMoves: [[0,0], [0, 1], ...]

Taking a turn
Player inputs coordinates (should we let players input same coordinates again)
Change the coordinate into Hit/Miss (could happen during the loop)
then loop through to check if any boats sunk (only have to do this if Hit)
Then display Hit/Miss/Sunk/Win (if all boats sunk)

Wait for period of time

Computer picks random coordinates (shouldn't be able to pick one they already picked randomly choose from possible AI moves then remove afterwards)
Change the coordinate into Hit/Miss (could happen during the loop)
then loop through to check if any boats sunk (only have to do this if Hit)
Then display Hit/Miss/Sunk/Loss (if all boats sunk)

## Edge cases

Firing at the same point twice (should we allow)
Placing a ship so it overlaps another
Placing a ship so it extends outside the board


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
