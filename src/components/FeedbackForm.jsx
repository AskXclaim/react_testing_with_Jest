export const FeedbackForm = () => {
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
                         cols="30" rows="10" maxLength="100"></textarea>
                </div>
                <div className="form-check">
                    <input className="form-check-input" style={cursorStyle}
                           name="chkAgreement" id="chkAgreement" type="checkbox"/>
                    <label className="form-check-label" style={cursorStyle}
                           htmlFor="chkAgreement">I accept the Terms and Conditions</label>
                </div>
                <button className="btn btn-md btn-primary">Add feedback</button>
            </div>
        </div>
    )
}