<template>
  <div class="card">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

// scoped = esse estilo só funciona para este componente
<style scoped>
    .card {
        margin: 10px;
        height: 55px;
        border-radius: 30px;
        background-color: #dd1133;
        color: #eeeeee;
        font-size: 1.3rem;
        font-weight: bold;

        display: flex;
        align-items: center;
    }

    .card .name {
        margin-left: 15px;
    }
    
    .card .amount {
        margin: 10px;
        padding: 5px;
        height: 35px;
        width: 35px;
        border-radius: 18px;

        background-color: #eeeeee;
        color: #dd1133;

        font-size: 14px;


        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
