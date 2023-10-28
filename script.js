const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Yes', 'No', 'Maybe', 'It is hard to tell', 'You dont want to know'];

const shakeBall = () => {

    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000);

}

const checkInput = () => {

    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Question must end with "?"';
        answer.textContent = '';
    } else {
        error.textContent = 'You have to as a question!';
        answer.textContent = '';
    }

    ball.classList.remove('shake-animation');

}

const generateAnswer = () => {

    const number = Math.floor(Math.random() * 5);

    answer.innerHTML = '<span>Answer:</span> ' + answersArr[number];

}

ball.addEventListener('click', shakeBall);