# Professor Dog Quiz

Picture questions with 3 dog breeds as answer. Easy and hard-mode side-by-side:<br/>
<img src="./images/3.png" alt="drawing" width="193"/> <img src="./images/4.png" alt="drawing" width="200"/>
<br/>

Breed questions with 3 dog images as answer. Easy and hard-mode side-by-side:<br/>
<img src="./images/1.png" alt="drawing" width="200"/>
<img src="./images/2.png" alt="drawing" width="200"/>

## Features

- The webapp must show the user a random picture of a dog (the Dog API provides an endpoint for this purpose), and it must ask the user to choose the correct breed name from a list of 3 options.
- When a user makes the correct choice, they proceed to the next question.
- Occasionally the user will get a different question type. The game must show them the name of a breed and 3 images of dogs. The user must select the correct image that matches the breed name.
- If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.
- The game must keep track of the user's performance and display a success rate (in percentages) on the page.
- The user should also be able to use the keyboard to select their answer for quicker gameplay.
- If a user sees a breed for the first time, the game should give them an easy hint so they can learn the right answer.
- The game starts off with only 3 breeds and should gradually increase in difficulty. When the user has a streak of 10 correct answers, the game will add another 3 breeds into the mix, and so on.
