import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schools from "./pages/Schools";
import SchoolDetails from "./pages/SchoolDetails";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/school/:id" element={<SchoolDetails />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
