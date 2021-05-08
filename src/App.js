import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [fullName, setfullName] = useState({
    fname: '',
    lname: '',
  });

  const InputEvent = event => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setfullName(prepValue => {
      // console.log(prepValue);
      if (name === "fName") {
        return {
          fname: value,
          lname: prepValue.lname
        };
      }
      else
        if (name === "lName") {
        return {
          fname: prepValue.fname,
          lname: value
        };
      

      }
    });
  };

  const onSubmits = event => {
    event.preventDefault();
    alert('form submitted');
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullName.fname} 
            {fullName.lname}
          </h1>
          <input
            type="text"
            placeholder="Enter your Name"
            name="fName"
            onChange={InputEvent}
            value={fullName.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your password"
            name="lName"
            onChange={InputEvent}
            value={fullName.lname}
          />
          <button type="submit"> Submit me </button>
        </form>
      </div>
    </>
  );
};
export default App;
