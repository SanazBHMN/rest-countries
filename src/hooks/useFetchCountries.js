import { useState } from "react";
import axios from "axios";

const useFetchCountries = () => {
  const [countries, setCountries] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL);
      //   console.log(response.data);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return [fetchCountries, countries];
};

export default useFetchCountries;
