import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var taskList = [];
var workTaskList = [];
 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { task: taskList});
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { task: workTaskList });
});

app.post("/submit", (req, res) => {
    taskList.push(req.body["task"]);
    console.log(taskList);
    res.render("index.ejs", { task: taskList });
})

app.post("/work", (req, res) => {
    workTaskList.push(req.body["task"]);
    console.log(workTaskList);
    res.render("work.ejs", { task: workTaskList });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})

