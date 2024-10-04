import Lottie from "react-lottie";
// ---------------------------------
import animationData from "./../../../../public/Animations/original.json";
import animationDataThunder from "./../../../../public/Animations/yGJc20xwcW.json";
import animationDataDeals from "../../../../public/Animations/Deals.json";

//cambiar a morado ./../../../../public/Animations/purple.json
//cambiar a fucsia ./../../../../public\Animations\Animation - 1727540016971.json
// ---------------------------------

interface StyleScreenProps {
  className?: string;
}

export const FireAnimation: React.FC<StyleScreenProps> = ({ className }) => {
  const WAndH = "100%";

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

export const ThunderAnimation: React.FC<StyleScreenProps> = ({ className }) => {
  const WAndH = "100%";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataThunder,
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

export const DealsAnimation: React.FC<StyleScreenProps> = ({ className }) => {
  const WAndH = "100%";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataDeals,
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
