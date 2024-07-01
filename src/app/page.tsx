"use client";
import { useState } from "react";

import { Card, ChargeForm, Receipt } from "@/components";

export default function HomePage() {
  const [simType, setSimType] = useState<string>("persist");
  const [isAmazingBonus, setIsAmazingBonus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [charge, setCharge] = useState<string | undefined>("10000");

  return (
    <main className="flex xl:items-center xl:justify-center xl:h-screen w-full py-20 xl:py-0">
      <Card>
        <div className="grid grid-cols-12">
          <ChargeForm
            {...{
              simType,
              setSimType,
              isAmazingBonus,
              setIsAmazingBonus,
              phoneNumber,
              setPhoneNumber,
              email,
              setEmail,
              charge,
              setCharge,
            }}
          />
          <Receipt
            {...{ simType, isAmazingBonus, email, phoneNumber, charge }}
          />
        </div>
      </Card>
    </main>
  );
}
