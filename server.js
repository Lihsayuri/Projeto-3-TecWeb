const { JSDOM } = require("jsdom")
const axios = require('axios')

const f1 = async (team) => {
  try {
    const { data } = await axios.get(`https://www.formula1.com/en/teams/${team}.html`);
    const dom = new JSDOM(data, {
      runScripts: "outside-only",
      resources: "usable"
    });
    const { document } = dom.window;
    const teamInfo = document.querySelector("article > div.inner-wrap.group > header.team-details")
    var driversNums = []
    var drivers = []
    for(element of teamInfo.getElementsByClassName("driver-number")) {
      console.log(element.querySelector('span').innerHTML)
      driversNums.push(element.querySelector('span').innerHTML)
    }
    for(element of teamInfo.getElementsByClassName("driver-name")){
      console.log(element.innerHTML)
      drivers.push(element.innerHTML)
    }
    return drivers

  } catch (error) {
    throw error;
  }
};

f1('Red-Bull').then(document => console.log("Peguei dados"));
