import { useState } from "react";
import classes from "./Search.module.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [org, setOrg] = useState({});

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await fetch(`https://api.github.com/orgs/${searchInput}`, {
        headers: {
          authorization: process.env.REACT_APP_API_KEY
        }
      });
      const data = await result.json();
      setOrg(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log('ORG: ', org)
  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        placeholder="search orgs:"
        onChange={handleChange}
        className={classes.searchInput}
      />
      <button onClick={handleClick} className={classes.searchButton}>
        Search
      </button>
    </div>
  );
};

export default Search;
