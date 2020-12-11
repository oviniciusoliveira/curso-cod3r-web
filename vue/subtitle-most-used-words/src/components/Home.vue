<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Selecione as Legendas"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append-outer="processSubtitles"
      >
      </v-file-input>
    </v-form>
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
      files: [],
      groupedWords: [
        { name: "i", amount: 1243 },
        { name: "you", amount: 900 },
        { name: "he", amount: 853 },
      ],
    };
  },
  methods: {
    processSubtitles() {
      console.log(this.files);
    },
  },
};
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
