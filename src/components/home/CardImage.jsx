import React from "react";

const CardImage = () => {
  return (
    <div className="-mt-14 mx-auto absolute flex w-full items-center justify-center z-40">
      <div className="w-full">
        <div className="flex mx-auto max-w-6xl">
          <div className="basis-1/4 border-l border-[#f3f4f6]">
            <div className="flex justify-center items-center my-5">
              <img
                src="https://imgur.com/ibmKL3F.png"
                className="h-8 hover:opacity-30 duration-500 hover:duration-500"
              />
            </div>
            <div className="flex justify-center items-center my-5">
              <img
                src="https://imgur.com/cMYs1cN.png"
                className="h-8 mt-14 hover:opacity-30 duration-500 hover:duration-500"
              />
            </div>
          </div>
          <div className="basis-1/4 border-x border-[#f3f4f6]">
            <div className="flex justify-center items-center my-5">
              <img
                src="https://imgur.com/O8uov38.png"
                className="h-8 hover:opacity-30 duration-500 hover:duration-500"
              />
            </div>
            <div className="flex justify-center items-center my-5">
              <img
                src="https://imgur.com/YbgSFJ9.png"
                className="h-8 mt-14 hover:opacity-30 duration-500 hover:duration-500"
              />
            </div>
          </div>
          <div className="basis-1/4 border-r border-[#f3f4f6]">
            <div className="flex justify-center items-center my-5">
              <img
                src="https://imgur.com/FDeQNAq.png"
                className="h-8 hover:opacity-30 duration-500 hover:duration-500"
              />
            </div>
            <div className="flex justify-center items-center my-5">
              <img
                src="https://imgur.com/cMYs1cN.png"
                className="h-8 mt-14 hover:opacity-30 duration-500 hover:duration-500"
              />
            </div>
          </div>
          <div className="basis-1/4 border-r border-[#f3f4f6]">
            <div className="flex justify-center items-center my-5">
              <img
                src="https://imgur.com/O8uov38.png"
                className="h-8 hover:opacity-30 duration-500 hover:duration-500"
              />
            </div>
            <div className="flex justify-center items-center my-5">
              <img
                src="https://imgur.com/YbgSFJ9.png"
                className="h-8 mt-14 hover:opacity-30 duration-500 hover:duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
