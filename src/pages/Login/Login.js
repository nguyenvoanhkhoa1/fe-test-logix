import { Banner, BorderLine, Input, RightArrow } from "../../components";
import React from "react";
import routeUrls from "../../configs/route";
import { COLOR_PALETTE } from "../../configs/constants";
import { useAppStore } from "../../stores";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [appStore, updateAppStore] = useAppStore();
  const handleLogin = () => {
    updateAppStore((draft) => {
      draft.isAuthenticated = true;
    });
    navigate(`/${routeUrls.homePage.path}`);
  };
  return (
    <>
      <Banner imgUrl="images/banners/login.png">
        <div className="flex flex-col text-white w-[430px]">
          <div>
            <h1 className="max-w-[331px]">Do MORE Get MORE</h1>
            <BorderLine className="mt-5" color={COLOR_PALETTE.borderLine} />
          </div>
          <div className="mt-16">
            <label className="font-normal text-xl">Email</label>
            <Input
              className="mt-2 border-white bg-transparent"
              placeholder=""
            />
          </div>
          <div className="mt-5">
            <label className="font-normal text-xl">Password</label>
            <Input
              className="mt-2 border-white bg-transparent"
              placeholder=""
            />
          </div>
          <button
            className="mt-[50px] max-w-[430px] w-full sm:w-[180px] h-[60px] bg-border_line flex justify-center items-center gap-1 button-text"
            onClick={handleLogin}
          >
            Log in
            <RightArrow color="white" />
          </button>
          <a
            className="mt-12 button-text text-border_line flex gap-1 items-center text-center justify-center sm:justify-start"
            href="."
          >
            Forgot your password?
            <RightArrow color={COLOR_PALETTE.borderLine} />
          </a>
          <a
            className="mt-4 sm:mt-1 button-text text-border_line flex gap-1 items-center justify-center sm:justify-start"
            href={`/${routeUrls.register.path}`}
          >
            Register
            <RightArrow color={COLOR_PALETTE.borderLine} />
          </a>
        </div>
      </Banner>
    </>
  );
};

export default Login;
