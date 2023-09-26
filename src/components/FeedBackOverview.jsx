export const FeedBackOverview = ({feedBacks}) => {

    return (
        <div className="p-2 border border-dark">
            <div className="d-flex justify-content-center">
                <h2 className="fw-bold ">Feed back review</h2>
            </div>
            <div>
                {feedBacks?.length === 0 && (
                    <h3>No feedback(s) available</h3>
                )}
                {feedBacks?.length > 0 && (
                    <ul>
                        {
                            feedBacks.map((feedBack) => {
                                return <li key={feedBack.id}>{feedBack.text}</li>
                            })
                        }
                    </ul>
                )}
            </div>
        </div>
    );
}