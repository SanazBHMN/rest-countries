import { useState } from "react";
import axios from "axios";

const useFetchCountries = () => {
  const [countries, setCountries] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/all`);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return [fetchCountries, countries, setCountries];
};

export default useFetchCountries;
