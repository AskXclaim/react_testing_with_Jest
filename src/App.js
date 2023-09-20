import './App.css';

function App() {
    return (
        <div className="d-flex justify-content-center" data-testid={"app-parent-container"}>
            <div>
                <h1>Lets Tests!</h1>
                <input type="text" placeholder={"Enter some texts"}/>
                <button>Click me!</button>
                <ul>
                    <li>Google Pixel -7</li>
                    <li>Iphone -15</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
