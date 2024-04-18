"use client";
import { cn } from "@/lib/utils";
import { useEmiState } from "@/states/emi-states";
import { useLoan1 } from "@/states/loan-states";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const HeaderText = ({ step }: { step: 1 | 2 | 3 }) => {
  const [typeLoan] = useLoan1((state) => [state.loanType]);
  const [amount] = useEmiState((state) => [state.principle]);

  return (
    <h2
      className={cn(
        "text-base xx:text-lg sm:text-xl font-[600] mb-4 text-center px-4 py-2 w-full bg-gray-700 text-white rounded capitalize",
        poppins.className
      )}
    >
      {step === 1 && "Please Select Loan Type"}
      {step === 2 &&
        `${typeLoan} Loan Calculation of ${amount.toLocaleString()}`}
      {step === 3 && "Please Select Bank"}
    </h2>
  );
};
