//const play='playerr.json'
const playerr = document.getElementById("playerr");
playerr.addEventListener("click", function(event) {
  event.preventDefault();
  fetch(`https://api.cricapi.com/v1/match_squad?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=3569487d-0f89-469d-9c4f-f81101246f2e`
  ).then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      //const Team = data.data.find((team) => team.teamName === "South Africa");
      //const a=JSON.stringify(data.squad);
      let a=data.data[0].players
      console.log(a)
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
      })// else {
       // console.log("no player avaiable");
     // }
      
    });
  //});
  

//fetch match details
const match = document.getElementById("matches");
match.addEventListener("click", function (event) {
  event.preventDefault();
playerr.style.display='none'
  fetch(`https://api.cricapi.com/v1/series_info?apikey=97f0ec33-ee23-46f1-bf9a-4a5d7c0e219a&id=bd830e89-3420-4df5-854d-82cfab3e1e04`)
    .then((res) => {
        return res.json()})
    .then((data3) => {
      console.log(data3)
      const list=data3.data.matchList
      console.log(list)
     if (list.matchType === "England") 
        var data2 = "";
        list.forEach((match1) => {
          data2 += `
                <div class="match">
        <h2 class="name">Name: ${match1.name}</h2>
        <p class="status">Status: ${match1.status}</p>
        <p class="venue">Venue: ${match1.venue}</p>
        <p class="date">Date: ${match1.date}</p>
        <p class="dateTime">DateTime: ${match1.datetimeGMT}</p>
        <p class="teams">Teams: ${match1.teams}</p>
      </div>
      `;
        });
        
        document.querySelector("#display-match").innerHTML = data2;
        })
       // else{
           // console.log("error")
       // }
      });
    
    //});

const point=document.getElementById("score")
point.addEventListener("click", function (event) {
  event.preventDefault();
  fetch(`https://api.cricapi.com/v1/match_points?apikey=b17275a2-4770-4799-b626-2f1dc6cc1b13&id=54eab4d0-6972-4d55-aa65-5278525ababa&ruleset=0`)
.then((resp)=>{
  return resp.json()})
.then((datap)=>{
  console.log(datap)})

const pointtable=datap.data.points
console.log(pointtable)
 var pointss='';
 pointtable.forEach((pointt)=>{
  pointss+=
  `
  <table border='1' class='point-table'>score
  <th class='th'><td> Name</td><td>{pointt.name}</td></th>
  <tr class='tr'><td> Points</td><td>{pointt.points}</td><tr>
  </table>
  `
 });
document.querySelector('#display-points').innerHTML=pointss
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
//points table
const pointsAPI = "points.json";
const more = document.getElementById("more");
const pointsTableContainer = document.getElementById("pointsTableContainer");

function loadPointsTable(pointsAPI) {
    fetch(pointsAPI)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const inningsData = data.data.innings;

            // Clear previous content
            pointsTableContainer.innerHTML = '';

            if (inningsData.length === 0) {
                console.log("No innings data found");
                return;
            }

            // Create the table element
            const pointsTable = document.createElement("table");
            pointsTable.classList.add("points-table");

            // Create table header
            const tableHeader = pointsTable.createTHead();
            const headerRow = tableHeader.insertRow(0);

            const inningHeader = document.createElement("th");
            inningHeader.textContent = "Inning";
            headerRow.appendChild(inningHeader);

            const battingHeader = document.createElement("th");
            battingHeader.textContent = "Batting";
            headerRow.appendChild(battingHeader);

            const bowlingHeader = document.createElement("th");
            bowlingHeader.textContent = "Bowling";
            headerRow.appendChild(bowlingHeader);

            // Create table body
            const tableBody = pointsTable.createTBody();

            inningsData.forEach((inning) => {
                const row = tableBody.insertRow(-1);

                const inningCell = row.insertCell(0);
                inningCell.textContent = inning.inning;

                const battingCell = row.insertCell(1);
                const battingPlayers = inning.batting.map((player) => `${player.name} (${player.points} pts)`).join(", ");
                battingCell.textContent = battingPlayers;

                const bowlingCell = row.insertCell(2);
                const bowlingPlayers = inning.bowling.map((player) => `${player.name} (${player.points} pts)`).join(", ");
                bowlingCell.textContent = bowlingPlayers;
            });

            // Append the table to the container
            pointsTableContainer.appendChild(pointsTable);
        })
        .catch((error) => {
            console.error(error);
            // Handle the error here
        });
}


more.addEventListener("click", () => {
    loadPointsTable(pointsAPI);
});
*/