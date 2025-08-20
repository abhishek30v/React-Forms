//this file is made for add reviews/comments using forms.
import { useState } from "react";

export default function CommentForms({ addNewComments }) {
  const [ formDetails, setFormDetails ] = useState({
    username: "",
    remarks: "",
    ratings: 5,
  });

  let handleInputChange = (event) => {
    //if you want the key name to come from a variable, you must wrap it in square brackets [] ,This is called computed property names.
    return setFormDetails({ ...formDetails, [event.target.name] : event.target.value});
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formDetails);

    //this "addNewComments" is a function which we have taken as props so that the state in the commentForms will be updated for re-rendering 
    addNewComments(formDetails);

    //this is used to set all the values back to default so that form input will be null again in frontend page
    setFormDetails({
      username: "",
      remarks: "",
      ratings: 5,
    });
  }

  return (
    <div>
      <h1>Submit Reviews:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" placeholder="username" name="username" id="username" value={formDetails.username} onChange={handleInputChange} autoComplete="username"/>

        <br /> <br />

        <label htmlFor="comment">Comments: </label>
        <textarea
          name="remarks"
          id="comment"
          placeholder="add reviews here"
          value={formDetails.remarks}
          onChange={handleInputChange}
          autoComplete="off"
        ></textarea>

        <br /> <br />

        <label htmlFor="rating">Rating: </label>
        <input type="number" name="ratings" id="rating" min={1} max={5} value={formDetails.ratings} onChange={handleInputChange}/>

        <br /> <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
