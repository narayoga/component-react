import Add from "./component/add.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Show from "./component/show.js";
import Edit from "./component/edit.js";
import ProductList from "./component/ThunkGet.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Show/>} />
        <Route path="/add" element={<Add/>} />
        {/* <Route path="/thunk/get" element={<ProductList/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
