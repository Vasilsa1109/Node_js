const express = require("express");
const app = express();
app.use("/home/foo/bar", function(_, response){
  response.sendStatus(404).send('error: not found');
})
app.listen(3000);

