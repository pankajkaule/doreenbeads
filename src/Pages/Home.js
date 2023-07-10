import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import FilterPanel1 from "../Components/FilterPanel1";
import Popular from "../Components/Popular";
import WeekendDeals from "../Components/WeekendDeals";
import HotCategeory from "../Components/HotCategeory";
import BestSeller from "../Components/BestSeller";
import RecommendCategories from "../Components/RecommendCategories";
import HomeSlider from "../Components/HomeSlider";
import Drop from "../Components/Drop";
import Slider from "../Components/Slider";
const Home = () => {
  const [data, setData] = useState([]);
  const [mens, setMens] = useState([data]);
  const [womens, setWomens] = useState([data]);
  const [jewelery, setJewelery] = useState([data]);
  const [electronics, setElectronics] = useState([data]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https:fakestoreapi.com/products");
      const data = await response.clone().json();
      const mens = data.filter((x) => x.category === "men's clothing");
      const womens = data.filter((x) => x.category === "women's clothing");
      const jewelery = data.filter((x) => x.category === "jewelery");
      const electronics = data.filter((x) => x.category === "electronics");
      setMens(mens);
      setWomens(womens);
      setJewelery(jewelery);
      setElectronics(electronics);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="homepanel">
        <div className="filterpanel">
          <Drop />
        </div>
        <div className="home">
          <Slider />
          <WeekendDeals filter={mens} key={mens.id} />
          <Popular filter={mens} category="men's clothing" />
          <HotCategeory filter={jewelery} />
          <BestSeller filter={electronics} />
          <RecommendCategories filter={womens} />
          {/* <HomeSlider/> */}
        </div>
      </div>
    </>
  );
};

export default Home;
