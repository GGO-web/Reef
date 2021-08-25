const steppers = document.querySelectorAll(".stepper");
if (steppers) {
   steppers.forEach((stepper) => {
      const minusButton = stepper.querySelector(".stepper__down");
      const plusButton = stepper.querySelector(".stepper__up");
      const stepperInput = stepper.querySelector(".stepper__counter");

      minusButton.addEventListener("click", () => {
         const currStepper = parseInt(stepperInput.value);
         if (currStepper > +stepperInput.min)
            stepperInput.value = String(currStepper - 1);
      });

      plusButton.addEventListener("click", () => {
         const currStepper = parseInt(stepperInput.value);
         if (currStepper < +stepperInput.max)
            stepperInput.value = String(currStepper + 1);
      });

      stepperInput.addEventListener("change", function () {
         const stepperInputValue = parseInt(stepperInput.value);
         const minValue = stepperInput.min;
         const maxValue = stepperInput.max;

         if (!stepperInputValue) {
            stepperInput.value = minValue;
         } else if (stepperInputValue < minValue) {
            stepperInput.value = minValue;
         } else if (stepperInputValue > maxValue) {
            stepperInput.value = maxValue;
         }
      });
   });
}
