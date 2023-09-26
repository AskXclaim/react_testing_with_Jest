import {FeedbackForm} from "./FeedbackForm";
import {FeedBackOverview} from "./FeedBackOverview";
import {useState} from "react";

export const FeedBack = () => {
    const [feedBacks, setFeedBacks] = useState([]);
    const handleSubmitBtn = (text) => {
        if (text?.trim().length === 0) {
            //log error
            alert("Please supply a review to leave");
            return;
        }

        const lastId = feedBacks[feedBacks?.length]?.id ?? 1;

        setFeedBacks([...feedBacks, {id: lastId + 1, text: text.trim()}]);

    };
    return (
        <div className="d-flex justify-content-between border border-dark rounded-3"
             data-testid="feedbackForm-parent-container">
            <div className="m-2">
                <FeedbackForm handleSubmitBtn={handleSubmitBtn}/>
            </div>
            <div className="m-2" style={{minWidth:"310px"}}>
                <FeedBackOverview feedBacks={feedBacks}/>
            </div>

        </div>
    )
}