import "./Comment.css";
import { useState } from "react";
import CommentForms from "./CommentForms";
import FormikCommentForms from "./formikCommentForms";

export default function Comment() {
    const [comments, setComments] = useState([{
      username: "@abhi",
      remarks: "Good vibes",
      ratings: 5,
    }]); 
  
  let addNewComments = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    //console.log("added comment");
  }
  
    return (
    <div>
        <h1>All comments:</h1>
        {
          comments.map((comment, index) => (
            <div className="allComments" key={index}>
              <span>{comment.username}</span>
              <br />
              <span>(rating: {comment.ratings})</span>
              <br />
              <span>{comment.remarks}</span>
            </div>
          ))}
        <br />
        <hr />
        {/*<CommentForms addNewComments={addNewComments}></CommentForms>*/}
        <FormikCommentForms addNewComments={addNewComments}></FormikCommentForms>
    </div>
    )
}