const express = require('express');
// const app = express.Router();
const app = express();
const memberController = require('../controllers/memberController')

// app.get("/", memberController.getMembers);

app.get("/:id",memberController.getMemberById);

app.get("/name/:name",memberController.getMemberByName);


app.post("/", memberController.addMember);

// app.get("/login", memberController.) 

app.put("/:id", memberController.editWholeMember);

// app.patch("/:id",memberController.editMember);

app.delete("/:id", memberController.deleteMember);

module.exports = app;