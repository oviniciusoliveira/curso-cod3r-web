const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");

// Inter process communication
ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);

  pathsToRows(paths)
    .then((rows) => console.log(rows))
    .then(() => {
      event.reply("process-subtitles", [
        {
          name: "i",
          amount: 1234,
        },
      ]);
    });
});
