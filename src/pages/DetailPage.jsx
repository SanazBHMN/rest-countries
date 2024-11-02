import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import components
import Button from "../components/Button";
// import hooks
import useFetchCountry from "../hooks/useFetchCountry";

function DetailPage() {
  const [country, fetchSingleCountry] = useFetchCountry();

  const { name } = useParams();

  useEffect(() => {
    fetchSingleCountry(name);
  }, []);

  console.log(country);

  const countryCode = country && Object.keys(country?.currencies)[0];

  const languageNames = country && Object.values(country.languages).join(", ");

  return (
    <>
      <Button hasIcon={true} text="back" />
      {country && (
        <div className="mt-16 flex flex-col gap-5 md:flex-row md:justify-between md:gap-28">
          <div className="w-full h-[300px] basis-0 grow">
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className="w-full h-full m-auto sm:max-h-fit"
            />
          </div>
          <div className="basis-0 grow">
            <h1 className="font-bold text-xl my-10">{country.name.common}</h1>
            <div className="sm:flex sm:justify-between sm:gap-6">
              <ul>
                <li className="font-semibold my-3">
                  Native Name:{" "}
                  <span className="font-normal">{country.name.official}</span>
                </li>
                <li className="font-semibold my-3">
                  Population:{" "}
                  <span className="font-normal">
                    {country.population.toLocaleString()}
                  </span>
                </li>
                <li className="font-semibold my-3">
                  Region: <span className="font-normal">{country.region}</span>
                </li>
                <li className="font-semibold my-3">
                  Sub Region:{" "}
                  <span className="font-normal">{country.subregion}</span>
                </li>
              </ul>
              <ul>
                <li className="font-semibold my-3">
                  Capital:{" "}
                  <span className="font-normal">{country.capital[0]}</span>
                </li>
                <li className="font-semibold my-3">
                  Top Level Domain: <span className="font-normal">{}</span>
                </li>
                <li className="font-semibold my-3">
                  Currencies:{" "}
                  <span className="font-normal">
                    {country.currencies[countryCode].name}
                  </span>
                </li>
                <li className="font-semibold my-3">
                  Languages:{" "}
                  <span className="font-normal">{languageNames}</span>
                </li>
              </ul>
            </div>
            {country.borders && (
              <div>
                <h3>Border Countries:</h3>
                <ul className="flex flex-wrap gap-3">
                  {country.borders.map((borderCountry) => (
                    <li key={borderCountry}>
                      <Button hasIcon={false} text={borderCountry} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      <div></div>
    </>
  );
}

export default DetailPage;
