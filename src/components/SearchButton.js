import React from "react";
import "./Components.scss";

const SearchButton = () => {
  return (
    <button className="searchButton" onClick={() => console.log("here")}>
      Uçuş Ara
    </button>
  );
};

export default SearchButton;
