import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import CardItem from "./CardItem";
import Card1 from "./pages/Card1";
import Card2 from "./pages/Card2";
import Card3 from "./pages/Card3";
import Card4 from "./pages/Card4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Cards() {
  const [card, setCard] = useState("");

  return (
    <Router>
      <Switch>
        <div className="cards">
          <h1>Check out these EPIC Destinations!</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <ul className="cards__items">
                  <Route path="/card1">
                    <Card1 />
                  </Route>
                  <Route path="/card2">
                    <Card2 />
                  </Route>
                  <Route path="/card3">
                    <Card3 />
                  </Route>
                  <Route path="/card4">
                    <Card4 />
                  </Route>
                </ul>
                <Link to={card} onClick={() => setCard("card1")}>
                <CardItem
                  src="images/img-9.jpg"
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                  label="Adventure"
                  path="#"
                />
                </Link>
              </ul>

              <Link to={card} onClick={() => setCard("card2")}>
                <CardItem
                  src="images/img-3.jpg"
                  text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                  label="Mystery"
                />
              </Link>

              <ul className="cards__items">
                <Link to={card} onClick={() => setCard("card3")}>
                  <CardItem
                    src="images/img-4.jpg"
                    text="Experience Football on Top of the Himilayan Mountains"
                    label="Adventure"
                    path="#"
                  />
                </Link>
              </ul>

              <ul className="cards__items">
                <Route path="/card4">
                  <Card4 />
                </Route>
                <Link to={card} onClick={() => setCard("card4")}>
                  <CardItem
                    src="images/img-8.jpg"
                    text="Ride through the Sahara Desert on a guided camel tour"
                    label="Adrenaline"
                    path="#"
                  />
                </Link>
              </ul>
              <ul className="cards__items">
                <Route path="/card4">
                  <Card4 />
                </Route>
                <Link to={card} onClick={() => setCard("card4")}>
                  <CardItem
                    src="images/img-2.jpg"
                    text="Travel through the Islands of Bali in a Private Cruise"
                    label="Luxury"
                    path="#"
                  />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default Cards;
