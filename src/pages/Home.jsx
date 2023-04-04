import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import DOT from "../assets/pic/dotted.png";
import Mainlayout from "../layout/Mainlayout";
import { FOODS } from "./../misc/foods";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
  const [foods, setFoods] = useState(FOODS);

  const prev = () => {
    const newFoods = [];
    for (let i = 0; i < foods.length; i++) {
      if (i !== 0) {
        newFoods.push(foods[i]);
      }
    }
    newFoods.push(foods[0]);
    setFoods(newFoods);
  };

  useEffect(() => {
    console.log(foods);
  }, [foods]);

  const next = () => {
    const newFoods = [];
    for (let i = 0; i < foods.length; i++) {
      if (i === 0) {
        newFoods.push(foods[foods.length - 1]);
      } else {
        newFoods.push(foods[i - 1]);
      }
    }
    setFoods(newFoods);
  };

  return (
    <Mainlayout>
      <div className="relative flex justify-between w-full px-32">
        <div className="w-1/2">
          <AnimatePresence initial={false}>
            <motion.div
              exit={{ position: "relative" }}
              className="w-[70%] mt-[8rem]"
            >
              <motion.h1
                initial={{ opacity: 1, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.1 }}
                transition={{ type: "tween", duration: 0.7, ease: "easeIn" }}
                style={{ color: foods[Math.floor(foods.length / 2)].color }}
                className="text-[44px] leading-[66px] font-semibold"
              >
                {foods[Math.floor(foods.length / 2)].price}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.1 }}
                transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
                className="text-[36px] leading-[50px] font-medium"
              >
                {foods[Math.floor(foods.length / 2)].header}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.1 }}
                transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
                className="w-[85%] capitalize text-[13px] leading-5 font-normal"
              >
                {foods[Math.floor(foods.length / 2)].words}
              </motion.p>
              <div className="mt-5">
                {foods[Math.floor(foods.length / 2)].btn}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative w-1/2">
          <div className=" w-full absolute mt-20 mr-[5rem]">
            <img className="w-full h-[16rem]" src={DOT} alt="" />
          </div>
          <div className="relative flex justify-between w-full">
            {foods.map((food, index) => (
              <p
                className={`absolute ${
                  Math.floor(foods.length / 2) === index && " "
                } ${index === 0 && "top-[15rem] left-[-2rem] "} ${
                  index === 1 && "left-[3rem] top-[6rem] "
                } ${index === 2 && "left-[12rem] top-[3rem] "} ${
                  index === 3 && "left-[23rem] top-[6rem] "
                } ${
                  index === 4 && "right-[-2rem] flex justify-end top-[15rem] "
                }`}
                key={food?.id}
              >
                {/* {food.image} */}
                <img className="h-[5rem]" src={food.image} alt={""} />
              </p>
            ))}
          </div>

          <div className="w-full flex mt-[15rem] justify-center">
            <img
              className="h-[14rem]"
              src={foods[Math.floor(foods.length / 2)].image}
              alt=""
            />
          </div>

          <div className="flex justify-between w-full">
            <button onClick={prev}>
              <BsArrowDownCircleFill
                size={35}
                color={foods[Math.floor(foods.length / 2)].color}
              />
            </button>
            <button onClick={next}>
              <BsArrowDownCircleFill
                size={35}
                color={foods[Math.floor(foods.length / 2)].color}
              />
            </button>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;
