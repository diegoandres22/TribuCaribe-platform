// src/hooks/useScroll.ts
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setScrollingUpOrAtTop, setAtBottom } from "@/redux/slices/ScrollSlice";
const useScroll = () => {
  const dispatch = useDispatch();
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (windowHeight + currentScrollY >= documentHeight) {
        dispatch(setAtBottom(true));
      } else {
        dispatch(setAtBottom(false));
      }
      if (currentScrollY === 0 || currentScrollY < lastScrollY) {
        dispatch(setScrollingUpOrAtTop(true));
      } else {
        dispatch(setScrollingUpOrAtTop(false));
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, dispatch]);
};
export default useScroll;