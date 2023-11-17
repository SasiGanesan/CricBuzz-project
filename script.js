//display player details
const playerr = document.getElementById("playerr");
playerr.addEventListener("click", function (event) {
  event.preventDefault();
  const matchd = (document.querySelector("#display-match").style.display =
    "none");
  const team = (document.querySelector(".team-mem").style.display = "flex");
  var pointss = document.querySelector(".dis-point").style.display='none'
  //fetch(`https://api.cricapi.com/v1/match_squad?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=3569487d-0f89-469d-9c4f-f81101246f2e`)
  fetch("./Eng-player.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let a = data.data[0].players;
      console.log(a);
      var data1 = "";
      a.forEach((player) => {
        data1 += `  
        <div id="players">
        
        <img
          src='${player.playerImg}'
          alt="logo" id="playerImg" 
        />
        
        <h1 id="playername">Name: ${player.name}</h1>
        <p id="role">Role: ${player.role}</p>
        <p id="battingStyle">BattingStyle: ${player.battingStyle}</p>
        <p id="bowlingStyle">BowlingStyle: ${player.bowlingStyle}</p>
        <p id="country">Country: ${player.country}</p>
      </div>`;
      });
      document.querySelector(".team-mem").innerHTML = data1;
    }); 
});


//fetch match details
const match = document.getElementById("matches");
match.addEventListener("click", function (event) {
  event.preventDefault();
  const team = (document.querySelector(".team-mem").style.display = "none");
  const matchd = (document.querySelector("#display-match").style.display =
    "block");
    var pointss = document.querySelector(".dis-point").style.display='none'
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
                <div id="match">
        <h2 id="name">${match1.name}</h2>
        <p id="status">Status: ${match1.status}</p>
        <p id="venue">Venue: ${match1.venue}</p>
        <p id="date">Date: ${match1.date}</p> 
        <p id="teams">Teams: ${match1.teams}</p>
      </div>
      `;
      });

      document.querySelector("#display-match").innerHTML = data2;
    });
 
});


//fetch points table
const point = document.getElementById("score");
//var pointss = document.getElementById('point-table')
//pointss.style.display='none'
point.addEventListener("click", function (event) {
  event.preventDefault();
  const team = (document.querySelector(".team-mem").style.display = "none");
  const matchd = (document.querySelector("#display-match").style.display =
    "none");
    var pointss = document.querySelector(".dis-point").style.display='table'
  // fetch(
  // `https://api.cricapi.com/v1/match_points?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=54eab4d0-6972-4d55-aa65-5278525ababa&ruleset=0`//eng
  // )
  //fetch(`https://api.cricapi.com/v1/match_scorecard?apikey=97f0ec33-ee23-46f1-bf9a-4a5d7c0e219a&id=3569487d-0f89-469d-9c4f-f81101246f2e`) //eng  vs south frica
  fetch("./score.json")
    .then((resp) => {
      return resp.json();
    })
    .then((datap) => {
      console.log(datap);

      const pointtable = datap.data;
      console.log(pointtable);

      var pointss = document.querySelector(".dis-point");
      //var pointss = "";
      
      pointtable.map((pointt) => {
       
        const row1 = document.createElement("tr");

        const namecell = document.createElement("td");
        namecell.textContent = pointt.teamname;
        row1.appendChild(namecell);

        const flagcell = document.createElement("td");
        const flagimg = document.createElement("img")
        flagimg.src=pointt.img
        flagcell.appendChild(flagimg)
        row1.appendChild(flagcell)

        const matchcell = document.createElement("td");
        matchcell.textContent = pointt.matches;
        row1.appendChild(matchcell);

        const wincell = document.createElement("td");
        wincell.textContent = pointt.wins;
        row1.appendChild(wincell);

        const losscell = document.createElement("td");
        losscell.textContent = pointt.loss;
        row1.appendChild(losscell);

        const tiescell = document.createElement("td");
        tiescell.textContent = pointt.ties;
        row1.appendChild(tiescell);

        pointss.appendChild(row1);
        /*
       <th>Country</th><th>flag</th><th>Matches</th><th>Wins</th><th>Loss</th><th>Ties</th></tr>
        <table class='dis-point table-bordered'>
       <tr>
          <tr><td>${pointt.teamname}</br>${pointt.shortname}</td><td><img id='point-img' src='${pointt.img}'></td><td>${pointt.matches}</td><td>${pointt.wins}</td><td>${pointt.loss}</td><td>${pointt.ties}</td></tr>
      <table>
        */
      });

     // document.querySelector("#point-table").innerHTML = pointss;
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
