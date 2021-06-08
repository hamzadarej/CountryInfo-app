const country = ({ results }) => {
  const lands = results.map(({ flag, name, capital, population }, i) => {
    return (
      <div key={i}>
        <h1>{name}</h1>
        <h5>Capital: {capital}</h5>
        <h5>Population: {population}</h5>
        <img src={flag} alt={name}></img>
      </div>
    );
  });
  return <div>{lands}</div>;
};
export default country;
