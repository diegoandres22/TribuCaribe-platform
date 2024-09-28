"use client";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setDevice } from "../../redux/slices/DeviceSlice";

const DeviceDetector = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
      dispatch(setDevice(isMobile));
    };

    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    checkIfMobile();

    document.addEventListener("touchmove", preventZoom, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventZoom);
    };
  }, [dispatch]);

  return null;
};

export default DeviceDetector;
