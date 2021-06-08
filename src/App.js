import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import Loading from "./components/Loading";

function App() {
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function submitHandle(e) {
    e.preventDefault();
    let textToUrl = encodeURIComponent(userInput);

    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;
    axios(endPoint)
      .then((rep) => setResults(rep.data),)
      .catch((err) => console.log(`you had an ${err}`));
  }
 
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  if(loading)return <Loading/>;

  return (
    <React.Fragment>
      <h1> find Info about Countries</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Enter a country name"
        />
        <button type="submit">Search</button>
      </form>

      <Country results={results} />
    </React.Fragment>
  );
}

export default App;
