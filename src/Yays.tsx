import React, { useState } from 'react';

function Yays() {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [displayList, setDisplayList] = useState<string[]>([]);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(event.target.value);
    };
  
    const handleButtonClick = () => {
      setDisplayText(inputText);
      setDisplayList([...displayList, inputText]);
    };
  
    return (
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Show Text</button>
        {
            displayList.map((element, index) => (
                <div key={index}>{element}</div>
        ))}
      </div>
    );
}

export default Yays;