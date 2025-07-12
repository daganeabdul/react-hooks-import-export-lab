import React from "react";


const username = "abdirahman";
const city = "garissa";

function Home({username, city}) {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}


export default Home;
