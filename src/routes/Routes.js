import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { BrandLoading } from "../components";
import routeUrls from "../configs/route";
import Main from "../layouts/Main";
import { EnrolNowView, HomepageView, WelcomeView } from "./views";

const ProtectedRoute = ({
  user,
  redirectPath = routeUrls.welcome.path,
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<BrandLoading />}>
        <Main>
          <Routes>
            <Route index element={<WelcomeView />} />

            <Route path={routeUrls.welcome.path} element={<WelcomeView />} />
            <Route path={routeUrls.enrolNow.path} element={<EnrolNowView />} />

            <Route path={routeUrls.homePage.path} element={<HomepageView />} />

            <Route
              path="*"
              element={<Navigate to={routeUrls.welcome.path} replace />}
            />
          </Routes>
        </Main>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;