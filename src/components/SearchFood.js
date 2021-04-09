import { useEffect, useState } from "react";

const SearchFood = () => {
  const [food, setFood] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const searchFood = () => {
    fetch(`https://foodish-api.herokuapp.com/api/images/${food}`)
      .then((res) => res.json())
      .then((data) => setSearchResult(data.image));
  };

  useEffect(searchFood, [food]);

  return (
    <>
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <p>search food</p>
      {searchResult && <img src={searchResult} alt="food" />}
    </>
  );
};

export default SearchFood;
