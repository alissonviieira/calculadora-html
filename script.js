let display = document.getElementById("display");

function appendCharacter(character) {
  display.value += character;
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function sqrt() {
  try {
    const result = Math.sqrt(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
