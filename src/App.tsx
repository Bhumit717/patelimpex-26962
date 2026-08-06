import { BrowserRouter, Routes, Route } from "react-router-dom";
import SitePage from "./pages/SitePage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<SitePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
