const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Yes', 'No', 'Maybe', 'It is hard to tell', 'You dont want to know'];

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);

    answer.innerHTML = '<span>Odpowiedź:</span> ' + answersArr[number];
}

ball.addEventListener('click', generateAnswer);