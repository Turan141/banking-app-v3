import { AccountsBalanceStat } from "./AccountsBalanceStat";
import { AccountStats } from "./AccountStats";

export const AccountHomeStats = () => {
  return (
    <>
      <AccountStats />
      <AccountsBalanceStat />
    </>
  );
};
