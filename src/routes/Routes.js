import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrandLoading } from "../components";
import { EnrolNowView, WelcomeView } from "./views";

const Navigation = () => (
  <nav>
    <Link to="/welcome">Welcome</Link>
    <Link to="/enrol-now">Enrol Now</Link>
  </nav>
);

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<BrandLoading />}>
        <Navigation />

        <Routes>
          <Route index element={<WelcomeView />} />
          <Route path="welcome" element={<WelcomeView />} />
          <Route path="enrol-now" element={<EnrolNowView />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
