import React from "react";
import "./FilterPage.scss";
import InputField from "components/InputField";
import SearchButton from "components/SearchButton";
import LabelField from "components/LabelField";
import CalenderField from "components/CalenderField";

const FilterPage = () => {
  return (
    <section className="filterPage">
      <div className="userField">
        <LabelField></LabelField>
        <div className="fieldItems">
          <InputField prop="Nereden"></InputField>
          <InputField prop="Nereye"></InputField>
          <CalenderField></CalenderField>
          <SearchButton></SearchButton>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
