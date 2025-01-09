const inputName = document.getElementById('name');
const outputName = document.getElementById('name-output');



inputName.addEventListener('input',()=>{
    console.log(inputName.value);
    outputName.textContent = `Tpye Name : ${inputName.value}`;
});

const selectCar = document.getElementById('car');

const selectedCar = document.getElementById('selected-car');

selectCar.addEventListener('change',()=>{
    selectedCar.textContent = `Selected car: ${selectCar.value}`;
});

