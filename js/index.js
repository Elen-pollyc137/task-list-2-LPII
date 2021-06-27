
var form = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var form4 = document.getElementById('form4');

form.addEventListener('click', (e) => {
    var cars = ["Saab", "Volvo", "BMW"];
    var resultado = document.getElementById('res');
    var car1 = document.getElementById('car').value;
    var result = cars.filter((car) => {
        return car === car1
    })
    console.log(result)
    if (result.length >= 1) {
        resultado.innerHTML = 'Encontrado o :' + result
    }
    else {
        resultado.innerHTML = 'Nao foi encontrado'
    }
})

form2.addEventListener('click', () => {
    var cars = ["Volvo", "Jeep", "Mercedes"];
    cars.splice(0, 1, "Ford");
    console.log(cars)
    var result = document.getElementById('res2');
    result.innerHTML = 'Encontrado o :' + cars
})

form3.addEventListener('click', () => {
    var cars = ["Volvo", "Jeep", "Mercedes"];
    var result = document.getElementById('res3');
    result.innerHTML = 'Encontrado ' + cars.length + ' elementos';
})
form4.addEventListener('click', () => {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    var value3 = document.getElementById('value3').value;
    var elements = [value1, value2, value3];
    var result = document.getElementById('res4');
    result.innerHTML = 'Encontrado ' + elements.reverse();
})
form5.addEventListener('click', () => {
    var Primary = [1, 2, 3, 4];
    var Secundary = [1, 2, 3, 4];
    var soma = Primary.map(
        (item, index) => item + Secundary[index]
    );
    var result = document.getElementById('res5');
    result.innerHTML = 'Encontrado ' + soma;
})