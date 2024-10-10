import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/page/Home";
import ProductDetail from "../src/page/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
