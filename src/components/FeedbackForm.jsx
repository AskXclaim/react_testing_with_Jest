import {useEffect, useState} from "react";

export const FeedbackForm = () => {
    const [chkBoxState, setChkBoxState] = useState(false);
    const [btnAddFeedBackState, setBtnAddFeedBackIsDisabledState] = useState(true);
    const [textAreaState, setTextAreaState] = useState("");
    
    useEffect(() => {
        if (chkBoxState && textAreaState?.trim())
            setBtnAddFeedBackIsDisabledState(false);
        else 
            setBtnAddFeedBackIsDisabledState(true);

    }, [chkBoxState, textAreaState]);

    const cursorStyle = {
        cursor: "pointer"
    };
    return (
        <div className="d-flex justify-content-center border border-dark rounded-3 p-2"
             data-testid="feedbackForm-parent-container">
            <div>
                <div className="d-flex justify-content-center">
                    <h2 className="fw-bold ">Feed back Form</h2>
                </div>
                <div>
               <textarea className="form-control" name="txtFeedBack" id="txtFeedBack"
                         cols="30" rows="10" maxLength="100" placeholder="Enter your feedback here" value={textAreaState}
                         onChange={(event) => setTextAreaState(event.target.value)}></textarea>
                </div>
                <div className="form-check">
                    <input className="form-check-input" style={cursorStyle}
                           name="chkAgreement" id="chkAgreement" type="checkbox"
                           onChange={() => setChkBoxState(!chkBoxState)}
                           checked={chkBoxState}
                    />
                    <label className="form-check-label" style={cursorStyle}
                           htmlFor="chkAgreement">I accept the Terms and Conditions</label>
                </div>
                <button className="btn btn-md btn-primary" disabled={btnAddFeedBackState}>Add feedback</button>
            </div>
        </div>
    )
}