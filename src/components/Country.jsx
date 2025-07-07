///////////////////////////////////////////////
////==== Working Country Search Engine ====////
///////////////////////////////////////////////

import { useEffect, useState } from "react";
import countriesService from "../services/countries";
import "../index.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countriesService
      .getCountries()
      .then((res) => {
        setCountry(res.data.slice(1, 40));
      })
      .catch((err) => console.log(`Error too much data fetch${err}`));
  }, []);

  const filterCountry = country.find((cou) =>
    cou.name.common.toLowerCase().includes(search)
  );
  console.log(filterCountry);

  return (
    <div>
      <label>find countries</label>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="scroll-container">
        <CountryChild
          country={country}
          search={search}
          filterCountry={filterCountry}
        />
      </div>
    </div>
  );
};

export default Country;

//////////////////////////////
////==== CountryChild ====////
//////////////////////////////

const CountryChild = ({ country, search, filterCountry }) => {
  if (search.length < 1) {
    return (
      <div>
        {country.length > 10 ? (
          <div>Too many country to render at once</div>
        ) : (
          <div>
            {country.map((c) => (
              <div key={c.area} className="MyCountry">
                <h1>{c.name.common}</h1>
                <p>capital : {c.capital}</p>
                <p>Area : {c.area}</p>
                <h1>Languages</h1>
                <ul>
                  {Object.values(c.languages).map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>

                <img src={c.flags.png} alt={c.flags.alt} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else
    return (
      <div>
        {filterCountry ? (
          <div>
            <h1>{filterCountry.name.common}</h1>
            <p>capital : {filterCountry.capital}</p>
            <p>Area : {filterCountry.area}</p>
            <h1>Languages</h1>
            <ul>
              {Object.values(filterCountry.languages).map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <img src={filterCountry.flags.png} alt={filterCountry.flags.alt} />
          </div>
        ) : (
          <div>
            <h1>No country was found</h1>
          </div>
        )}
      </div>
    );
};
