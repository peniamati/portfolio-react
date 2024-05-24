import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";

function App() {
  const {loading , portfolioData} = useSelector((state) => state.root)
  const url = "https://peniamatias.alwaysdata.net/api/portfolio/get-portfolio-data";
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(url);
      dispatch(SetPortfolioData(response.data))
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
