import { useState } from "react";
import "./FeedbackForm.css";
import logo from "../assets/pantrylogo.png";

function FeedbackForm() {
  const [rating, setRating] = useState("");
  const [enjoyedFB, setEnjoyedFB] = useState("");
  const [improveFB, setImproveFB] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, enjoyedFB, improveFB });
  };

  return (
    <main className="feedback">
      <header className="feedback-header">
        <img src={logo} alt="School Street Food Pantry Logo" className="feedback-logo" />
        <div>
          <h1>Anonymous Feedback Form</h1>
          <p>
            We value your feedback. Thank you for taking the time to help us
            improve!  
             
          </p>
        </div>
      </header>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            How satisfied were you with your visit at the School Street Food Pantry?
          </legend>
          <div className="rating-options">
          <label className="question">
            <input
              type="radio"
              name="rating"
              value="Poor"
              required
              checked={rating === "Poor"}
              onChange={(e) => setRating(e.target.value)}
            />
            Poor
          </label>
          <label className="question">
            <input
              type="radio"
              name="rating"
              value="Fair"
              required
              checked={rating === "Fair"}
              onChange={(e) => setRating(e.target.value)}
            />
            Fair
          </label>
          <label className="question">
            <input
              type="radio"
              name="rating"
              value="Good"
              required
              checked={rating === "Good"}
              onChange={(e) => setRating(e.target.value)}
            />
            Good
          </label>
          <label className="question">
            <input
              type="radio"
              name="rating"
              value="Excellent"
              required
              checked={rating === "Excellent"}
              onChange={(e) => setRating(e.target.value)}
            />
            Excellent
          </label>
          </div>
        </fieldset>
        <label className="question">
          What did you enjoy about your experience visiting the School Street
          Pantry?
          <textarea name="enjoy"
            placeholder="Please type your feedback here..."
            value={enjoyedFB}
            required
            onChange={(e) => setEnjoyedFB(e.target.value)}
          />
        </label>

        <label className="question">
          What could we improve on?
          <textarea name="improve"
            placeholder="Please type your feedback here..."
            value={improveFB}
            required
            onChange={(e) => setImproveFB(e.target.value)}
          />
        </label>

        <button type="submit" className= "submit-button" >Submit</button>
      </form>
    </main>
  );
}

export default FeedbackForm;
