import { useState } from "react";

function Form() {
  let [fullName, setFullName] = useState("");

  function handleNameChange(event) {
    setFullName(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        id="full name"
        value={fullName}
        onChange={handleNameChange}
      />
      <button>submit</button>
    </form>
  );
}

export default Form;
