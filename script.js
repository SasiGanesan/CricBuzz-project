//const play='playerr.json'
const playerr = document.getElementById("playerr");
playerr.addEventListener("click", function (event) {
  event.preventDefault();
  const matchd = (document.querySelector("#display-match").style.display =
    "none");
  const team = (document.querySelector(".team-mem").style.display = "flex");
  //match.style.display='none'
  //fetch(`https://api.cricapi.com/v1/match_squad?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=3569487d-0f89-469d-9c4f-f81101246f2e`)
  fetch("./Eng-player.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //const Team = data.data.find((team) => team.teamName === "South Africa");
      //const a=JSON.stringify(data.squad);
      let a = data.data[0].players;
      console.log(a);
      //if (data.a =="success") {
      var data1 = "";
      a.forEach((player) => {
        data1 += `  
        <div id="players">
        
        <img
          src='${player.playerImg}'
          alt="logo" id="playerImg" 
        />
        
        <h1 class="playername">Name: ${player.name}</h1>
        <p class="role">Role: ${player.role}</p>
        <p class="battingStyle">BattingStyle: ${player.battingStyle}</p>
        <p class="bowlingStyle">BowlingStyle: ${player.bowlingStyle}</p>
        <p class="country">Country: ${player.country}</p>
      </div>`;
      });
      document.querySelector(".team-mem").innerHTML = data1;
    }); // else {
  // console.log("no player avaiable");
  // }
});
//});

//fetch match details
const match = document.getElementById("matches");
match.addEventListener("click", function (event) {
  event.preventDefault();
  const team = (document.querySelector(".team-mem").style.display = "none");
  const matchd = (document.querySelector("#display-match").style.display =
    "block");
  //playerr.data1.style.display = "none";
  // fetch(`https://api.cricapi.com/v1/series_info?apikey=97f0ec33-ee23-46f1-bf9a-4a5d7c0e219a&id=bd830e89-3420-4df5-854d-82cfab3e1e04`)
  fetch("./players.json")
    .then((res) => {
      return res.json();
    })
    .then((data3) => {
      console.log(data3);
      const list = data3.data.matchList;
      console.log(list);

      const englist = list.filter((mat) => mat.teams.includes("England"));

      var data2 = "";
      englist.forEach((match1) => {
        // match1.filter(match1.teams='England');
        //if (match1.teams[0] || match1.teams[1] === "England")
        data2 += `
                <div class="match">
        <h2 class="name">${match1.name}</h2>
        <p class="status">Status: ${match1.status}</p>
        <p class="venue">Venue: ${match1.venue}</p>
        <p class="date">Date: ${match1.date}</p> 
        <p class="teams">Teams: ${match1.teams}</p>
      </div>
      `;
        // }
      });

      document.querySelector("#display-match").innerHTML = data2;
    });
  //<p class="dateTime">DateTime: ${match1.datetimeGMT}</p>
  // else{
  // console.log("error")
  // }
});

//});

//fetch points table
const point = document.getElementById("score");
//var pointss = document.getElementById('point-table')
//pointss.style.display='none'
point.addEventListener("click", function (event) {
  event.preventDefault();
  const team = (document.querySelector(".team-mem").style.display = "none");
  const matchd = (document.querySelector("#display-match").style.display = "none");
  //pointss.style.display='block'
  // fetch(
  // `https://api.cricapi.com/v1/match_points?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=54eab4d0-6972-4d55-aa65-5278525ababa&ruleset=0`//eng
  // )
  //fetch(`https://api.cricapi.com/v1/match_scorecard?apikey=97f0ec33-ee23-46f1-bf9a-4a5d7c0e219a&id=3569487d-0f89-469d-9c4f-f81101246f2e`) //eng  vs south frica
  fetch("./scorecard.json")
    .then((resp) => {
      return resp.json();
    })
    .then((datap) => {
      console.log(datap);

      const pointtable = datap.data.score[0];
      console.log(pointtable);

      //var pointss = document.getElementById("point-table");
      var pointss = "";
      pointtable.forEach((pointt) => {
        
        pointss = `
       <table class='dis-point table-bordered'>
       <tr>
          <th><td>Inning</td> <td>${pointt.inning}</td></th></tr>
          <tr><td>o</td><td>${pointt.o}</td></tr>
          <tr><td>r</td><td>${pointt.r}</td></tr>
          <tr><td>w</td><td>${pointt.w}</td></tr>
      
      <table>
      `;
      
      /*
        const row1 = document.createElement("tr");

        const namecell = document.createElement("td");
        namecell.textContent = pointt.inning;
        row1.appendChild(namecell);

        const innicell = document.createElement("td");
        innicell.textContent = pointt.o;
        row1.appendChild(innicell);

        const ocell = document.createElement("td");
        ocell.textContent = pointt.o;
        row1.appendChild(ocell);

        const wcell = document.createElement("td");
        wcell.textContent = pointt.o;
        row1.appendChild(wcell);

        //const row2 = document.createElement("tr");

        //const pointscell = document.createElement("td");
        //pointscell.textContent = pointt.bowling;
        //row2.appendChild(pointscell);

        pointss.appendChild(row1);
        //pointss.appendChild(row2);
        */
     });

      document.querySelector("#point-table").innerHTML = pointss;
    });
});

//more
const footer = document.getElementById("footer");
footer.style.display = "none";
const more = document.getElementById("more");
more.addEventListener("click", function (event) {
  event.preventDefault();
  footer.style.display = "block";
});

//`https://api.cricapi.com/v1/match_squad?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=3569487d-0f89-469d-9c4f-f81101246f2e
// Eng-player.json
//https://api.cricapi.com/v1/series_squad?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=e3bd2125-82e2-4841-a097-c681d46c7a60
//./playerr.json
//series matches
//`https://api.cricapi.com/v1/series_info?apikey=97f0ec33-ee23-46f1-bf9a-4a5d7c0e219a&id=bd830e89-3420-4df5-854d-82cfab3e1e04`
//points table api
//https://api.cricapi.com/v1/match_points?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=54eab4d0-6972-4d55-aa65-5278525ababa&ruleset=0
/*
 pointss += `
  <table border="1" class="point-table">
        <tr>
          <th>Name</th>
          <th>Points</th>
        </tr>
       <tr>
          <td class="td">${pointt.name}</td>
          <td>${pointt.points}</td>
      </tr>
</table>
  `;*/
