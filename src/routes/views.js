import { lazy } from "react";

export const TermsAndConditionsView = lazy(() =>
  import("../pages/Shared/TermsAndConditions")
);
export const PrivacyPolicyView = lazy(() =>
  import("../pages/Shared/PrivacyPolicy")
);

export const WelcomeView = lazy(() => import("../pages/Welcome"));
export const EnrolNowView = lazy(() => import("../pages/EnrolNow"));
export const LoginView = lazy(() => import("../pages/Login"));

export const HomepageView = lazy(() => import("../pages/Homepage"));
