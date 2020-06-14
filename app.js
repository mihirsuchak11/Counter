// set initial
let count = 0;

// select value and button
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        // logic to increase, decrease and reset the counter
        styles.contains('decrease') ?
            count-- : styles.contains('increase') ?
                count++ : count = 0

        // printing the value of count
        value.textContent = count;

        // logic to change the color
        count > 0 ?
            value.style.color = "green" :
            count < 0 ?
                value.style.color = "red" :
                count === 0 ?
                    value.style.color = "#222" : ''
    })
})