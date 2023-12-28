import { FC } from "react";
import { Deposit } from "@/components/Deposit";
import { AccountHead } from "@/components/AccountHead";
import { BottomMenu } from "@/components/BottomMenu";
import { BaseScreen } from "@/screens/bases/BaseScreen";

export const DepositScreen: FC = () => {
  return (
    <BaseScreen head={<AccountHead />} bottom={<BottomMenu />}>
      <Deposit />
    </BaseScreen>
  );
};
