"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { MainBannerMobile } from "@/components/elements";
import { MainBannerDesktop } from "@/components/elements/MainBannerElements/MainBannerDesktop";

export const MainBanner = () => {
  const isMobile = useAppSelector((state) => state.device.isMobile);

  return <div>{isMobile ? <MainBannerMobile /> : <MainBannerDesktop />}</div>;
};

export default MainBanner;
