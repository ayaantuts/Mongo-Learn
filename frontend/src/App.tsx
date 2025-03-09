import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products/Products";
import CreateProducts from "../pages/CreateProducts/CreateProducts";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/create" element={<CreateProducts />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;