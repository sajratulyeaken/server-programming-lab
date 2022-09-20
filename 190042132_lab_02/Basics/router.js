const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");

const fs = require("fs");

router.get("/", getCV);

router.get("/form", (req,res) => {
  res.render('form');
});

router.post("/form",function(req,res){
  var username = req.body.username;
  var email = req.body.emailAdd;
  var job = req.body.jobTitle;
  var address = req.body.addressName;
  var phone = req.body.phoneNum;
  var f = {username: username, jobTitle: job, addressName: address, emailAdd: email, phoneNum: phone};

  console.log(f);
  res.render("cv", { name: username, jobTitle: job, addressName: address, emailAdd: email, phoneNum: phone, educations: edus, experiences: exp, skills: skl, languages: lang });
});


module.exports = router;
