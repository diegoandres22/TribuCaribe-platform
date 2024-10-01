"use client";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setDevice } from "../../redux/slices/DeviceSlice";

const DeviceDetector = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobile =
        /iPhone|iPad|iPod|Android/i.test(userAgent) || window.innerWidth <= 720;
      dispatch(setDevice(isMobile));
    };

    const handleResize = () => {
      if (window.innerWidth <= 720) {
        dispatch(setDevice(true));
      } else {
        checkIfMobile();
      }
    };

    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    checkIfMobile();
    window.addEventListener("resize", handleResize);
    document.addEventListener("touchmove", preventZoom, { passive: false });

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("touchmove", preventZoom);
    };
  }, [dispatch]);

  return null;
};

export default DeviceDetector;
