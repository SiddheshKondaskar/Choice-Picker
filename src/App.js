import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleInputChange = (event) => {
    setNewOption(event.target.value);
  };

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      // Check if the new option already exists in the list
      if (!options.includes(newOption)) {
        setOptions([...options, newOption]);
        setNewOption('');
      } else {
        alert('Option already exists!');
      }
    } else {
      alert('Please enter an option!');
    }
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  const handleSelectRandomOption = () => {
    if (options.length > 1) {
      const randomIndex = Math.floor(Math.random() * options.length);
      setSelectedOption(options[randomIndex]);
    } else {
      alert('Please add some options!');
    }
  };

  return (
    <div className="container">
      <h1>Pick-my-Poison</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter option"
          value={newOption}
          onChange={handleInputChange}
        />
        <button onClick={handleAddOption}>Add</button>
      </div>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index}>
            {option}
            <button onClick={() => handleDeleteOption(index)}>X</button>
          </li>
        ))}
      </ul>
      <button className="random-button" onClick={handleSelectRandomOption}>Pick</button>
      {selectedOption && <p className="selected-option">Your Poison: {selectedOption}</p>}
    </div>
  );
}

export default App;
