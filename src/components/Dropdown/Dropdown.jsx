import React, { useState } from 'react';

const Dropdown = ({ options, defaultLabel, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div onClick={handleToggle}>
        <span>{selectedOption ? selectedOption.label : defaultLabel}</span>
      </div>
      {isOpen && (
        <div className="dropdown__content">
          <ul>
            {options.map((option) => (
              <li key={option.id} onClick={() => handleSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
