import { useState } from "preact/hooks";

import { Box } from "@mui/material";

import { BaseScreen } from "../bases/BaseScreen";

import { REQ_ACCOUNT_GET_HOME } from "../../managers/AccounHomeManager";

import { AccountHead } from "../../components/AccountHead";
import { Loading } from "../../components/Reusable/Loading";
import { MainContainer } from "../../components/Containers/MainContainer";
import { BottomMenu } from "../../components/BottomMenu";
import { AccountStats } from "../../components/AccountHomeStats/AccountStats";
import { AccountsBalanceStat } from "../../components/AccountHomeStats/AccountsBalanceStat";
import { StatsContainer } from "../../components/Containers/AccountScreenContainers/StatsContainer";
import { DukascoinContainer } from "../../components/Containers/AccountScreenContainers/DukascoinContainer";
import { TransactionsContainer } from "../../components/Containers/AccountScreenContainers/TransactionsContainer";

export const AccountHomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [accountHomeData] = REQ_ACCOUNT_GET_HOME.useRequest(() =>
    setIsLoading(false)
  );

  console.log(accountHomeData);

  if (isLoading) return <Loading />;

  return (
    <BaseScreen head={<AccountHead />} bottom={<BottomMenu />} sx={{ pt: 8 }}>
      <Box sx={{ pt: 1, pb: 1, display: "flex", flexDirection: "column" }}>
        <AccountStats />
        <AccountsBalanceStat />
      </Box>

      <MainContainer>
        <StatsContainer />
      </MainContainer>

      <MainContainer title="Dukascoin">
        <DukascoinContainer />
      </MainContainer>

      <MainContainer title="Latest Transactions">
        <TransactionsContainer />
      </MainContainer>
    </BaseScreen>
  );
};
