module.exports = (words) => {
  return new Promise((resolve, reject) => {
    try {
      // ['ana', 'ana', 'ana', 'bia', 'bia']
      // { ana: 3, bia: 2}

      const groupedWords = words.reduce((objeto, word) => {
        if (objeto[word]) {
          objeto[word] = objeto[word] + 1;
        } else {
          objeto[word] = 1;
        }
        return objeto;
      }, {});

      const groupedWordsArray = Object.keys(groupedWords).map((key) => ({
        name: key,
        amount: groupedWords[key],
      }))
      .sort((word1, word2) => word2.amount - word1.amount)

      resolve(groupedWordsArray);
    } catch (e) {
      reject(e);
    }
  });
};
