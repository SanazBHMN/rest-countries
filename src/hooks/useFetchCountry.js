import axios from "axios";
import { useState } from "react";

const useFetchCountry = () => {
  const [country, setCountry] = useState();

  const fetchSingleCountry = async (name) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/name/${name}?fullText=true`
      );
      setCountry(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return [country, fetchSingleCountry];
};

export default useFetchCountry;
