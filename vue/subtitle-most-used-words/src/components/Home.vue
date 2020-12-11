<template>
  <v-container fluid>
    <div class="cards">
      <Card
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import Card from "./Card";
export default {
  components: { Card },
  data: function() {
    return {
      groupedWords: [
        { name: "i", amount: 1243 },
        { name: "you", amount: 900 },
        { name: "he", amount: 853 },
      ],
    };
  },
};
</script>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
</style>
