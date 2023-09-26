import {useEffect, useState} from "react";

export const FeedbackForm = (props) => {
    const [isChkBoxChecked, setIsChkBoxChecked] = useState(false);
    const [isBtnAddFeedBackEnabled, setIsBtnAddFeedBackEnabled] = useState(true);
    const [textAreaText, setTextAreaText] = useState("");


    const handleSubmitBtn = () => {
        props.handleSubmitBtn(textAreaText?.trim());
        setTextAreaText("");
        setIsChkBoxChecked(false);
    }

    useEffect(() => {
        if (isChkBoxChecked && textAreaText?.trim())
            setIsBtnAddFeedBackEnabled(false);
        else
            setIsBtnAddFeedBackEnabled(true);

    }, [isChkBoxChecked, textAreaText]);

    const cursorStyle = {
        cursor: "pointer"
    };
    return (
        <div className="border border-dark rounded-3 p-2" data-testid="feedbackForm-parent-container">
            <div className="d-flex justify-content-center">
                <h2 className="fw-bold ">Feed back Form</h2>
            </div>
            <div>
               <textarea className="form-control" name="txtFeedBack" id="txtFeedBack"
                         cols="30" rows="10" maxLength="100" placeholder="Enter your feedback here" value={textAreaText}
                         onChange={(event) => setTextAreaText(event.target.value)}></textarea>
            </div>
            <div className="form-check">
                <input className="form-check-input" style={cursorStyle}
                       name="chkAgreement" id="chkAgreement" type="checkbox"
                       onChange={() => setIsChkBoxChecked(!isChkBoxChecked)}
                       checked={isChkBoxChecked}
                />
                <label className="form-check-label" style={cursorStyle}
                       htmlFor="chkAgreement">I accept the Terms and Conditions</label>
            </div>
            <button className="btn btn-md btn-primary" disabled={isBtnAddFeedBackEnabled}
                    onClick={handleSubmitBtn}>Add feedback
            </button>
        </div>
    )
}