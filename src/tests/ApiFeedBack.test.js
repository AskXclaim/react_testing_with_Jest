import {render, screen, waitFor} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import {ApiFeedBack} from "../components/ApiFeedBack";

describe("Api FeedBack tests", () => {
    test("Initial load scenario", () => {
        render(<ApiFeedBack/>);
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

    test("Add one review scenario", async () => {
        render(<ApiFeedBack/>);

        const reviewTextArea
            = screen.getByPlaceholderText("Enter your feedback here", {exact: false});
        const agreementChkBox = screen.getByLabelText("I accept the Terms and Conditions", {exact: true});
        const submitBtn = screen.getByRole("button", {name: "Add feedback"});

        await userEvent.type(reviewTextArea, "Food is too spicy");
        await userEvent.click(agreementChkBox);
        await userEvent.click(submitBtn);
        const feedBkListItem =
            await screen.findByText("Food is too spicy", {exact: false});

        await  waitFor(()=>{
            screen.debug(feedBkListItem);
        })
       

        expect(feedBkListItem).toBeInTheDocument();
    });

    test("Add more than one review scenario", async () => {
        render(<ApiFeedBack/>);

        const reviewTextArea
            = screen.getByPlaceholderText("Enter your feedback here", {exact: false});
        const agreementChkBox = screen.getByLabelText("I accept the Terms and Conditions", {exact: true});
        const submitBtn = screen.getByRole("button", {name: "Add feedback"});

        await userEvent.type(reviewTextArea, "Food is too spicy");
        await userEvent.click(agreementChkBox);
        await userEvent.click(submitBtn);

        await userEvent.type(reviewTextArea, "Food is too mild");
        await userEvent.click(agreementChkBox);
        await userEvent.click(submitBtn);

        const feedBks = await screen.findAllByRole("listitem");

        await waitFor(()=>{
            screen.debug(feedBks);
        });

        // await waitFor(() => {
        expect(feedBks.length).toBe(2);
        // })
    });
});