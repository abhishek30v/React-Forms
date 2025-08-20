//this file is made for add reviews/comments using formik library of react.
import { useState } from "react";
import { useFormik } from "formik";

export default function FormikCommentForms({ addNewComments }) {
 const validate = (values) => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username cant be empty';
    }
    
   if (!values.remarks) {
     errors.remarks = 'remarks cant be empty';
   }
 
   if (!values.rating) {
     errors.rating = 'rating cant be null';
   }
   return errors;
 }; 

const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       ratings: '',
    },
    validate,
     onSubmit: values => {
         addNewComments(values);
     },
   });


  return (
    <div>
      <h1>Submit Reviews:</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.username}
       />
        {formik.errors.username ? <div style={{ color: "red" }}>{formik.errors.username}</div> : null}

        <br /> <br />

        <label htmlFor="comment">Remarks: </label>
        <textarea
         id="comment"
         name="remarks"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.remarks}
        ></textarea>
         {formik.errors.remarks? <div style={{ color: "red" }}>{formik.errors.remarks}</div> : null}
        

        <br /> <br />

        <label htmlFor="rating">Rating: </label>
        <input
         id="rating"
         name="rating"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.rating}
       />
       {formik.errors.rating ? <div style={{color:"red"}}>{formik.errors.rating}</div> : null}
        <br /> <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
