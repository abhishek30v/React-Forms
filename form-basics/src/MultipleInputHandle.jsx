import { useState } from "react";

function MultipleInputHandle() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputValue = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currFormData) => {
      currFormData[fieldName] = newValue;
      return { ...currFormData };
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
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
  );
}

export default MultipleInputHandle;
