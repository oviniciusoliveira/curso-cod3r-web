<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" @on-calc-button-click="clearMemory" triple />
    <Button label="/" @on-calc-button-click="setOperation" operation />
    <Button label="7" @on-calc-button-click="addDigit" />
    <Button label="8" @on-calc-button-click="addDigit" />
    <Button label="9" @on-calc-button-click="addDigit" />
    <Button label="*" @on-calc-button-click="setOperation" operation />
    <Button label="4" @on-calc-button-click="addDigit" />
    <Button label="5" @on-calc-button-click="addDigit" />
    <Button label="6" @on-calc-button-click="addDigit" />
    <Button label="-" @on-calc-button-click="setOperation" operation />
    <Button label="1" @on-calc-button-click="addDigit" />
    <Button label="2" @on-calc-button-click="addDigit" />
    <Button label="3" @on-calc-button-click="addDigit" />
    <Button label="+" @on-calc-button-click="setOperation" operation />
    <Button label="0" @on-calc-button-click="addDigit" double />
    <Button label="." @on-calc-button-click="addDigit" />
    <Button label="=" @on-calc-button-click="setOperation" operation />
  </div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";
export default {
  data: function() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      currentIndex: 0,
    };
  },
  components: { Button, Display },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.currentIndex === 0) {
        this.operation = operation;
        this.currentIndex = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0;
        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.currentIndex = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return;
      }

      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + n;

      this.displayValue = displayValue;
      this.clearDisplay = false;

      // Alternativa 1
      this.values[this.currentIndex] = displayValue;

      // Alternativa 2
    //   if (n !== ".") {
    //     const index = this.currentIndex;
    //     const newValue = parseFloat(displayValue);
    //     this.values[index] = newValue;
    //   }
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr repeat(5, 48px);
}
</style>
