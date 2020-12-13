const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");
const groupedWords = require("./groupedWords");

// Inter process communication
ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);

  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then((words) => groupedWords(words))
    .then((groupWords) => {
      console.log(groupWords)
      event.reply("process-subtitles", groupWords);
    });
});
