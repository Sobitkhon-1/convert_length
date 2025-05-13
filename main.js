const inputValue = document.getElementById("inputValue");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");

function convertLength() {
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    result.textContent = "Result: 0";
    return;
  }

  let valueInMeters;

 
  if (fromUnit.value === "cm") {
    valueInMeters = value / 100;
  } else {
    valueInMeters = value;
  }

 
  let finalValue;
  if (toUnit.value === "cm") {
    finalValue = valueInMeters * 100;
  } else {
    finalValue = valueInMeters;
  }

  result.textContent = `Result: ${finalValue}`;
}

inputValue.addEventListener("input", convertLength);
fromUnit.addEventListener("change", convertLength);
toUnit.addEventListener("change", convertLength);
