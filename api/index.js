// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require("path");

//middleware
// app.use(express.static("public"));

// default frontend homepage
export default function handler(req, res) {
  res.sendFile(path.join(__dirname, "public", "/index.html"));
}

// // server  listening from port
// // app.listen(port, (error) => {
// //   if (error) {
// //     console.log("error connecting server");
// //     //process.exit(1);
// //   }
// //   console.log(`server connected at http://localhost:${port}`);
// // });

// module.exports = app;
