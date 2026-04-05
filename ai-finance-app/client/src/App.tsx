import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Goals from "./pages/Goals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="add" element={<AddTransaction />} />
          <Route path="goals" element={<Goals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
