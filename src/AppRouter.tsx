// ** import React Router Dom
import { Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactPage from "./components/pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/about_us"
        element={<AboutUs />}
      />
    
      <Route
        path="/contact"
        element={<ContactPage />}
      />
    </Routes>
  );
};
export default AppRouter;
