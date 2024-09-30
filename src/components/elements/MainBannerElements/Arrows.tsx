import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-md cursor-pointer hover:bg-gray-100 transition-all"
      style={{
        position: "absolute",
        right: "30px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <FaChevronRight className="text-secondary text-xl" />
    </div>
  );
};

export const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-md cursor-pointer hover:bg-gray-100 transition-all z-10 "
      style={{
        position: "absolute",
        left: "30px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-secondary text-xl" />
    </div>
  );
};
