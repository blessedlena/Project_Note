
import { Routes,Route } from "react-router-dom";
import { toast } from "react-hot-toast";

import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";

const App = () => {
  return (
    <div>
      <button onClick={() => toast.success("congrats!")} className="text-red-500 p-4 bg-pink-300">Click Me!</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App
