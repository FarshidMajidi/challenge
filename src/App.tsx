import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home/>} />;
      </Routes>
    </Suspense>
  );
}

export default App;
