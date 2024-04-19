import { useState } from "react";

export interface FaqProps {
  title: string;
  subtext: string;
}

const FaqCard = ({ title, subtext }: FaqProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  return (
    <div className="flex justify-center py-4 px-6 md:px-0 ">
      <div className="shadow-md flex flex-col gap-4  px-6 py-2 divide-y w-full md:w-1/2 rounded-md">
        <div className="justifyFlex">
          <h4 className="">{title}</h4>
          <button type="button"  onClick={handleClick}>{isClicked ? "-" : "+"}</button>
        </div>
        {isClicked && (
          <div className="py-4 font-light transition duration-300 delay-300 ease-in-out">
            <p>{subtext}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqCard;
