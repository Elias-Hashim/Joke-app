const jokes = ['What musical instrument is found in the bathroom ?', 
'Why can’t Elsa from Frozen have a balloon ?', 
'What do you call a dinosaur that is sleeping ?', 
'Why did the student eat his homework ?', 
'What do you say to a rabbit on its birthday ?', 
'How did the pirate get his flag so cheaply ?', 
'What is a cat’s favorite color ?', 
'What is a monster’s favorite dessert ?', 
'What do birds say on Halloween ?',
'What do elves learn in school ?', 
'Why did the melon jump into the lake?', 
'Why did the banana go to the hospital?',
'What did the tree say to the wind?',
'What’s a snake’s favorite subject?',
'How does a cow do math?', 
'What do you call a pig that knows karate?', 
'Where do polar bears keep their money?', 
'What do you call cheese that is not yours?', 
'Why don’t dinosaurs eat clowns?', 
'Why did the girl throw a stick of butter?'];

const jokesAnswers = ['A tuba toothpaste.',
'Because she will “let it go, let it go.',
'A dino-snore.',
'Because the teacher told him it was a piece of cake.',
'Hoppy Birthday.',
'He bought it on sail.',
'Purrr-ple.',
'I scream.',
'Trick or tweet.',
'The elf-abet.',
'It wanted to be a water-melon.',
'He was peeling really bad.',
'Leaf me alone!',
'Hisstory.',
'With a cow-culator!', 
'a pork chop!', 
'a snow bank.', 
'Nacho cheese!', 
'Because they taste funny.', 
'She wanted to see a butter fly.'];
document.getElementById("Btn").addEventListener("click", generateJoke);

function generateJoke() {
    document.getElementById('p2').innerHTML = 'Tap to Reveal Answer... '
    randomNumber = Math.floor(Math.random() * 20);
    document.getElementById('p').innerHTML = jokes[randomNumber];
    document.getElementById('p2').addEventListener('click', () => {
        document.getElementById('p2').innerHTML = jokesAnswers[randomNumber];
        document.getElementById('p2').classList(answer);
    });
};


