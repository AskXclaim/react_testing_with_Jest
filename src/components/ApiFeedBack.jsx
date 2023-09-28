import {FeedbackForm} from "./FeedbackForm";
import {FeedBackOverview} from "./FeedBackOverview";
import {useDebugValue, useState} from "react";

export const ApiFeedBack = () => {
    const [feedBacks, setFeedBacks] = useState([]);
    const handleSubmitBtn = async (text) => {
        if (text?.trim().length === 0) {
            //log error
            alert("Please supply a review to leave");
            return;
        }

        const lastId = feedBacks.length === 0 ? 0 : feedBacks[feedBacks.length - 1].id;

        const response = await fetch("http://api.backend.server/savefeedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: lastId + 1, text: text.trim()})
        });

        const newSavedFeedBack = await response.json();

        setFeedBacks((prev)=>[...prev, newSavedFeedBack]);

    };
    return (
        <div className="d-flex justify-content-between border border-dark rounded-3"
             data-testid="feedbackForm-parent-container">
            <div className="m-2">
                <FeedbackForm handleSubmitBtn={handleSubmitBtn}/>
            </div>
            <div className="m-2" style={{minWidth: "310px"}}>
                <FeedBackOverview feedBacks={feedBacks}/>
            </div>

        </div>
    )
}