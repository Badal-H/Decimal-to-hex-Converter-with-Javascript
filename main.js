const result = document.getElementById('result');
const submit = document.getElementById('submit');

function userInput(b){
    b.preventDefault();
    const num = document.getElementById('number').value
    if(num===''){
        alert('Please input a number');
    }else if(num<0){
        alert('Please input a positive number');
    }else{
        result.style.visibility = 'visible'
    }

    var binaryNumber =  Number(num).toString(16);
    result.innerHTML = binaryNumber;

}

submit.addEventListener('click', userInput);