let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
    if(count >= 1){
        CURRENT_NUMBER.style.color = 'green';
    }
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
    if(count <= 0){
        CURRENT_NUMBER.style.color = 'red';
    }
    CURRENT_NUMBER.innerHTML = count;
}