import { createStore } from "./store";
// import {getLanguage} from 'helpers'
// const language = getLanguage();
export const AppStore = createStore({
  // language: language ? language : 'vi',
  isAuthenticated: false,
  user: {},
  notification: {
    isShow: false,
    type: "info",
    message: "",
  },
});

export const useAppStore = AppStore.useStore;
