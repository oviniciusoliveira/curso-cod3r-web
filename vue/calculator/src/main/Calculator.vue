<template>
    <div class="calculator">
        <Display value="1000" />
        <Button label="AC" @on-calc-button-click="clearMemory" triple  />
        <Button label="/" @on-calc-button-click="setOperation" operation  />
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
    components: { Button, Display },
    methods: {
        clearMemory() {
        },
        setOperation(operation) {
        },
        addDigit(n) {
        }
    }
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
