let celsius = document.getElementById("celsius");
let kelvin = document.getElementById("kelvin");
let fahrenheit = document.getElementById("fahrenheit");
let resetBtn = document.querySelector("button");

celsius.oninput = (e) => {
  celsiusOrKelvin(e.target.id);
  celsiusOrFahrenheit(e.target.id);
};

kelvin.oninput = (e) => {
  celsiusOrKelvin(e.target.id);
  kelvinOrFahrenheit(e.target.id);
};

fahrenheit.oninput = (e) => {
  kelvinOrFahrenheit(e.target.id);
  celsiusOrFahrenheit(e.target.id);
};

resetBtn.onclick = () => {
  celsius.value = "";
  kelvin.value = "";
  fahrenheit.value = "";
};

const celsiusOrKelvin = (whoIsCalling) => {
  if (whoIsCalling == "celsius") {
    kelvin.value = Number(celsius.value) + 273.15;
  } else {
    celsius.value = Number(kelvin.value) - 273.15;
  }
};

const celsiusOrFahrenheit = (whoIsCalling) => {
  if (whoIsCalling == "celsius") {
    fahrenheit.value = Number(celsius.value) * 1.8 + 32;
  } else {
    celsius.value = (Number(fahrenheit.value) - 32) / 1.8;
  }
};

const kelvinOrFahrenheit = (whoIsCalling) => {
  if (whoIsCalling == "kelvin") {
    fahrenheit.value = (Number(kelvin.value) - 273.15) * 1.8 + 32;
  } else {
    kelvin.value = (Number(fahrenheit.value) - 32) * (5 / 9) + 273.15;
  }
};
