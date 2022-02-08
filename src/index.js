require('dotenv').config({ path: './config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002;

const productRoute = require("./routes/productRoute");
const memberRoute = require("./routes/memberRoute");
const categoryRoute = require("./routes/categoryRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

require("./db")(app);
app.use("/product", productRoute);
app.use("/member", memberRoute);
app.use("/category", categoryRoute);


// Routing Table
app.get("/",(req, res)=>{
    res.send("Hello from index");
});

app.get("/login",(req, res)=>{
    res.send("Hello from login");
});

// app.get("/register",(req, res)=>{
//     res.send("Hello from 44");
// });
//ตรงนี้ที่เป็น console กูแค่อยากให้มันโชว์ว่า ข้อมูลมันส่งไปจริงใช่มั้ย
// app.post("/register",(req, res)=>{
//     console.log(req.body.name);
//     console.log(req.body.email);
//     res.send("Hello from register");
// });


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

