import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
      </div>
      <div className="home__section">
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
      </div>
      <div className="home__section">
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
        <Card
          description="Comfortable, private places, with plenty of room"
          title="Expansion Everywhere"
          src="https://www.androidheadlines.com/wp-content/uploads/2015/04/bnb-billboard.jpg"
          price={20}
        />
      </div>
    </div>
  );
};

export default Home;
