import React, { useState } from 'react';

const Dropdown = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
