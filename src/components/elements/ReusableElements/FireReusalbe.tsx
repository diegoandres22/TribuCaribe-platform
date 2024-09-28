import Lottie from "react-lottie";
// ---------------------------------
import animationData from "./../../../../public/Animations/original.json";
//cambiar a morado ./../../../../public/Animations/purple.json
//cambiar a fucsia ./../../../../public\Animations\Animation - 1727540016971.json
// ---------------------------------
import { useAppSelector } from "@/redux/hooks";

interface StyleScreenProps {
  className?: string;
}

export const FireAnimation: React.FC<StyleScreenProps> = ({ className }) => {
  const isMobile = useAppSelector((state) => state.device.isMobile);
  const WAndH = isMobile ? 30 : 50;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Lottie options={defaultOptions} height={WAndH} width={WAndH} />
    </div>
  );
};
