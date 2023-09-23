import React, { useState } from "react";
import { useDestination } from "context/DestinationContext";
import InputField from "components/InputField";
import Search from "components/Search";
import LabelField from "components/LabelField";
import CalenderField from "components/CalenderField";
import ErrorModal from "components/ErrorModal";
import { ORIGIN, DESTINATION } from "constants";
import "./FilterPage.scss";

const FilterPage = () => {
  const { destination, setDestination } = useDestination();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (value, type) => {
    setDestination({
      ...destination,
      [type]: value,
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="filterPage">
      <div className="userField">
        <LabelField></LabelField>
        <div className="fieldItems">
          <InputField type={ORIGIN} handleChange={handleChange}></InputField>
          <InputField
            type={DESTINATION}
            handleChange={handleChange}
          ></InputField>
          <CalenderField></CalenderField>
          <Search destination={destination} openModal={openModal}></Search>
        </div>
      </div>
      <ErrorModal isOpen={isModalOpen} onClose={closeModal}></ErrorModal>
    </div>
  );
};

export default FilterPage;
