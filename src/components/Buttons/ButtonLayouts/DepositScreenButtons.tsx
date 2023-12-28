import { BankTransfer } from "@/assets/icons/BankTransfer";
import { InvestBlockchain } from "@/assets/icons/InvestBlockchain";
import { Neteller } from "@/assets/icons/Neteller";
import { PaymentCard } from "@/assets/icons/PaymentCard";
import { Skrill } from "@/assets/icons/Skrill";

interface ButtonData {
  icon: JSX.Element;
  title: string;
}

export const depositScreenButtons: ButtonData[] = [
  { icon: <PaymentCard />, title: "Payment Card" },
  { icon: <BankTransfer />, title: "Bank Transfer" },
  { icon: <Skrill />, title: "Skrill" },
  { icon: <Neteller />, title: "Neteller" },
  { icon: <InvestBlockchain />, title: "Invest from Blockchain" },
];
