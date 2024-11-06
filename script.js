let display = document.getElementById("display");
let calculator = document.getElementById("calculator");
let scaryMode = document.getElementById("scaryMode");
let images = document.querySelectorAll(".movingImage");
let glitchText = document.getElementById("glitchText");
let sound1 = document.getElementById("sound1");
let sound2 = document.getElementById("sound2");
let sound3 = document.getElementById("sound3");

function appendNumber(number) {
  // Do nothing if in scary mode
  if (scaryMode.style.display === "block") return;

  display.value += number;
}

function appendOperator(operator) {
  // Do nothing if in scary mode
  if (scaryMode.style.display === "block") return;

  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let result = eval(display.value);
  display.value = result;

  // Hide calculator and show scary mode
  calculator.style.display = "none";
  scaryMode.style.display = "block";

  // Play looping sounds and animate images
  playSounds();
  animateImages();

  // Keep the scary mode for 5 seconds before going back to normal
  setTimeout(() => {
    resetCalculator();
  }, 5000); // Keep scary mode visible for 5 seconds
}

function playSounds() {
  // Play sounds on loop
  sound1.loop = true;
  sound2.loop = true;
  sound3.loop = true;
  sound1.play();
  sound2.play();
  sound3.play();
}

function animateImages() {
  images.forEach((image) => {
    image.classList.remove("hidden");
    // Pop up in the center with a jump effect
    image.style.top = "50%";
    image.style.left = "50%";
    image.style.opacity = 1;
    image.style.transform = "translate(-50%, -50%) scale(1.5)";
    setTimeout(() => {
      // Start moving and shrinking randomly
      setInterval(() => {
        image.style.top = `${Math.random() * 100}%`;
        image.style.left = `${Math.random() * 100}%`;
        image.style.width = `${Math.random() * 200 + 100}px`; // Random size
        image.style.height = `${Math.random() * 200 + 100}px`; // Random size
      }, 500);
    }, 500); // Pop-up after 0.5 seconds
  });

  // Show the glitchy text
  glitchText.classList.remove("hidden");
}

function resetCalculator() {
  // Stop the sounds and reset
  sound1.loop = false;
  sound2.loop = false;
  sound3.loop = false;
  sound1.pause();
  sound2.pause();
  sound3.pause();

  // Hide the scary mode and show the calculator again
  scaryMode.style.display = "none";
  calculator.style.display = "block";

  // Reset the display and clear the calculator screen
  display.value = "";
}
