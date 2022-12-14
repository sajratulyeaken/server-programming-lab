const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  experiences = fs.readFileSync("data/workExperience", { encoding: "utf-8" });
  experiences = JSON.parse(String(experiences));

  languages = fs.readFileSync("data/language", { encoding: "utf-8" });
  languages = JSON.parse(String(languages));

  skills = fs.readFileSync("data/skills", { encoding: "utf-8" });
  skills = JSON.parse(String(skills));

  edus = [];
  exp = [];
  lang = [];
  skl = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  for (let key in experiences) {
    exp.push(experiences[key]);
  }

  for (let key in languages) {
    lang.push(languages[key]);
  }

  for (let key in skills) {
    skl.push(skills[key]);
  }

  res.render("cv", { name: "Sajratul Yeaken", jobTitle: "Slime", phoneNum: "5261651", addressName: "Dhaka, BD", emailAdd:"syeaken@gmail.com", educations: edus, experiences: exp, languages: lang, skills: skl });
};

module.exports = { getCV: getCV };
