<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <Door number="1" :hasGift="false" />
  </div>
</template>

<script>
import Door from "./components/Door";

export default {
  name: "App",
  components: { Door }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: #ffffff;
  background: linear-gradient(to right, #2b5876, #4e4376);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #222222;
  background-color: #22222277;
  padding: 20px;
  margin-bottom: 60px;
}
</style>
