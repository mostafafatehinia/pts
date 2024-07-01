import { CardProps } from "./types";

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-[15px] px-[30px] pt-[30px] pb-[55px] mx-20 xl:mx-0 bg-white shadow-card w-full max-w-[1140px]">
      {children}
    </div>
  );
};
