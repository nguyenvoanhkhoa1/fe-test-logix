import routeUrls from "./route";

export const COLOR_PALETTE = {
  main: "#002F6C",
  smallCard: "#FF7F00",
  button: "#002F6C",
  borderLine: "#41B6E6",
  subtitleText: "#212529",
  logo: "#E45858",
  subheader: "#2E3B45",
};
export const REWARD_CARDS = {
  salesEnablement: {
    href: `/${routeUrls.salesEnablement.path}`,
    title: "Sales Enablement",
    reward: "$25",
    color: COLOR_PALETTE.logo,
  },
  accountMapping: {
    href: `/${routeUrls.accountMapping.path}`,
    title: "Account Mapping",
    reward: "$100",
    color: "#895737",
  },
  appointmentSetting: {
    href: `/${routeUrls.appointmentSetting.path}`,
    title: "APPOINTMENT SETTING",
    reward: "$250",
    color: "#01A982",
  },
  completeADemo: {
    href: `/${routeUrls.completeADemo.path}`,
    title: "Complete a Demo",
    reward: "$250",
    color: "#4A4E69",
  },
  dealRegistration: {
    href: `/${routeUrls.dealRegistration.path}`,
    title: "Register a Deal",
    reward: "$500",
    color: "#00739D",
  },
  closeADeal: {
    href: `/${routeUrls.closeADeal.path}`,
    title: "Close a Deal",
    reward: "Up to $2000",
    color: "#EE9B00",
  },
  closedSale: {
    href: `/${routeUrls.closedSale.path}`,
    title: "obtain a new logo",
    reward: "Up to $5000",
    color: COLOR_PALETTE.main,
  },
};
export const TARGETED_ACCOUNTS_OPTIONS = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];
