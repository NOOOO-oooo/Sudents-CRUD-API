const express = require("express");
const app = express();
const port = 2001;
const studentsRoutes = require("./src/student/routes");

app.use(express.json());

app.get("/", (req, res) => {
   console.log("hello ");
});

app.use("/api/v1/students", studentsRoutes);

app.listen(port, console.log(`listening on port ${port}...`));
