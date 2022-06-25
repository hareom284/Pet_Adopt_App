import { StrictMode } from "react";
import SearchParams from "./SearchParam"

const App = () => {
    return (
        <StrictMode>
            <div>
                <h1>Adopt Me</h1>
                <SearchParams />
            </div>
        </StrictMode>
    )
}

export default App;