import React, { useState } from 'react';
import Dropdown from './components/Dropdown.js';
import './style.css';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="app-container">
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}
