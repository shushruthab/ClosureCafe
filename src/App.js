import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacksAndDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacksAndDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home snacks={snacks} drinks={drinks}/>}>  
            </Route>
            <Route exact path="/snacks" element={<Menu foods={snacks} title="Snacks" />}>
            </Route>
            <Route path="/snacks/:id" element={<Snack items={snacks} cantFind="/snacks" />}> 
            </Route>
            <Route exact path="/drinks" element={<Menu foods={drinks} title="Drinks" />}>
            </Route>
            <Route path="/drinks/:id" element={<Snack items={drinks} cantFind="/drinks" />}> 
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
