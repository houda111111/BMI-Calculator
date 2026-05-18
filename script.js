let bmiBTN = document.getElementById("btn");
let bmiResult = document.getElementById("bmi-result");


document.getElementById("height").value = sessionStorage.getItem("height");

document.getElementById("weight").value = sessionStorage.getItem("weight");

bmiResult.value = sessionStorage.getItem("result");

document.getElementById("bmi-info").textContent = sessionStorage.getItem("bmiInfo");


bmiBTN.addEventListener("click", function () {
    let heightValue = document.getElementById("height").value;

    let bmiHeight = heightValue / 100;

    let bmiWeight = document.getElementById("weight").value;
    
    let bmiInfo = document.getElementById("bmi-info");


  let Result = bmiWeight / (bmiHeight * bmiHeight);

    bmiResult.value = Result.toFixed(3);

    if (Result < 18.5) {
        bmiInfo.textContent = "Underweight";
    } else if (Result <= 24.9) {
        bmiInfo.textContent = "Normal Weight";
    } else if (Result <= 29.9) {
        bmiInfo.textContent = "Overweight";
    } else {
        bmiInfo.textContent = "Obesity";
    }

  // Save Data

    sessionStorage.setItem("height", heightValue);
    sessionStorage.setItem("weight", bmiWeight);
    sessionStorage.setItem("result", Result.toFixed(3));
    sessionStorage.setItem("bmiInfo", bmiInfo.textContent);
});
