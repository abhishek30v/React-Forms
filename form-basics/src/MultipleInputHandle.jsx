import { useState } from "react";

function MultipleInputHandle() {
  //created an object state which will handle multiple inputs
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  //Changes the input field
  let handleInputValue = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currFormData) => {
      //we can write this also ->
      /* currFormData[fieldName] = newValue; */

      currFormData[event.target.name] = event.target.value;
      return { ...currFormData };
    });
  };

  //function that handles to submit button
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name: </label>
        <input
          type="text"
          id="name"
          value={formData.fullName}
          onChange={handleInputValue}
          name="fullName"
          placeholder="Enter your name"
        />

        <br />

        <label htmlFor="username">User Name: </label>
        <input
          type="text"
          id="username"
          value={formData.userName}
          onChange={handleInputValue}
          name="userName"
          placeholder="Enter your username"
        />

        <br />

        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          id="pass"
          value={formData.password}
          onChange={handleInputValue}
          name="password"
          placeholder="Enter the password"
        />

        <br />

        <button>Submit</button>
      </form>

      <div>
        <h1>Name show: {formData.fullName}</h1>
      </div>
    </div>
  );
}

export default MultipleInputHandle;
