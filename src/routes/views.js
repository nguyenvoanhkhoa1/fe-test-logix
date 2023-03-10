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

export const SalesEnablementView = lazy(() =>
  import("../pages/SalesEnablement")
);
export const AccountMappingView = lazy(() => import("../pages/AccountMapping"));
export const AppointmentSettingView = lazy(() =>
  import("../pages/AppointmentSetting")
);
export const CompleteADemoView = lazy(() => import("../pages/CompleteADemo"));
export const DealRegistrationView = lazy(() =>
  import("../pages/DealRegistration")
);
export const CloseADealView = lazy(() => import("../pages/CloseADeal"));
export const ClosedSaleView = lazy(() => import("../pages/ClosedSale"));
