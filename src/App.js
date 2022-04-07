import { Route, Routes } from "react-router-dom";

import { Header } from "views/_components/Header";
import { FlowersList } from "./views/FlowersList/FlowersList";
import { FlowerDetail } from "./views/FlowersList/_components/FlowerDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FlowersList />} />
        <Route path="/flower/:id" element={<FlowerDetail />} />
      </Routes>
    </>
  );
};

export default App;
