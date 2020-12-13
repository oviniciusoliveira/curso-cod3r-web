const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");
const prepareData = require('./prepareData')

// Inter process communication
ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);

  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then(words => console.log(words))
    .then(() => {
      event.reply("process-subtitles", [
        {
          name: "i",
          amount: 1234,
        },
      ]);
    });
});
