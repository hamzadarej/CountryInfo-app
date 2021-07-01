const country = ({ results }) => {
  const lands = results.map(({languages,subregion,flag, name, capital, population }, i) => {
    console.log(results);
    return (
      <div className="box" key={i}>
        <h2>{name}</h2>
        <h5>Location: {subregion}</h5>
        <h5>languages: {languages[0].name}</h5>
        <h5>Capital: {capital}</h5>
        <h5>Population: {population}</h5>
        <img src={flag} alt={name}></img>
      </div>
    );
  });
  return <div>{lands}</div>;
};
export default country;
