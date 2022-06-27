import { StrictMode } from "react";
import SearchParams from "./SearchParam";
import Details from "./Details"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <div>
                    <header>
                        <Link to="/">
                            <h1>Adopt Me</h1>
                        </Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </StrictMode>
    )
}

export default App;