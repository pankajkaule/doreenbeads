import React, { useEffect, useState } from "react";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import "../styles/Navbar.css";
const Navbar = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("./country.json")
      .then((res) => res.json())
      .then((country) => setCountry(country));
  }, []);

  return (
    <div className="Navbar">
      <div className="Contactlogo">
        <AdUnitsIcon />
      </div>
      <div className="Contacttext">Contact Us</div>

      <div className="countryDropdown">
        <select name="country" className="country">
          {country.map((country) => (
            <option className="countryoption">{country.country}</option>
          ))}
        </select>
      </div>

      <div className="LangaugeDropdown country">
        <select name="" id="">
          {country.map((country) => (
            <option>{country.langauge}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
