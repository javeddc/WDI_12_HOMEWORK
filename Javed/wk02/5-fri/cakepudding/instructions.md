# cakepudding

If you haven't heard of the game hangman before, take a look at the wiki link.

https://en.wikipedia.org/wiki/Hangman_(game)

We will refer to this game as cakepudding because, well because I want to.

Here's a wireframe

![alt text](https://gist.githubusercontent.com/epoch/7340af256ffc9f734cda4326cc6805d8/raw/1877695d4d91a899994b5ae0108a78d6f65923f4/cakepudding.png "wireframe")

- game starts with a randomly selected word shown as underscores. eg. for example the word cake will be shown as four underscores
- user can press any letter keys to make a guess
- wrong guesses goes to the top left
- correct letter guesses replace underscores
- amount of turns left shown on top right
- you can be creative

one suggested way to start is to put everything inside a single global game object
```
var game = {
}
```
