import { useEffect, useState } from "react";
import axios from "axios";

const RandomFood = () => {
  const [food, setFood] = useState("");

  const fetchData = () => {
    axios
      .get("https://foodish-api.herokuapp.com/api/")
      .then((res) => setFood(res.data.image))
      .catch((err) => console.log(err));
  };

  useEffect(fetchData, []);

  return (
    <>
      <p>Random food</p>
      {food ? <img src={food} alt="food" /> : "Loading deliciousness......."}
    </>
  );
};

export default RandomFood;
