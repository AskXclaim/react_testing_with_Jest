import {render, screen} from "@testing-library/react";
import {UserEvent} from "@testing-library/user-event";
import {FeedBack} from "../components/FeedBack";

describe("FeedBack tests", () => {
    test("Initial load scenario", () => {
        render(<FeedBack/>);
        const feedBkFormHeader = screen.getByText("Feed back Form", {exact: false});
        const reviewTextArea
            = screen.getByPlaceholderText("Enter your feedback here", {exact: false});
        const agreementChkBox = screen.getByLabelText("I accept the Terms and Conditions", {exact: true});
        const submitBtn = screen.getByRole("button", {name: "Add feedback"});

        expect(feedBkFormHeader).toBeInTheDocument();
        expect(reviewTextArea).toBeInTheDocument();
        expect(agreementChkBox).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();

        const feedBkReviewHeader = screen.getByText("Feed back review", {exact: false});
        const feedBkReviewNoReviewMsg = screen.getByText("No feedback(s) available", {exact: false});
        const feedBks = screen.queryAllByRole("listitem");
        expect(feedBkReviewHeader).toBeInTheDocument();
        expect(feedBkReviewNoReviewMsg).toBeInTheDocument();
        expect(feedBks.length).toBe(0);
    });
});