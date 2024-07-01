"use client";
import { useState } from "react";

import { Button, Input, Switch, Tab, Tabs, cn } from "@nextui-org/react";

import { CHARGES } from "@/constants/globals";

import { ChargeFormProps } from "./types";

export const ChargeForm = ({
  charge,
  email,
  isAmazingBonus,
  phoneNumber,
  simType,
  setCharge,
  setEmail,
  setIsAmazingBonus,
  setPhoneNumber,
  setSimType,
}: ChargeFormProps) => {
  const [isEtcCharge, setIsEtcCharge] = useState(false);

  const handleChargeClick = (id: number, value?: string) => {
    if (id !== 6) {
      setCharge(value);
      setIsEtcCharge(false);
    } else {
      setCharge(undefined);
      setIsEtcCharge(true);
    }
  };

  return (
    <div className="flex flex-col items-center col-span-12 xl:col-span-7 mx-[90px]">
      <div className="text-[18px] font-bold mb-[35px]">
        خرید آنلاین شارژ ایرانسل
      </div>
      <div className="text-[14px] font-bold mb-[10px] text-gray-100">
        نوع سیم‌کارت
      </div>
      <Tabs
        classNames={{
          cursor: "bg-primary",
          tabList:
            "bg-white border border-[#e6e6e8] text-[14px] font-bold !text-gray",
          tab: "text-gray w-[100px] h-[35px]",
        }}
        radius="full"
        size="lg"
        selectedKey={simType}
        onSelectionChange={(value) => setSimType(value as string)}
      >
        <Tab key="persist" title="دائمی" />
        <Tab key="temporary" title="اعتباری" />
      </Tabs>
      <div className=" mt-[25px] mb-[45px]">
        <Switch
          isSelected={isAmazingBonus}
          onValueChange={setIsAmazingBonus}
          classNames={{
            label: "text-[14px] text-gray-200",
            wrapper: cn("group-data-[selected=true]:bg-[#008800]"),
          }}
        >
          شارژ شگفت انگیز
        </Switch>
      </div>
      <Input
        size="lg"
        classNames={{
          inputWrapper: "rounded-[30px] border border-[#dddddd]",
        }}
        type="text"
        label="شماره تلفن همراه"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="text-[14px] self-start mt-[30px]">مبلغ شارژ</div>
      <div className="grid grid-cols-3 mb-[35px] gap-[10px] w-full">
        {CHARGES.map(({ value, id, name }) => (
          <Button
            key={id}
            className={`${(!isEtcCharge && charge === value) || (isEtcCharge && id === 6) ? "bg-primary" : ""} mt-[20px] text-[18px] font-bold h-[44px]`}
            radius="full"
            onClick={() => handleChargeClick(id, value)}
          >
            {name + " "}ریال
          </Button>
        ))}
      </div>
      <div className="my-[20px] w-full">
        {isEtcCharge && (
          <div className="w-full">
            <Input
              size="lg"
              classNames={{
                inputWrapper: "rounded-[30px] border border-[#dddddd]",
              }}
              type="text"
              label="مبلغ مورد نظر خود را وارد نمایید"
              value={charge}
              onChange={(e) => setCharge(e.target.value)}
            />
            <div className="mt-[20px] text-center">
              حداقل ۱۰,۰۰۰ و حداکثر ۹۰۰,۰۰۰ ریال
            </div>
          </div>
        )}
      </div>
      <Input
        size="lg"
        fullWidth
        classNames={{
          inputWrapper: "rounded-[30px] border border-[#dddddd]",
        }}
        type="email"
        label="ایمیل (اختیاری)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        fullWidth
        className="bg-primary mt-[20px] text-[18px] font-bold h-[44px]"
        radius="full"
      >
        انتخاب بانک و پرداخت
      </Button>
    </div>
  );
};
