const number = document.querySelector('.number');
const advice = document.querySelector('.advice');
const btn = document.querySelector('.btn');

const advices = async () => {
    try {
        const url = await fetch('https://api.adviceslip.com/advice');
        const data = await url.json();
        number.textContent = '#' + data.slip.id;
        advice.textContent = data.slip.advice;
        advice.classList.add('active');
    } catch (error) {
        console.log('An error occurred:', error);
    }
};

btn.addEventListener('click', () => {
    advice.classList.remove('active');
    advices();
});

advices();