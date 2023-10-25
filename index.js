import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

// Declaring Days and Months

let weekDay = new Date().getDay();
let month = new Date().getMonth();
const day = new Date().getDate();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

weekDay = weekDays[weekDay]
month = months[month]

const fullDate = {
    wDay: weekDay,
    mOfYear: month,
    dOfWeek: day,
}

console.log(fullDate)

let divs = []
let newDiv

let workDivs = []
let workNewDiv

app.get("/", (req, res) => {
    res.render("index.ejs", { divs, fullDate })
})

app.get("/work", (req, res) => {
    res.render("work.ejs", { workDivs, fullDate })
})

app.get("/", (req, res) => {
    res.render("partials/footer.ejs")
})

app.get("/", (req, res) => {
    res.render("partials/header.ejs")
})

app.post("/", (req, res) => {
    newDiv = req.body.todo
    divs.push(newDiv)
    console.log(newDiv)
    console.log(divs)
    res.render("index.ejs", { divs, fullDate })
})

app.post("/work", (req, res) => {
    workNewDiv = req.body.todowork
    workDivs.push(workNewDiv)
    console.log(workNewDiv)
    console.log(workDivs)
    res.render("work.ejs", { workDivs })
})


app.listen(port, (req, res) => {
    console.log(`Listening in port: ${port}.`)
})