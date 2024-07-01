import { Dispatch, SetStateAction } from "react";

export interface ChargeFormProps {
  simType: string;
  charge?: string;
  phoneNumber: string;
  email: string;
  isAmazingBonus: boolean;
  setIsAmazingBonus: Dispatch<SetStateAction<boolean>>;
  setSimType: Dispatch<SetStateAction<string>>;
  setCharge: Dispatch<SetStateAction<string | undefined>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
}
