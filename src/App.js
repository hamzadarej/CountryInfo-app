import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country"


function App() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  function submitHandle(e) {
    e.preventDefault();
    let textToUrl = encodeURIComponent(userInput);
    console.log(textToUrl);
    let Api =`https://restcountries.eu/rest/v2/name/${textToUrl}`;
    axios(Api)
    .then((rep)=>setResults(rep.data))
    .catch((err)=>console.log(`you had an ${err}`))
  }
  function changeHandle(e){
    setUserInput(e.target.value);
  }

  return (
    <React.Fragment >
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Enter a country name"
        />
      </form>
      <button type="submit">Search</button>
      <Country results={results}/>
    </React.Fragment >
  );
}

export default App;
