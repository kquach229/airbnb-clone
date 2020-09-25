import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august to 30 aug - 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://static.trip101.com/main_pic/production/large/185481"
        location="Private room in center of NYC"
        title="Stay at the extravagant condo"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="$80/night"
        total="$125"
      />
      <SearchResult
        img="https://static.trip101.com/main_pic/production/large/185481"
        location="Private room in center of NYC"
        title="Stay at the extravagant condo"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="$80/night"
        total="$125"
      />
      <SearchResult
        img="https://static.trip101.com/main_pic/production/large/185481"
        location="Private room in center of NYC"
        title="Stay at the extravagant condo"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="$80/night"
        total="$125"
      />
    </div>
  );
};

export default SearchPage;
