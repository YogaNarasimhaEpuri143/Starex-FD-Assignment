import { useState } from "react";

interface StarIconProps {
  isFavorited: boolean;
}

const StarIcon = ({ isFavorited }: StarIconProps) => {
  const [toggled, setToggled] = useState(isFavorited || false);

  const handleClick = () => {
    setToggled(!toggled);
  };

  return (
    <svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      fill={toggled ? "yellow" : "gray"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 cursor-pointer ${toggled ? "text-yellow-500" : "text-gray-500"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.158 6.637a1 1 0 00.95.69h6.977c.969 0 1.371 1.24.588 1.81l-5.652 4.107a1 1 0 00-.364 1.118l2.158 6.637c.3.921-.755 1.688-1.54 1.118l-5.652-4.107a1 1 0 00-1.175 0l-5.652 4.107c-.785.57-1.84-.197-1.54-1.118l2.158-6.637a1 1 0 00-.364-1.118L2.8 12.064c-.783-.57-.38-1.81.588-1.81h6.977a1 1 0 00.95-.69l2.158-6.637z"
      />
    </svg>
  );
};

export default StarIcon;
