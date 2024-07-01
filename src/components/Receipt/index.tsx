import { toPersianNumber } from "@/utils/converter";

import { ReceiptProps } from "./types";

export const Receipt = ({
  email,
  isAmazingBonus,
  phoneNumber,
  simType,
  charge,
}: ReceiptProps) => {
  return (
    <div className="col-span-12 mt-6 xl:mt-0 xl:col-span-5 bg-[#fff5cc] border border-[#ffd733] xl:border-none  xl:bg-[#f0eff5] rounded-[8px] xl:pl-[10px] pl-[35px] pr-[35px] pt-[10px] pb-[25px] mx-[10px]">
      <div className=" justify-center hidden xl:flex text-[18px] font-bold bg-white rounded-[8px] py-[15px]">
        فاکتور نهایی
      </div>
      <div className="flex justify-between items-center xl:items-start xl:justify-start xl:flex-col">
        <div className="text-[14px] font-bold text-gray-100 mt-[25px] mb-[10px]">
          نوع سیم‌کارت
        </div>
        <div className="text-[18px] font-bold">
          {simType === "persist" ? "دائمی" : "اعتباری"}
        </div>
      </div>
      <div className="flex justify-between items-center xl:items-start xl:justify-start xl:flex-col">
        <div className="text-[14px] font-bold text-gray-100 mt-[25px] mb-[10px]">
          مستقیم به شماره
        </div>
        <div className="text-[18px] font-bold">
          {phoneNumber || "----------------"}
        </div>
      </div>
      <div className="flex justify-between items-center xl:items-start xl:justify-start xl:flex-col">
        <div className="text-[14px] font-bold text-gray-100 mt-[25px] mb-[10px]">
          مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)
        </div>
        <div className="text-[18px] font-bold">
          {charge ? toPersianNumber(String(charge)) : ""} ریال
        </div>
      </div>
      <div className="flex justify-between items-center xl:items-start xl:justify-start xl:flex-col">
        <div className="text-[14px] font-bold text-gray-100 mt-[25px] mb-[10px]">
          نوع شارژ
        </div>
        <div className="text-[18px] font-bold">
          {isAmazingBonus ? "شگفت انگیز" : "معمولی"}
        </div>
      </div>
      <div className="flex justify-between items-center xl:items-start xl:justify-start xl:flex-col">
        <div className="text-[14px] font-bold text-gray-100 mt-[25px] mb-[10px]">
          ایمیل{" "}
        </div>
        <div className="text-[18px] font-bold">
          {email || "----------------"}
        </div>
      </div>
      <div className="flex justify-between items-center xl:items-start xl:justify-start xl:flex-col">
        <div className="text-[14px] font-bold text-gray-100 mt-[25px] mb-[10px]">
          نام بانک
        </div>
        <div className="text-[18px] font-bold">----------------</div>
      </div>
    </div>
  );
};
