import React, { useState } from "react";
import { useEffect } from "react";
import Mainlayout from "../layout/Mainlayout";
import { FOODS } from "./../misc/foods";

function Home() {
  const [foods, setFoods] = useState(FOODS);

  const prev = () => {
    const newFoods = [];
    for (let i = 0; i < foods.length; i++) {
      if (i !== 0) {
        newFoods.push(foods[i])
      }
    }
    newFoods.push(foods[0])
    setFoods(newFoods);
  };

  useEffect(() => {
    console.log(foods);
  }, [foods])

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
        <div className="w-1/2">p</div>
        <div className="w-1/2">
          <div className="relative flex justify-between w-full">
            {foods.map((food, index) => (
              <p
                className={`absolute ${
                  Math.floor(foods.length / 2) === index && "font-medium "
                } ${index === 0 && "top-[40px] "} ${
                  index === 1 && "left-[40px] top-[20px] "
                } ${index === 2 && "left-[80px] top-[0px] "} ${
                  index === 3 && "left-[120px] top-[20px] "
                } ${index === 4 && "left-[160px] top-[40px] "}`}
                key={food?.id}
              >
                {/* {food.image} */}
                <img src={food.image} alt={""} />
              </p>
            ))}
          </div>

          <div className="w-full mt-16 text-xl font-bold text-center">
            <img src={foods[Math.floor(foods.length / 2)].image} alt="" />
          </div>

          <div className="flex justify-between w-full mt-16">
            <button
              className="bg-[#555555] px-2 py-0 text-sm rounded-sm"
              onClick={prev}
            >
              Prev
            </button>
            <button
              className="bg-[#555555] px-2 py-0 text-sm rounded-sm"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;
