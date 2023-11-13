//1
/*const userNumber = Number(prompt('Ваше число: '));
if (userNumber > 0) {
   console.log(`Число ${userNumber} положительное.`)
} else if (userNumber < 0) {
    console.log(`Число ${userNumber} отрицательное.`)
} else if (userNumber === 0) {
    console.log('Ваше число равно нулю.')
} else {
    console.log('Ошибка.')
}*/
//2 
/*const number = Number(prompt('Введите число: '));
number % 5 === 0 ? console.log('Число кратно 5.') : console.log ('Число не кратно 5.')*/
//3
/*const firstNumber = prompt('Введите число: ');
const secondNumber = prompt('Введите число: ');
const zn = prompt('Введите знак: ');
switch (zn) {
    case '-':
        console.log(firstNumber - secondNumber)
        break
    case '+':
        console.log(firstNumber + secondNumber)
        break
    case '*':
        console.log(firstNumber * secondNumber)
        break
    case '/':
        console.log(firstNumber / secondNumber)
        break
}*/
//4
const number = Number(prompt('Введите возраст:'))

if (number > 0 && number < 12) {
    console.log('Вы ребенок.')
} else if (number > 12 && number < 18) {
    console.log('Вы подросток.')
} else if (number > 18 && number < 60) {
    console.log('Вы взрослый.')
} else if (number > 60) {
    console.log('Вы пенсионер.')
}
