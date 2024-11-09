
// "use client";
// import { ThunderAnimation } from "@/components/elements/ReusableElements/FireReusalbe";
// import React from "react";
// import Slider from "react-slick";
// import { useAppSelector } from "@/redux/hooks";
// import Link from "next/link";
// import { CardOfproduct } from "@/components/elements/index";
// import { useArrowControl } from "@/components/hooks";
// import { LightningDealsProps } from "@/types";

// export const LightningDeals: React.FC<LightningDealsProps> = ({ dealsData }) => {
//   const fatherDesktop = " md:mt-10 lg:mt-0 md:h-auto md:max:h-96";
//   const isMobile = useAppSelector((state) => state.device.isMobile);
//   const items = isMobile ? 2 : 4;

//   const { settings, handleLinkClick } = useArrowControl({
//     totalSlides: dealsData.length,
//     itemsToShow: items,
//   });

//   return (
//     <div
//       className={`w-screen  ${fatherDesktop} flex justify-center items-center `}
//     >
//       <div className="slider-container bg-white h-auto lg:w-[75%] md:w-[80%] w-[90%] rounded-3xl shadow-2xl relative 2xl:pl-4 xl:pl-0 p-4 md:px-10 flex flex-col ">
//         <div className="left-0 top-0 md:w-2/3 w-full flex justify-start items-center md:px-6 px-3">
//           <h2 className="md:text-lg font-bold">Ofertas relámpago</h2>
//           <ThunderAnimation className="top-0 relative md:top-0 w-5 md:w-7 h-5 md:h-7 mx-2" />
//         </div>
//         <Slider {...settings} className="w-full">
//           {dealsData.map((item) => (
//             <div
//               key={item.ID}
//               className="rounded-3xl relative xl:p-32 p-14 xl:h-96 h-48"
//             >
//               <Link href={`/product/${item.ID}`} onClick={handleLinkClick}>
//                 <CardOfproduct
//                   image={item.image}
//                   name={item.name}
//                   price={item.price}
//                   description={item.description}
//                   percent={item.percent}
//                 />
//               </Link>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };
"use client";
import { ThunderAnimation } from "@/components/elements/ReusableElements/FireReusalbe";
import React from "react";
import Slider from "react-slick";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { CardOfproduct } from "@/components/elements/index";
import { useArrowControl } from "@/components/hooks";
import { LightningDealsProps } from "@/types";

interface LightningDealsComponentProps extends LightningDealsProps {
  showAnimation: boolean;
  title: string;
}

export const LightningDeals: React.FC<LightningDealsComponentProps> = ({
  dealsData,
  showAnimation,
  title,
}) => {
  const fatherDesktop = " md:mt-10 lg:mt-0 md:h-auto md:max:h-96";
  const isMobile = useAppSelector((state) => state.device.isMobile);
  const items = isMobile ? 2 : 4;

  const { settings, handleLinkClick } = useArrowControl({
    totalSlides: dealsData.length,
    itemsToShow: items,
  });

  return (
    <div
      className={`w-screen ${fatherDesktop} flex justify-center items-center`}
    >
      <div className="slider-container bg-white h-auto lg:w-[75%] md:w-[80%] w-[90%] rounded-3xl shadow-2xl relative 2xl:pl-4 xl:pl-0 p-4 md:px-10 flex flex-col">
        <div className="left-0 top-0 md:w-2/3 w-full flex justify-start items-center md:px-6 px-3">
          <h2 className="md:text-lg font-bold">{title}</h2>
          {showAnimation && (
            <ThunderAnimation className="top-0 relative md:top-0 w-5 md:w-7 h-5 md:h-7 mx-2" />
          )}
        </div>
        <Slider {...settings} className="w-full">
          {dealsData.map((item) => (
            <div
              key={item.ID}
              className="rounded-3xl relative xl:p-32 p-14 xl:h-96 h-48"
            >
              <Link href={`/product/${item.ID}`} onClick={handleLinkClick}>
                <CardOfproduct
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  percent={item.percent}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// // "use client";
// // import { ThunderAnimation } from "@/components/elements/ReusableElements/FireReusalbe";
// // import React from "react";
// // import Slider from "react-slick";
// // import data from "./../../../../public/LightningDeals/LightningDeals.json";
// // import { useAppSelector } from "@/redux/hooks";
// // import Link from "next/link";
// // import { CardOfproduct } from "@/components/elements/index";
// // import { useArrowControl } from "@/components/hooks";

// // export const LightningDeals = () => {
// //   const fatherDesktop = " md:mt-10 lg:mt-0 md:h-auto md:max:h-96";
// //   const isMobile = useAppSelector((state) => state.device.isMobile);
// //   const items = isMobile ? 2 : 4;

// //   const { settings, handleLinkClick } = useArrowControl({
// //     totalSlides: data.length,
// //     itemsToShow: items,
// //   });

// //   return (
// //     <div
// //       className={`w-screen  ${fatherDesktop} flex justify-center items-center `}
// //     >
// //       <div className="slider-container bg-white h-auto lg:w-[75%] md:w-[80%] w-[90%] rounded-3xl shadow-2xl relative 2xl:pl-4 xl:pl-0 p-4 md:px-10 flex flex-col ">
// //         <div className=" left-0 top-0 md:w-2/3 w-full flex justify-start items-center md:px-6 px-3 ">
// //           <h2 className="md:text-lg  font-bold ">Ofertas relámpago</h2>
// //           <ThunderAnimation className="top-0 relative md:top-0 w-5 md:w-7 h-5 md:h-7 mx-2" />
// //         </div>
// //         <Slider {...settings} className="w-full">
// //           {data.map((item) => {
// //             return (
// //               <div
// //                 key={item.ID}
// //                 className={`rounded-3xl relative xl:p-32  p-14 xl:h-96 h-48`}
// //               >
// //                 <Link href={"/product/1"} onClick={handleLinkClick}>
// //                   <CardOfproduct
// //                     image={item.image}
// //                     name={item.name}
// //                     price={item.price}
// //                     description={item.description}
// //                     percent={item.percent}
// //                   />
// //                 </Link>
// //               </div>
// //             );
// //           })}
// //         </Slider>
// //       </div>
// //     </div>
// //   );
// // };
