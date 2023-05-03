import { useState } from 'react';

function Greeting() {
    const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    const { value } = event.target;
    const regex = /^\d{0,14}$/; // regular expression to allow only numbers and a maximum of 14 digits
    if (regex.test(value)) {
      setInputValue(value);
    }
  }
  
  return (
    <div>
      <h1>Hello, {inputValue || 'Stranger'}!</h1>
      <p>Please enter your name:</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

export default Greeting;
