import { StrictMode } from "react";
import SearchParams from "./SearchParam";
import Details from "./Details"
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThemsContext from "./ThemsContext";
const App = () => {
    const theme = useState("#f1de");
    return (
        <ThemsContext.Provider value={theme}>
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
        </ThemsContext.Provider>
    )
}

export default App;