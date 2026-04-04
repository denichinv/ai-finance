import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Goals from "./pages/Goals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="add" element={<AddTransaction />} />
          <Route path="goals" element={<Goals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
