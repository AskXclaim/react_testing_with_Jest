import {render, screen,logRoles} from '@testing-library/react';
import App from './App';

//*.test.js OR *.spec.js OR *.js(__tests__) Folder
//it("is click me! button present",()=>{});

test.skip("is 'Click me!' button present", () => {
    render(<App/>);
    logRoles(screen.getByTestId("app-parent-container"))
    //getBy OR getQuery OR findBy
    const clickMeBtn = screen.getByRole("button", {name: "Click me!", exact: false});

    expect(clickMeBtn).toBeInTheDocument();
});

