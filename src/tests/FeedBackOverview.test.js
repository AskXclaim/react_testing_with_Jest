import {render, screen} from "@testing-library/react";
import {FeedBackOverview} from "../components/FeedBackOverview";

describe("Feedback overview tests", () => {
    it("Feedback no found scenario", () => {

        render(<FeedBackOverview feedBacks={[]}/>);
        const noFeedBack = screen.getByText("No feedback(s) available", {exact: false});
        expect(noFeedBack).toBeInTheDocument();
    });

    it("Feedback found scenario", () => {
        const feedBacks = [{id: 1, text: "Too hot"}, {id: 2, text: "Too Spicy"}];
        render(<FeedBackOverview feedBacks={feedBacks}/>);

        const noFeedBack = screen.queryByText("No feedback(s) available", {exact: false});
        expect(noFeedBack).not.toBeInTheDocument();

        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(feedBacks.length);
        const listItem1 = screen.getByText("Too hot");
        expect(listItem1).toBeInTheDocument();
        const listItem2 = screen.getByText("Too Spicy");
        expect(listItem2).toBeInTheDocument();
    });
})