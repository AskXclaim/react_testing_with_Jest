import {fireEvent, logRoles, render, screen} from "@testing-library/react";
import {FeedbackForm} from "../components/FeedbackForm";

describe("Feedback form tests", () => {
    test("on load condition of FeedbackForm", () => {
        render(<FeedbackForm/>);
            
        logRoles(screen.getByTestId("feedbackForm-parent-container"));
        
        const feedbackTextBox = screen.getByRole("textbox");
        expect(feedbackTextBox).toBeInTheDocument();

        const agreementCheckbox =
            screen.getByLabelText("I accept the Terms and Conditions", {exact: false});
        expect(agreementCheckbox).toBeInTheDocument();

        const btn = screen.getByRole("button",{name:"Add feedback"} );
        expect(btn).toBeInTheDocument();
        expect(btn).toBeDisabled();
    });

    test("button is only enabled if review text is supplied & checkbox is checked", () => {
        render(<FeedbackForm/>);
        const feedbackTextBox = screen.getAllByPlaceholderText("Enter your feedback here");
        const agreementCheckBox = screen.getByLabelText
        ("I accept the Terms and Conditions", {exact: false});
        const  btn = screen.getByRole("button",{name:"Add feedback"});
        
        expect(btn).toBeDisabled();
        
        fireEvent.change(feedbackTextBox, {target:{value:"Sauce is too sweet"}});
        expect(btn).toBeDisabled();
        fireEvent.click(agreementCheckBox);
        expect(btn).toBeEnabled();

        fireEvent.click(agreementCheckBox);
        expect(btn).toBeDisabled();

        fireEvent.click(agreementCheckBox);
        expect(btn).toBeEnabled();
        fireEvent.change(feedbackTextBox, {target:{value:""}});
        expect(btn).toBeDisabled();
    });
});
