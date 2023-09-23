import React from "react";
import "./FilterPage.scss";
import InputField from "components/InputField";
import SearchButton from "components/SearchButton";
import LabelField from "components/LabelField";
import CalenderField from "components/CalenderField";
import { useDestination } from "context/DestinationContext";
import { ORIGIN, DESTINATION } from "constants";

const FilterPage = () => {
  const { destination, setDestination } = useDestination();

  const handleChange = (value, type) => {
    setDestination({
      ...destination,
      [type]: value,
    });
  };

  return (
    <section className="filterPage">
      <div className="userField">
        <LabelField></LabelField>
        <div className="fieldItems">
          <InputField type={ORIGIN} handleChange={handleChange}></InputField>
          <InputField
            type={DESTINATION}
            handleChange={handleChange}
          ></InputField>
          <CalenderField></CalenderField>
          <SearchButton></SearchButton>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
