import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import { BrandLoading } from "../components";
import routeUrls from "../configs/route";
import ScrollToTop from "../helpers/ScrollToTop";
import Main from "../layouts/Main";
import { useAppStore } from "../stores";
import {
  AccountMappingView,
  ClosedSaleView,
  EnrolNowView,
  HomepageView,
  LoginView,
  PrivacyPolicyView,
  SalesEnablementView,
  TermsAndConditionsView,
  WelcomeView,
} from "./views";

const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = routeUrls.welcome.path,
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const AppRoutes = () => {
  const [appStore, updateAppStore] = useAppStore();
  return (
    <Router>
      <Suspense fallback={<BrandLoading />}>
        <Main>
          {}
          <ScrollToTop />
          <Routes>
            <Route
              index
              element={
                !appStore.isAuthenticated ? <WelcomeView /> : <HomepageView />
              }
            />

            <Route
              path={routeUrls.privacyPolicy.path}
              element={<PrivacyPolicyView />}
            />
            <Route
              path={routeUrls.termsAndConditions.path}
              element={<TermsAndConditionsView />}
            />

            <Route path={routeUrls.welcome.path} element={<WelcomeView />} />
            <Route path={routeUrls.enrolNow.path} element={<EnrolNowView />} />
            <Route path={routeUrls.login.path} element={<LoginView />} />

            <Route
              element={
                <ProtectedRoute isAuthenticated={appStore.isAuthenticated} />
              }
            >
              <Route
                path={routeUrls.homePage.path}
                element={<HomepageView />}
              />
              <Route
                path={routeUrls.salesEnablement.path}
                element={<SalesEnablementView />}
              />
              <Route
                path={routeUrls.accountMapping.path}
                element={<AccountMappingView />}
              />
              <Route
                path={routeUrls.closedSale.path}
                element={<ClosedSaleView />}
              />
            </Route>

            <Route
              path="*"
              element={
                <Navigate
                  to={
                    !appStore.isAuthenticated
                      ? routeUrls.welcome.path
                      : routeUrls.homePage.path
                  }
                  replace
                />
              }
            />
          </Routes>
        </Main>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
