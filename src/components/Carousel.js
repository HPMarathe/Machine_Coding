import { useState } from "react";

const Data = [
  "https://images3.alphacoders.com/133/1332803.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1hfv2kvPeuMGxMEsLyVzbd89RjI35VKqyA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuViN7efAwB5dbdgcONdw73Omzm1fDYqFK9g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUKgYPwcwKrRoMoYr0yeG4o63P4_8L9iRtXzy-q75_tUmm2Fd8m5X3fV6TacQYYUlT0w&usqp=CAU",
];

const Carousel = () => {
  const [curruetImgIndex, setCurruetImgIndex] = useState(0);

  return (
    <div className="flex justify-center items-center min-h ">
      <button
        className="w-fit p-2 m-2 bg-gray-200"
        onClick={() => {
          if (curruetImgIndex === 0) {
            setCurruetImgIndex(Data.length - 1);
          } else {
            setCurruetImgIndex(curruetImgIndex - 1);
          }
        }}
      >
        Prev
      </button>
      <img src={Data[curruetImgIndex]} className="w-1/2 bg-slate-500" alt="" />
      <button
        className="w-fit p-2 m-2 bg-gray-200"
        onClick={() => {
          if (curruetImgIndex === Data.length - 1) {
            setCurruetImgIndex(0);
          } else {
            setCurruetImgIndex(curruetImgIndex + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
